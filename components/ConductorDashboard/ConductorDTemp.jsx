import React, { Component } from 'react'
import './../../assets/css/WorkshopDetails/workshopDash.css'
import CreateWorkshop from './CreateWorkshop'
import MyWorkshops from './MyWorkshops'

import config from '../../config.json'

import { Button, notification } from 'antd';

class ConductorDTemp extends Component {

    constructor(props){
        super(props)
        this.state = {
            notifications:[],
            loginID:window.localStorage.getItem('wc-id'),
            loggedUser:window.localStorage.getItem('wc-email')
        }
        this.fetchItems = this.fetchItems.bind(this)
    }

    componentDidMount(){
        this.fetchItems(); 
    }

    fetchItems(){
        const id = this.state.loginID
        console.log(id)
        fetch(config.host + '/notify/myNoti/'+id ).then(res => res.json()).then(data => {
            this.setState({notifications:data})
            console.log(data)
            data.map((noti) => {
                this.openNotification(noti)
            })
        }).catch(err => console.log(err))

    }


    openNotification = (noti) => {
        const key = `open${Date.now()}`;
        const btn = (
          <Button type="primary" size="small" onClick={() => notification.close(key)}>
            Noted!
          </Button>
        );
        notification.open({
          message: noti.itemId,
          description:
            'Your Workshop is '+ noti.Status+' by the system reviewer.',
          btn,
          key,
          onClose: close,
        });
    };

    
render() {
        return (
            <div className="nt-dashboard">
                <div className="nt-sidenav" style={{color:"white"}}>
                    <div className="nt-sideHead">
                        <h1 style={{color:"white"}}>I C A F</h1>
                    </div>
                    <div className="nt-profile">
                        {/* <img src={userImg} alt="user image" /> */}
                        <p className="nt-prof-name">{this.state.loggedUser}</p>
                    </div>
                    <div className="nt-sav-links">
                        <a>My Workshops</a>
                        <a>Create a Workshop</a>
                    </div>
                </div>
                
                <div class="nt-main">
                    <div class="nt-navbar">
                        
                        <p className="nt-head-name">Workshop Conductor Dashboard</p>

                        <a href="#home">Log out</a>
                    </div>

                    <div className="nt-main-cont">
                        <MyWorkshops/>
                        <CreateWorkshop/>

                        {/* <Button type="primary" onClick={openNotification}>
                            Open the notification box
                        </Button> */}
                    </div>

                    {/* {this.state.notifications.map((noti) => {
                        return(
                                <h1>{noti.Status}</h1>   
                        );
                    })} */}
                    

                    </div>
                </div>
        )
    }
}

export default ConductorDTemp
