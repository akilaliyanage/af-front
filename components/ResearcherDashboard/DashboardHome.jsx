import React, { Component } from 'react';
import "antd/dist/antd.css";
import { notification} from 'antd';
import { Layout, Menu, Breadcrumb, Avatar, Card, Input, Form , DatePicker, Button, message} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Descriptions, Badge } from 'antd';
import {Link} from 'react-router-dom'
import config from '../../config.json'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import ResearchCard from './ResearchCard'
import PresentationAddModel from './PresentationAddModel'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default class DashboardHome extends Component {

    constructor(props){
        super(props)
        this.state = {
            presentationmodelOpen:false,
            researcher:'',
            researcherResearchPapers : '',
            selectedResearchPaperId : '',

            researcherName : '',
            researchPaperName : '',
            presentationName : '',
            presentationSlides : '',
            presentationDatetime : '',
            presentationSlidesUrl : '',
            feedback : '',
            
        
        }
        this.toggleModel = this.toggleModel.bind(this);
        this.getValueOnChange = this.getValueOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.presentationResearch = this.presentationResearch.bind(this);
        this.fileChanger = this.fileChanger.bind(this);
    }


    componentDidMount(){
        console.log('Researcher Id Is : ' , localStorage.getItem('id'))
        fetch(config.host + "/researcher/" + localStorage.getItem('id')).then(res => res.json()).then(data =>{
            console.log('Research by id called in mount')
            this.setState({researcher : data.data})
            console.log(this.state.researcher["fName"])
            console.log(this.state.researcher)
        }).catch(err =>{
            alert(err)
        })

        fetch(config.host + "/researchPaper/byResearcher/" + localStorage.getItem('id')).then(res => res.json()).then(data =>{
            console.log('research papers by researchers called')
            this.setState({researcherResearchPapers : data.data})
            console.log('r Papers : ' ,  data.data[0])
        }).catch(err =>{
            alert(err)
        })
    }

    handleSubmit(e){
        e.preventDefault();
        console.log('Submit method called : ')
        const presentationFile = new FormData()
        presentationFile.append('image', this.state.presentationSlides)

        fetch(config.host + "/image", {
            method: 'POST',
            body: presentationFile
          })
          .then(response => response.json())
          .then(data => {
            console.log(data)
            console.log('successful url is : ' , data.Location);
            this.setState({presentationSlidesUrl : data.Location});
                const presentationData = {
                researcherName : this.state.researcherName,
                researchPaperName: this.state.researchPaperName,
                presentationName : this.state.presentationName,
                presentationSlidesUrl : this.state.presentationSlidesUrl,
                presentationDatetime : this.state.presentationDatetime,
                researcherId : this.state.researcher._id,
                researchPaperId : this.state.selectedResearchPaperId,
            }
    
            fetch(config.host + '/presentation',{
                method : 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body : JSON.stringify(presentationData)
            }).then(res => {
                console.log("status is" , res.status)
                if(res.status == 200){
                    this.toggleModel(null , null)
                    //this.setState({presentationmodelOpen:this.state.presentationmodelOpen})
                    this.setState({feedback:'Successfully uploaded for review'})
                    notification['success']({
                        message: 'You have made a presentation request Successfully.',
                        description: 'Thank you -  Approval of your presentation will notified shortly.'
                    });
                }
                else{
                    this.setState({feedback:'Uploaded Failed'})
                    notification['error']({
                            message: 'Request Failed.',
                            description: 'Sorry -  Something went wrong. Please try againn..'
                    });
                }
                
            }).catch(error =>{
                console.log(error)
                this.setState({feedback:'Uploaded Failed'})
                notification['error']({
                        message: 'Request Failed.',
                        description: 'Sorry -  Something went wrong. Please try againn..'
                });
            })
            
        })
        .catch(error =>{
                console.log(error)
                this.setState({feedback:'Uploaded Failed'})
                notification['error']({
                        message: 'Request Failed.',
                        description: 'Sorry -  Something went wrong. Please try againn..'
                });
            })
      
    }

    getValueOnChange(val){
        console.log("getValueOnChange CALLED")
        this.setState({[val.target.name] : val.target.value})
        console.log(val.target.name , val.target.value)
    }

    toggleModel(Name , Id){
        if(Name != null && Id != null){
            this.setState({researchPaperName : Name})
            this.setState({selectedResearchPaperId : Id})
            console.log('selectedResearchPaperId : ' ,  this.state.selectedResearchPaperId)
        }

        console.log('toggleModel Called')
        this.setState({presentationmodelOpen:!this.state.presentationmodelOpen})
        
    }

    presentationResearch(Name , Id){
       this.setState({researchPaperName : Name})
       this.setState({selectedResearchPaperId : Id})
    }

    fileChanger(event){
        this.setState({presentationSlides : event.target.files[0]});
    };

    render() {
        return (
            <Layout>
                <Header className="header">
                    {/* <div className="logo" /> */}
                    <div className="row d-flex justify-content-between align-items-center">
                        <h3 className="mt-3 text-light" style={{color:'white'}}>ICAF - Researcher Dashboard</h3>
                        <h3 className="mt-1 text-light" style={{color:'white' , padding:10}}>Welcome Again ! - Researcher</h3>
                    </div>
                </Header>
                <Layout>
                    <Sider className="site-layout-background" width={300}>
                        <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%' }} >
                            <SubMenu key="sub1" icon={<UserOutlined />} title="Researcher">
                                <Menu.Item key="1"> <Link to="/researcher-dashboard">My Research Papers</Link></Menu.Item>
                                <Menu.Item key="4"> <Link to="/edi-admin/news">My Presentations</Link></Menu.Item>
                                <Menu.Item key="2"> <Link to="/researcher-notifications">Notifications</Link></Menu.Item>
                                <Menu.Item key="3"> <Link to="/Add-ResearchPaper">Create Research Paper</Link></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <Paper className="paper-bounderies mt-3 p-4 bg-primary">
                            <div className='row text-center'>
                                <h1>My Research Papers</h1>
                            </div>
                        </Paper>
                        
                            {this.state.researcherResearchPapers.length > 0 && this.state.researcherResearchPapers.map((item, index) =>(
                                <Paper className="paper-bounderies mt-3 p-4">
                                    <div className='row text-center'>
                                        <ResearchCard 
                                            toggleModel={this.toggleModel} 
                                            researchPaperModel={item}
                                            researcherName={this.state.researcher.fName + " " + this.state.researcher.mName + " " + this.state.researcher.lName}
                                            selectedPaper={this.state.selectedPaper}
                                            presentationResearch={this.presentationResearch}
                                        />
                                    </div>
                                </Paper>
                            ))}
                            
                    </Content>
                    <PresentationAddModel fileChanger={this.fileChanger} getValueOnChange={this.getValueOnChange} researchPaperName={this.state.researchPaperName} selectedResearchPaperId={this.state.selectedResearchPaperId} opened={this.state.presentationmodelOpen} toggleModel={this.toggleModel} researcherName={this.state.researcher.fName + " " + this.state.researcher.mName + " " + this.state.researcher.lName} handleSubmit={this.handleSubmit} researchPaperName={this.state.researchPaperName}/>
                </Layout>    
            </Layout>
        )
    }
}
