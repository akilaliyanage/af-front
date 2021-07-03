import React, { Component } from 'react'

export default class DownloadCard extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <div class="card col-3">
                        <img src="../../assets/media/Mahen/PowerPoint-icon.png" class="card-img-top"/>
                        <div class="card-body text-center">
                            <h5 class="card-title">Resource Name</h5>
                            <a href="#!" class="btn btn-primary">Download</a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
