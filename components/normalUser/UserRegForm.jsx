import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Image, Button } from 'antd';
import { Row, Col } from 'antd';
import { Input } from 'antd';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
import config from '../../config.json'
import { notification, Space } from 'antd';
import {Link, Redirect} from 'react-router-dom'
import { Upload, message } from 'antd';
import { UploadOutlined,MailOutlined } from '@ant-design/icons';
import Footer from '../landing_page/Footer'

const { Dragger } = Upload;

const { Header, Content } = Layout;
const props = {
    name: 'image',
    action: config.host + '/image',
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
        console.log(info.file.response.Location)
        window.localStorage.setItem('proImg',info.file.response.Location)

      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
class UserRegForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username : '',
            email : '',
            pass : '',
            repass : ''
         }
    }

    handleSubmit = () => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(this.state.pass != this.state.repass){
            message.error("Password mismatch");

        }else if(!re.test(String(this.state.email).toLowerCase())){
            message.error("Invalid email address");
        }else{


            const data = {
                username : this.state.username,
                password: this.state.pass,
                proImg : window.localStorage.getItem('proImg'),
                email : this.state.email
            }
            console.log(data);
    
            fetch(config.host + '/n-user/reg',{
                method : 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body : JSON.stringify(data)
            }).then(res => res.json()).then(data =>{
                console.log(data.message)

                if(data.message == 'ok'){
                    window.location.replace("/home")
                }
                
            }).catch(err =>{
                console.log(err)
            })
        }
    }

   

    handleChange = (e) =>{
        console.log([e.target.name] , e.target.value);
        this.setState({[e.target.name] : e.target.value})
    }
    render() { 
        return ( 
            <Layout className="layout user-login" style={{ height: 'auto', backgroundColor:"white" }}>
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content" >
                    <Row>
                        <Col span={8}></Col>
                        <Col span={8}>
                            <Image
                                width={"60%"}
                                preview={false}
                                src="https://sliit-af-images.s3.amazonaws.com/images/IC+F.png"
                                style={{marginLeft:'100px'}}
                            />
                            <Input autoComplete={false} size="large" placeholder="Username" prefix={<UserOutlined />} name="username"  onChange={this.handleChange}/>
                            <br />
                            <br />
                            <Input autoComplete={false} size="large" placeholder="Email" prefix={<MailOutlined />} name="email"  onChange={this.handleChange}/>
                            <br />
                            <br />
                            <Input.Password size="large" placeholder="Password" prefix={<KeyOutlined />} name="pass" onChange={this.handleChange}/>
                            <br />
                            <br />
                            <Input.Password size="large" placeholder="Re enter password" prefix={<KeyOutlined />} name="repass" onChange={this.handleChange}/>
                            <br />
                            <br />
                            <Upload {...props} style={{width:'100%'}}>
                                <Button block icon={<UploadOutlined />}>Click to Upload the Profile Image</Button>
                            </Upload>
                            <br />
                            <Button type="primary" block onClick={this.handleSubmit}>
                                REGISTER
                            </Button>
                        </Col>
                        <Col span={8}></Col>
                    </Row>
                </div>
            </Content>
            <br />
            <Footer/>
        </Layout>
         );
    }
}
 
export default UserRegForm;