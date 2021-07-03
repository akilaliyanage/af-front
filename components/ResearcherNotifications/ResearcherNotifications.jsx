import React, { Component } from 'react'
import ResearchPaperNotification from './ResearchPaperNotification'
import PresentationNotification from './presentationNotification'
import "antd/dist/antd.css";
import { notification} from 'antd';
import { Layout, Menu, Breadcrumb, Avatar, Card, Input, Form , DatePicker, Button, message} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Descriptions, Badge } from 'antd';
import {Link} from 'react-router-dom'
import config from '../../config.json'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default class ResearcherNotifications extends Component {
    constructor(props){
        super(props);
        this.state = {
            paperNotifications : [],
            presentationNotifications : [],
        }
        this.renderApprovedRpapers = this.renderApprovedRpapers.bind(this)
    }

    componentDidMount(){
        fetch(config.host + "/approveNotification/r-papers/" + localStorage.getItem('id')).then(res => res.json()).then(data =>{
            
            this.setState({paperNotifications : data.data})
            console.log('approveNotification/r-papers/ : ' , data.data)

        }).catch(err =>{
            alert(err)
        })



        fetch(config.host + "/approveNotification/presentations/" + localStorage.getItem('id')).then(res => res.json()).then(data =>{
            console.log('/approveNotification/presentations/ called')
            this.setState({presentationNotifications : data.data})
        }).catch(err =>{
            alert(err)
        })
    }

    renderApprovedRpapers(){
        if(this.state.paperNotifications.length > 0){
            return(
                <Paper className="paper-bounderies border-primary mt-3 p-4">
                                    <div className='row text-center'>
                                       <ResearchPaperNotification paperNotifications={this.state.paperNotifications._id}/>
                                    </div>
                                </Paper>
            )
        }
    }
    render() {
        let temppaperNotification = [];
        if(this.state.paperNotifications.length > 0){
           temppaperNotification = this.state.paperNotifications;
        }
        let tempPresentationNotifications = [];
        if(this.state.paperNotifications.length > 0){
           tempPresentationNotifications = this.state.presentationNotifications;
        }
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
                        <Menu mode="inline" defaultSelectedKeys={['2']} defaultOpenKeys={['sub1']} style={{ height: '100%' }} >
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
                                <h1>Notifications</h1>
                            </div>
                        </Paper>
                        
                            {temppaperNotification.map((item) =>{
                                return(
                                    <Paper className="paper-bounderies border-primary mt-3 p-4">
                                    <div className='row text-center'>
                                       <ResearchPaperNotification paperNotifications={item._id}/>
                                    </div>
                                </Paper>
                                )
                            })} 
                            {tempPresentationNotifications.map((item) =>( 
                                <Paper className="paper-bounderies border-primary mt-3 p-4">
                                    <div className='row text-center'>
                                       <PresentationNotification presentationNotifications={item._id}/>
                                    </div>
                                </Paper>
                            ))}
                            
                    </Content>
                    
                </Layout>    
            </Layout>
        )
    }
}
