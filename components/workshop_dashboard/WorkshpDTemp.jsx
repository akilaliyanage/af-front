import React, { Component } from 'react'
import './../../assets/css/WorkshopDetails/workshopDash.css'
// import UserImg from './../../assets/media/nethsara/workshopUser.png'
import CardDiv from './WorkDashHome'
import ApprovedResearches from './ApprovedResearches'
import ApprovedWorkshops from './ApprovedWorkshops'
import PendingWorkshops from './PendingWorkshops'
import PendingResearches from './PendingResearches'
import AllResearchers from './AllResearchers'
import AllCoordiantors from './AllCoordinators'

class WorkshpDTemp extends Component {
    constructor(props){
        super(props)
        this.state={
            reviewerName:window.localStorage.getItem('rev-username'),
            loggedID:window.localStorage.getItem('rev-id')
        }
        
    }

    render() {
        return (
            <div className="nt-dashboard">
                <div className="nt-sidenav" style={{color:"white"}}>
                    <div className="nt-sideHead">
                        <h1 style={{color:"white"}}>I C A F</h1>
                    </div>
                    <div className="nt-profile">
                        {/* <img src={userImg} alt="user image" /> */}
                        <p className="nt-prof-name">{this.state.reviewerName}</p>
                    </div>
                    <div className="nt-sav-links">
                        <a>Stats</a>
                        <a>Pending Approvals</a>
                        <a>Approved Researches</a>
                        <a>Approved Workshops</a>
                        <a>Researchers</a>
                        <a>Coordinators</a>
                    </div>
                </div>
                
                <div class="nt-main">

                    <div class="nt-navbar">
                        
                        <p className="nt-head-name">Reviewer Dashboard</p>

                        <a href="#home">Log out</a>
                    </div>

                    <div className="nt-main-cont">

                        <CardDiv/>
                        <PendingResearches/>
                        <PendingWorkshops/>
                        <ApprovedResearches/>
                        <ApprovedWorkshops/>
                        <AllResearchers/>
                        <AllCoordiantors/>
                    
                    </div>

                </div>
            </div>
        )
    }
}

export default WorkshpDTemp
