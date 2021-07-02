import React, { Component } from 'react'
import '../../assets/css/Landing_Page/index.css'
import config from '../../config.json'

import NewsCard from './NewsCard'
class LatestNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news : [],
         }
    }

    componentDidMount() {
        //fetching the data from the database

        fetch(config.host + "/news/").then(res => res.json()).then(data => {
            console.log(data)
            this.setState({news:data})
        })
    }
    render() { 
        return (
            <div> 
                <h1>Latest <span>News</span></h1>
                <div className="flex-container">
                    {this.state.news.map(item => {
                        return (
                            <div><NewsCard date={item.edate} name={item.name} url={ item.url} image={item.image} des={item.des}/></div>
                        );
                    })}
                </div>
            </div>
         );
    }
}
 
export default LatestNews;