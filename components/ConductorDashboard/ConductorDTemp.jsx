import React, { Component } from 'react'
import './../../assets/css/WorkshopDetails/workshopDash.css'
// import UserImg from './../../assets/media/nethsara/workshopUser.png'
import CreateWorkshop from './CreateWorkshop'
import MyWorkshops from './MyWorkshops'

import { Button, notification } from 'antd';

const openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button type="primary" size="small" onClick={() => notification.close(key)}>
        Confirm
      </Button>
    );
    notification.open({
      message: 'Notification Title',
      description:
        'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
      btn,
      key,
      onClose: close,
    });
};

class ConductorDTemp extends Component {

    constructor(props){
        super(props)
        this.state = {
            notifications:'',
            loginID:window.localStorage.getItem('wc-id'),
            loggedUser:window.localStorage.getItem('wc-email')
        }
    }

    // componentDidMount(){
    //     this.fetchItems(); 
    // }

    // fetchItems(){
    //     fetch(config.local + '').then(res => res.json()).then(data => this.setState({notifications:data})).catch(err => console.log(err))
    // }

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

                </div>
            </div>
        )
    }
}

export default ConductorDTemp
