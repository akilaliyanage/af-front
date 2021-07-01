import React, { Component } from 'react'
import './../../assets/css/WorkshopDetails/WorkDashHome.css'

class WorkDashHome extends Component {
    render() {
        return (
            <div>
                <div className="nt-dcard-cont">
                    <div className="nt-dash-card">
                        <h4 className="nt-dcard-head">
                            Work. Conductors
                        </h4>
                        <h1 className="nt-dcard-qunt">
                            04
                        </h1>
                    </div>
                    <div className="nt-dash-card">
                        <h4 className="nt-dcard-head">
                            Researchers
                        </h4>
                        <h1 className="nt-dcard-qunt">
                            08
                        </h1>
                    </div>
                    <div className="nt-dash-card">
                        <h4 className="nt-dcard-head">
                            All Workshops
                        </h4>
                        <h1 className="nt-dcard-qunt">
                            04
                        </h1>
                    </div>
                    <div className="nt-dash-card">
                        <h4 className="nt-dcard-head">
                            All Researches
                        </h4>
                        <h1 className="nt-dcard-qunt">
                            12
                        </h1>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default WorkDashHome
