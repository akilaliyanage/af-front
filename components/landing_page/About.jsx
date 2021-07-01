import { Col, Row } from 'antd';
import React, { Component } from 'react'
import config from '../../config.json'
import { Divider } from 'antd';

class About  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            des : '',
            topic : ''
         }
    }

    componentDidMount(){

        this.fetchTopic()

        fetch(config.host + "/about").then(res => res.json()).then(data =>{
            console.log(data[0]["des"])
            this.setState({des : data[0]["des"]})
        }).catch(err =>{
            alert(err)
        })
    }

    fetchTopic(){
        fetch(config.host + "/topic").then(res => res.json()).then(data => {
            this.setState({topic : data[0]["topic"]})
        }).catch(err =>{
            alert(err)
        })
    }
    render() { 
        return (
            <div>
                <Row>
                    <Col span={12} style={{paddingLeft:"10rem"}}>
                        <h1 style={{fontSize:"7rem"}}>About</h1>
                        <br />
                        <h2 style={{fontSize:"4rem"}} >{this.state.topic}</h2>
                        <h1 style={{fontSize:"7rem"}}>Conference</h1>

                        <Divider type="vertical" />
                    </Col>
                    <Col span={12}> 
                        <p>{this.state.des}</p>
                    </Col>
                </Row>
            </div>
         );
    }
}
 
export default About;