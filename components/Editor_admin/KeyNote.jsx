import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Avatar, Card, Input, Form , DatePicker, Button, message, Table, Tag, Space} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Descriptions, Badge } from 'antd';
import {Link} from 'react-router-dom'
import config from '../../config.json'
import { Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Footer from '../landing_page/Footer'

const { SubMenu } = Menu;
const { RangePicker } = DatePicker;
const { Header, Content, Sider } = Layout;

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
      window.localStorage.setItem('keynote',info.file.response.Location)

    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};


const columns = [
  {
    title: 'Speaker Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Designation/Description',
    dataIndex: 'des',
    key: 'age',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <Button onClick={ () => {
          console.log(record._id);
          fetch(config.host+ "/keynote/delete/" + record._id,{
            method : 'DELETE',
          }).then(res => res.json()).then(data =>{
            console.log(data);
            if(data.message == "deleted"){
              message.success('Successfully deleated the item from the database.');
            }else{
              message.error('Error occurred');
            }

            setTimeout(function(){
              window.location.reload()
            },500)
          })
        }} style={{backgroundColor : 'red', color : 'white'}} type="default">Delete</Button>
      </Space>
    ),
  },
];


class KeyNote extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          keynote : [],
          kname : '',
          kdes : ''
         }
    }

    onChange = (date, dateString) => {
        console.log(date, dateString);
        this.setState({edate : dateString})
      } 

    componentDidMount(){


        fetch(config.host + "/keynote").then(res => res.json()).then(data => {
          this.setState({keynote : data})
          console.log(data);
          //console.log(data.len)
      }).catch(err =>{
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

      handSubmitKeynote = (e) =>{

        const data = {
            des : this.state.kdes,
            image : window.localStorage.getItem('keynote'),
            name : this.state.kname
        }

        console.log(data)

        fetch(config.host + '/keynote/sendToAdmin',{
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
                    defaultSelectedKeys={['5']}
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
                    <Card title="Current News Items">
                        <Table columns={columns} dataSource={this.state.keynote} />
                    </Card>
                        <br />
                    <Card title="Keynote Speaker Name">

                        <Form.Item
                            label="Event Name"
                            name="kname"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input name="kname" onChange={this.handleChange}/>
                        </Form.Item>

                        <Form.Item
                            label="Keynote Speaker Description"
                            name="ven"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input name="kdes" onChange={this.handleChange}/>
                        </Form.Item>

                        <Form.Item
                            label="Upload Image"
                            style={{width : '100%'}}
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                                <Upload {...props}>
                                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                </Upload>
                        </Form.Item>



                        <Button block type="primary" onClick={this.handSubmitKeynote}>SUBMIT</Button>

                    </Card>
                </Content>
              </Layout>
            </Content>
            <Footer/>
          </Layout>
          );
    }
}
 
export default KeyNote;