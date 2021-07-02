import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Avatar, Card, Input, Form , DatePicker, Button, message, Table, Tag, Space} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Descriptions, Badge } from 'antd';
import {Link} from 'react-router-dom'
import config from '../../config.json'
import { Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Footer from '../landing_page/Footer'
import NavBar from '../landing_page/NavBar'

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
      window.localStorage.setItem('newsImg',info.file.response.Location)

    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};


const columns = [
  {
    title: 'Event Date',
    dataIndex: 'date',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Description',
    dataIndex: 'des',
    key: 'age',
  },
  {
    title: 'URL pattern',
    dataIndex: 'url',
    key: 'address',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <Button onClick={ () => {
          console.log(record._id);
          fetch(config.host+ "/news/delete/" + record._id,{
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


class EventNews extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[],
            newsList:[],
            datePen: 0,
            ename : '',
            edes : '',
            eurl : '',
            edate : '',
            navbar_items :[]
         }
    }

    onChange = (date, dateString) => {
        console.log(date, dateString);
        this.setState({edate : dateString})
      } 

    componentDidMount(){

      //calling the api to fetch data
      fetch(config.host + "/nav-items").then(res => res.json()).then(data =>{
        console.log(data)
        this.setState({navbar_items:data})
    })


        fetch(config.host + "/news").then(res => res.json()).then(data => {
          this.setState({newsList : data})
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

      handSubmitNews = (e) =>{
        console.log(this.state.evDate)

        const data = {
            des : this.state.edes,
            url : this.state.eurl,
            image : window.localStorage.getItem('newsImg'),
            edate : this.state.edate,
            name : this.state.ename
        }

        console.log(data)

        fetch(config.host + '/news/sendToAdmin',{
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
                    defaultSelectedKeys={['4']}
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
                        <Table columns={columns} dataSource={this.state.newsList} />
                    </Card>
                        <br />
                    <Card title="New Topic">

                        <Form.Item
                            label="Event Name"
                            name="ven"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input name="ename" onChange={this.handleChange}/>
                        </Form.Item>

                        <Form.Item
                            label="Event Description"
                            name="ven"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input name="edes" onChange={this.handleChange}/>
                        </Form.Item>


                        <Form.Item
                            label="Event Event Url"
                            name="ven"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input name="eurl" onChange={this.handleChange}/>
                        </Form.Item>

                        <Form.Item
                            label="Event Date"
                            name="edate"
                            style={{width : '100%'}}
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                              <DatePicker style={{width : '100%'}} showTime onChange={this.onChange} onOk={this.onOk} />
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



                        <Button block type="primary" onClick={this.handSubmitNews}>SUBMIT</Button>

                    </Card>
                </Content>
              </Layout>
            </Content>
            <Footer/>
          </Layout>
          );
    }
}
 
export default EventNews;