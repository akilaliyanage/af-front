import React, { Component } from 'react'
import config from '../../config.json'

class MainTopic extends Component {
    constructor(props) {
        super(props);
        this.tick = this.tick.bind(this)
        this.fetchTopic = this.fetchTopic.bind(this)
        this.fetchEventDate = this.fetchEventDate.bind(this)
        this.state = { 
            seconds : 0,
            minutes : 0,
            hours : 0,
            days : 0,
            date : '',
            topic : '',
            subtop : '',
            datetime : '',
            venue : ''
         }
    }

    componentDidMount(){

        //fetch methods       
        this.fetchEventDate()
        this.fetchTopic()

        var now = new Date().getTime();
        var countDownDate = new Date(this.state.date).getTime();
        var timeleft = countDownDate - now;
        
        var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    
        this.setState({seconds : seconds,minutes : minutes, hours : hours, days : days})
    
        this.timer = setInterval(this.tick, 1000);
    }

    fetchTopic(){
        fetch(config.host + "/topic").then(res => res.json()).then(data => {
            this.setState({topic : data[0]["topic"],venue : data[0]['venue'], subtop : data[0]['SubTopic'], datetime : data[0]['datemonth']})
        }).catch(err =>{
            alert(err)
        })
    }

    fetchEventDate(){
        fetch(config.host + "/event-date").then(res => res.json()).then(data =>{
            console.log(data)
            this.setState({date : data['date']})
        }).catch(err =>{
            //alert(err)
            console.log(err)
        })
    }

    tick(){
        var now = new Date().getTime();
        var countDownDate = new Date(this.state.date).getTime();
        var timeleft = countDownDate - now;
        
        var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        

        this.setState({seconds : seconds,minutes : minutes, hours : hours, days : days})
    
        if (this.state.seconds > 0) {
          //this.setState({seconds: this.state.seconds - 1})
        } else {
          //clearInterval(this.timer);
          //window.location.reload();
        }
      }
    render() { 
        return (
            <div style={{color:'white'}}>
                <h1 style={{color:'white'}}>{this.state.topic}</h1>
                    <h2 style={{color:'white'}}>{this.state.subtop}</h2>
                    <h3 style={{color:'white'}}>Sri Lanka, {this.state.datetime} <span> @ {this.state.venue}</span></h3>
                        <br />
                    <div className="akila-container">
                        <div>{this.state.days} D</div>
                        <div>{this.state.hours} H</div>  
                        <div>{this.state.minutes} M</div>
                        <div>{this.state.seconds} S</div>
                    </div>
            </div>
         );
    }
}
 
export default MainTopic;