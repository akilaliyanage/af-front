import React, { Component } from 'react'
import NavBar from './NavBar'
import MainTopic from './MainTopic'
import About from './About'
import LatestNews from './LatestNews'
import KeynoteTemplate from './KeynoteTemplate'
import config from '../../config.json'
import MoreKeynote from './MoreKeynote'
import Tracks from './Tracks'
import AddDetails from './AddDetails'
import Footer from './Footer'
import { withRouter } from 'react-router'

class Template extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            navbar_items : [],
         }
    }

    componentDidMount(){

        //calling the api to fetch data
        fetch(config.host + "/nav-items").then(res => res.json()).then(data =>{
            console.log(data)
            this.setState({navbar_items:data})
        })
    }
    render() { 
        return (
            <div className="akila-main-1">
                <div className='akila-template-header'>
                    <NavBar items={this.state.navbar_items}/>
                </div>

                <div className="akila-main-topic">
                    <MainTopic/>
                </div>

                <div className="akila-about-icaf">
                    <About/>
                </div>

                <div className="akila-latest-news">
                    <LatestNews/>
                </div>

                <dir className="akila-keynote-speakers">
                    <KeynoteTemplate/>
                </dir>
                <dir className="">
                    <Tracks/>
                </dir>
                <dir className="akila-keynote-morekeynote">
                    <AddDetails/>
                </dir>
                <dir className="akila-footer">
                    <Footer/>
                </dir>
                <div style={{textAlign:'center', backgroundColor:'#020c18', padding:"10px"}}>
                    Copyright © 2021 | All Rights Reserved
                </div>
            </div>
        );
    }
}
 
export default (Template);