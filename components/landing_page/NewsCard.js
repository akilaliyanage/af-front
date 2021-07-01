import React, { Component } from 'react'
import { Card } from 'antd';
import {Link} from 'react-router-dom'

const { Meta } = Card;

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
class NewsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        
        //{months[this.props.date.getMonth() + 1]} {this.props.date.getDate()}, { this.props.date.getFullYear()}
    }
    render() { 
        return (
            <Link to={this.props.url} style={{textDecoration:"none"}}>
                <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={this.props.image} />}
          >
            <Meta title={this.props.name} description={this.props.des + " @ " + this.props.date} />
          </Card>
            </Link>
         );
    }
}
 
export default NewsCard;