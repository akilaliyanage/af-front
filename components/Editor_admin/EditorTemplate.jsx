import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Avatar, Card, Input, Form , DatePicker, Button, message} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Descriptions, Badge } from 'antd';
import {Link} from 'react-router-dom'
import config from '../../config.json'
import Footer from '../landing_page/Footer'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


class EditorTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            topic:'',
            venue:'',
            subtop:'',
            datetime:'',
            url:'',
            newurl: '',
            date: '',
            topicPen: 0
         }
    }

    onChange = (date, dateString) => {
        console.log(date, dateString);
        this.setState({date : dateString})
      }

    componentDidMount(){
        this.fetchTopic()

        fetch(config.host + "/edi-noti/pending-topic").then(res => res.json()).then(data => {
            this.setState({topicPen : data.len})
            console.log(data.len)
        }).catch(err =>{
            console.log(err)
        })
    }
    

      fetchTopic = () => {
        fetch(config.host + "/topic").then(res => res.json()).then(data => {
            this.setState({topic : data[0]["topic"],venue : data[0]['venue'], subtop : data[0]['SubTopic'], datetime : data[0]['datemonth'], url : data[0]['url']})
        }).catch(err =>{
            //alert(err)
            console.log(err)
        })

    }

    handleChange = (e) =>{
        this.setState({[e.target.name] : e.target.value});
        console.log([e.target.name] , e.target.value)
    }

    handSubmit = () =>{
        const data = {
            topic : this.state.top,
            SubTopic : this.state.sub,
            datemonth : this.state.date,
            venue : this.state.ven,
            url : this.state.newurl
        }

        console.log(data)

        fetch(config.host + '/topic/sendToAdmin',{
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
        return (
            <Layout>
            <Header className="header">
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">
                <div className="dropdown">
        <Avatar src={window.localStorage.getItem('proImg')} />
            <div className="dropdown-content" style={{backgroundColor:'white', color:'white'}}>
                <p style={{color:'black'}}>{window.localStorage.getItem('username')}</p>
                <Link><p onClick={this.logout}>Log Out</p></Link>
            </div>
        </div>
                </Menu.Item>
              </Menu>
            </Header>
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
                    defaultSelectedKeys={['1']}
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
                    <Descriptions title="Current Topic details" bordered>
                    <Descriptions.Item label="Main Topic">{this.state.topic}</Descriptions.Item>
                    <Descriptions.Item label="Sub topic">{this.state.subtop}</Descriptions.Item>
                    <Descriptions.Item label="Venue">{this.state.venue}</Descriptions.Item>
                    <Descriptions.Item label="Date">{this.state.datetime}</Descriptions.Item>
                    <Descriptions.Item label="Link" span={2}>
                    {this.state.url}
                    </Descriptions.Item>
                    <Descriptions.Item label="Status" span={3}>
                    <Badge status="processing" text="Active" />
                    </Descriptions.Item>
                    <Descriptions.Item label="Pending Activities" span={3}>
                    <Badge status="warning" text={this.state.topicPen} />
                    </Descriptions.Item>
                </Descriptions>
                    </Card>
                        <br />
                    <Card title="New Topic">
                        <Form.Item
                            label="Main Topic"
                            onChange={this.handleChange}
                            name="top"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input name="top"  onChange={this.handleChange}/>
                        </Form.Item>
                        
                        <Form.Item
                            label="Sub Topic"
                            name="sub"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input name="sub" onChange={this.handleChange}/>
                        </Form.Item>

                        <Form.Item
                            label="Venue"
                            name="ven"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input name="ven" onChange={this.handleChange}/>
                        </Form.Item>

                        <Form.Item
                            label="Date"
                            name="date"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                             <DatePicker onChange={this.onChange} />
                        </Form.Item>

                        <Form.Item
                            label="URL"
                            name="newurl"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input  name="newurl" onChange={this.handleChange}/>
                        </Form.Item>

                        <Button block type="primary" onClick={this.handSubmit}>SUBMIT</Button>

                    </Card>
                </Content>
              </Layout>
            </Content>
           <Footer/>
          </Layout>
          );
    }
}
 
export default EditorTemplate;