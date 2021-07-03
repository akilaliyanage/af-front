import React, { Component } from 'react'
import config from '../../config.json'

export default class PresentationNotification extends Component {
    componentDidMount(){
        // console.log('Researcher Id Is : ' , localStorage.getItem('id'))
        // fetch(config.local + "/approveNotification/r-papers/" + localStorage.getItem('id')).then(res => res.json()).then(data =>{
        //     console.log('approveNotification by id called in mount')
        //     this.setState({paperNotifications : data.data})
        //     console.log(this.state.paperNotifications)
        // }).catch(err =>{
        //     alert(err)
        // })
    }
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header bg-info"><h3>Presentation Approve Notification</h3></div>
                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                                <div className='row'>
                                    <p>Your Presentation</p>
                                </div>
                                <div className='row'>
                                    <h3>Your Research Paper</h3>
                                </div>
                                <div className='row'>
                                    <p>Your Research Paper</p>
                                </div>
                               
                                <hr/>
                                <footer className='text-start pl-5'>
                                     <button className='btn btn-danger'>Close Notification</button>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
            </div>
        )
    }
}
