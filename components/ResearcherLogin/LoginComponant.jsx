import React, { Component } from 'react'
import '../../assets/css/ResearcherReg/ResearcherReg.css'
import '../../assets/css/REsearchPaper_Upload/RpaperUpload.css'
import '../../assets/css/Researcher/ResearcherLogin.css'
import LoginForm from './LoginForm'

export default class LoginComponant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="addResearcherLoginBack">
                    <div className="row">
                        <div className="col-7">

                        </div>
                        <div className="col-4 p-5">
                            <LoginForm/>
                        </div>
                        <div className="col-1">

                        </div>
                    </div>
                    <h1>Hello</h1>
                </div>
            </React.Fragment>
        )
    }
}
