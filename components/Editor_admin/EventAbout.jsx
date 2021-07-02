import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Avatar, Card, Input, Form , DatePicker, Button, message} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Descriptions, Badge } from 'antd';
import {Link} from 'react-router-dom'
import config from '../../config.json'
import Footer from '../landing_page/Footer'
import NavBar from '../landing_page/NavBar'

const { SubMenu } = Menu;
const { TextArea } = Input;
const { RangePicker } = DatePicker;
const { Header, Content, Sider } = Layout;


class EventAbout extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            about : '',
            nabout:'',
            aboutPen: 0,
            navbar_items : []
         }
    }

    onChange = (date, dateString) => {
        console.log(date, dateString);
        this.setState({evDate : dateString})
      }

    componentDidMount(){
        this.fetchEventAbout()

        //calling the api to fetch data
        fetch(config.host + "/nav-items").then(res => res.json()).then(data =>{
          console.log(data)
          this.setState({navbar_items:data})
      })

        fetch(config.host + "/edi-noti/pending-about").then(res => res.json()).then(data => {
          this.setState({aboutPen : data.len})
          console.log(data.len)
      }).catch(err =>{
          console.log(err)
      })
    }
    

    fetchEventAbout = () =>{
        fetch(config.host + "/about").then(res => res.json()).then(data =>{
            console.log(data[0]['des'])
            this.setState({about : data[0]['des']})
        }).catch(err =>{
            //alert(err)
            console.log(err)
        })

    }

    handleChange = (e) =>{
        this.setState({[e.target.name] : e.target.value});
        console.log([e.target.name] , e.target.value)
    }


    onOk = (value) =>{
        console.log('onOk: ', value);
      }

      handSubmitAbout = () =>{

        const data = {
            des : this.state.nabout
        }

        console.log(data)

        fetch(config.host + '/about/sendToAdmin',{
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body : JSON.stringify(data)
        }).then(res => res.json()).then(data =>{
            console.log(data.message)

            if(data.message == 'success'){
              message.success('Request sent to the admin, successfully');
            }
            
        }).catch(err =>{
            console.log(err)
        })
    }



    render() { 
      if(window.localStorage.getItem('role') != 'editor'){
        window.location.replace('/edi-login')
    }
        return (
            <Layout>
            <div style={{backgroundColor:'#07074b'}}>
                <NavBar items={this.state.navbar_items}/>
                </div>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Editor</Breadcrumb.Item>
                <Breadcrumb.Item>Admin</Breadcrumb.Item>
              </Breadcrumb>
              <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                <Sider className="site-layout-background" width={200}>
                  <Menu
                    mode="inline"
                    defaultSelectedKeys={['3']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%' }}
                  >
                    <SubMenu key="sub1" icon={<UserOutlined />} title="Edit homepage">
                    <Menu.Item key="1"> <Link to="/edi-admin">Topic</Link></Menu.Item>
                      <Menu.Item key="2"> <Link to="/edi-admin/date">Event Date</Link></Menu.Item>
                      <Menu.Item key="3"> <Link to="/edi-admin/about">Event About</Link></Menu.Item>
                      <Menu.Item key="4"> <Link to="/edi-admin/news">Event News</Link></Menu.Item>
                      <Menu.Item key="5"> <Link to="/edi-admin/keynote">Keynote Speakers</Link></Menu.Item>
                    </SubMenu>
                  </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    <Card>
                    <Descriptions title="Event About" bordered>
                    <Descriptions.Item label="Current Event About" span={12}>{this.state.about}</Descriptions.Item>
                    <Descriptions.Item label="Status" span={3}>
                    <Badge status="processing" text="Active" />
                    </Descriptions.Item>
                    <Descriptions.Item label="Pending Activities" span={3}>
                    <Badge status="warning" text={this.state.aboutPen} />
                    </Descriptions.Item>
                </Descriptions>
                    </Card>
                        <br />
                    <Card title="New Topic">

                        <Form.Item
                            label="New ABout"
                            name="nabout"
                            style={{width : '100%'}}
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                             <TextArea name="nabout" onChange={this.handleChange} rows={4} />
                        </Form.Item>

                        <Button block type="primary" onClick={this.handSubmitAbout}>SUBMIT</Button>

                    </Card>
                </Content>
              </Layout>
            </Content>
            <Footer/>
          </Layout>
          );
    }
}
 
export default EventAbout;