import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Image, Button } from 'antd';
import { Row, Col } from 'antd';
import { Input } from 'antd';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
import config from '../../config.json'
import { notification, Space } from 'antd';
import {Link, Redirect} from 'react-router-dom'
import Footer from '../landing_page/Footer'


const { Header, Content } = Layout;

class UserKeliton extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username : '',
            password: ''
         }
    }

    handleSubmit = () => {
        const data = {
            username : this.state.username,
            password : this.state.password
        }
        console.log(data);

        fetch(config.host + '/n-user/login',{
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body : JSON.stringify(data)
        }).then(res => res.json()).then(data =>{
            console.log(data)

            if(data.token){
                // alert('login')
                window.localStorage.setItem('token',data.token)
                window.localStorage.setItem('id',data.id)
                window.localStorage.setItem('username',data.username)
                window.localStorage.setItem('proImg',data.proImg)
                window.localStorage.setItem('role','atendee')
                notification['success']({
                    message: 'Login Sucessfull',
                    description:
                      'You have sucessfully logged into the syste, you will redirect to the homepage shortly',
                  });
                  
                window.location.replace("/home")
            }
            
        }).catch(err =>{
            console.log(err)
        })
    }

   

    handleChange = (e) =>{
        console.log([e.target.name] , e.target.value);
        this.setState({[e.target.name] : e.target.value})
    }

    render() { 
        return (
            <Layout className="layout user-login" style={{ height: '100vh', backgroundColor:"white" }}>
                <Content style={{ padding: '0 50px' }}>
                    <div className="site-layout-content" >
                        <Row>
                            <Col span={9}>

                            </Col>

                            <Col span={15}>
                            <Row>
                            <Col span={8}>
                                <Image
                                    width={"80%"}
                                    preview={false}
                                    src="https://sliit-af-images.s3.amazonaws.com/images/IC+F.png"
                                    style={{marginLeft:'40px'}}
                                />
                                <Input autoComplete={false} size="large" placeholder="large size" prefix={<UserOutlined />} name="username"  onChange={this.handleChange}/>
                                <br />
                                <br />
                                <Input.Password size="large" placeholder="large size" prefix={<KeyOutlined />} name="password" onChange={this.handleChange}/>
                                <br />
                                <br />
                                <Button type="primary" block onClick={this.handleSubmit}>
                                    LOGIN
                                </Button>
                            </Col>
                        </Row>
                            </Col>
                        </Row>

                        
                        
                    </div>
                </Content>
                <Footer/>
            </Layout>
         );
    }
}
 
export default UserKeliton;