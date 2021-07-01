import { Card, Col, Row } from 'antd';
import React, { Component } from 'react';
import { Timeline } from 'antd';
import { Carousel } from 'antd';
import { Avatar } from 'antd';
import { Image } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, ForkOutlined } from '@ant-design/icons';
import { Descriptions, Badge } from 'antd';

const { Meta } = Card;

const contentStyle = {
    height: '30vh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

class Tracks extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="akila-tracks">
                <Row style={{paddingTop:'2%',paddingLeft:'2%'}}>
                    <Col span={15}>
                        <Row>
                            <Col span={8}>
                                 <Card
                                    style={{ width: 300 }}
                                    cover={
                                    <img
                                        alt="example"
                                        src="https://502343-1592314-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/03/web-design-2021-1-1024x635.jpg"
                                    />
                                    }
                                    
                                >
                                     <Timeline>
                                        <Timeline.Item>React JS</Timeline.Item>
                                        <Timeline.Item>Node JS</Timeline.Item>
                                        <Timeline.Item>KOA JS</Timeline.Item>
                                        <Timeline.Item>Express/Node JS</Timeline.Item>
                                    </Timeline>

                                    <Meta
                                    avatar={
                                        <ForkOutlined />
                                    }
                                    title="Application Frameworks"
                                    />
                                </Card>
                            </Col>

                            <Col span={8}>
                                 <Card
                                    style={{ width: 300 }}
                                    cover={
                                    <img
                                        alt="example"
                                        src="https://clockwise.software/img/blog/relational-vs-non-relational-databases-advantages-and-disadvantages/header-background.jpg"
                                    />
                                    }
                                    
                                >
                                      <Timeline>
                                        <Timeline.Item>MYSQL</Timeline.Item>
                                        <Timeline.Item>MSSQL Server</Timeline.Item>
                                        <Timeline.Item>Mongo DB</Timeline.Item>
                                    </Timeline>

                                    <Meta
                                    avatar={ <ForkOutlined />}
                                    title="Databases"
                                    />
                                </Card>
                            </Col>

                            <Col span={8}>
                            <Card
                                    style={{ width: 300 }}
                                    cover={
                                    <img
                                        alt="example"
                                        src="https://thetrendingbuzz.com/wp-content/uploads/2019/04/Cloud-Storage-Services-Startups-e1555350085421.png"
                                    />
                                    }
                                   
                                >

                                    <Timeline>
                                        <Timeline.Item>Docker</Timeline.Item>
                                        <Timeline.Item>Kubernates</Timeline.Item>
                                        <Timeline.Item>AWS</Timeline.Item>
                                    </Timeline>
                                    <Meta
                                    avatar={ <ForkOutlined />}
                                    title="Cloud Services / DevOps"
                                    />
                                </Card>
                            </Col>
                        </Row>
     
                    </Col>

                    <Col span={9} style={{paddingTop:'2%'}}>
                        <div className="topics">
                            <h1 style={{fontSize:"7rem"}}>Conference</h1>
                            <h2 style={{fontSize:"4rem"}}>Tracks</h2>
                        </div>
                    </Col>
                </Row>
            </div>
         );
    }
}
 
export default Tracks;