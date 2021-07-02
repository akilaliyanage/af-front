import { Row, Col } from 'antd';
import React, { Component } from 'react'
import Speaker from './Speaker'
import config from '../../config.json'

class KeynoteTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list : []
         }
    }

    componentDidMount(){
        //fetch key note
        fetch(config.host + "/keynote").then(res => res.json()).then(data => {
            this.setState({list : data})
            //console.log(this.state.list[0].image);
        })
        
    }
    render() { 

        return (
            <div>
                <div className="flex-container">
                    <div className="topics">
                        <h1>Our</h1>
                        <h2>Keynote</h2>
                        <h1>Speakers</h1>
                    </div>
                    <div className="info">
                        <Row>
                            {this.state.list.map(item =>{
                                return(
                                    <Col span={12}>
                                <div className="akila-speaker" style={{height:'300px'}}>
                                    <img data-testid="speaker-img" src={item.image} alt="" style={{objectFit:'contain', height:'100%'}}/>
                                    {this.props.colored?<canvas className="coveringCanvas"></canvas>:null}
                                        <div className="overlay">
                                            <p>{item.name}</p>
                                            <p>{item.des}</p>
                                    </div>
                                </div>
                            </Col>
                                )
                            })}
{/* 
                            <Col span={12}>
                                <div className="akila-speaker">
                                    <img data-testid="speaker-img" src={this.state.list[0].image} alt="" style={{objectFit:'cover'}}/>
                                    {this.props.colored?<canvas className="coveringCanvas"></canvas>:null}
                                        <div className="overlay">
                                            <p>{this.state.list[0].name}</p>
                                            <p>{this.state.list[0].des}</p>
                                    </div>
                                </div>
                            </Col> */}


                          
                        </Row>                    
                    </div>
                    
                </div>
            </div>
         );
    }
}
 
export default KeynoteTemplate;