import React, { Component } from 'react'
import config from '../../config.json'

export default class ResearchPaperNotification extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            paperNotification:[],
            paper:'',
        }
    }

    // componentDidMount(){
    //     console.log('paperNotifications Id Is qqq : ' , this.props.paperNotifications)
    //     fetch(config.local + '/researchPaper/' + this.props.paperNotifications).then(res => res.json()).then(data =>{
    //         console.log('approveNotification by id called in mount new')
    //         this.setState({paperNotification : data.data})
    //         console.log('paperNotifications : ' , this.state.paperNotification)
    //     }).catch(err =>{
    //         alert(err)
    //     })
    // }

      componentWillReceiveProps(props) {
        this.setState({paper: props.paperNotifications});
        console.log('props.paperNotifications : ' , props.paperNotifications)


        fetch(config.host + '/researchPaper/' + this.props.paperNotifications).then(res => res.json()).then(data =>{
            console.log('approveNotification by id called in mount new')
            this.setState({paperNotification : data.data})
            console.log('paperNotifications : ' , this.state.paperNotification)
        }).catch(err =>{
            alert(err)
        })
    }

    

    render() {
        let temp= ''
        if(this.state.paperNotification > 0){
            return(
                <p>{this.state.paperNotification[0]}</p>
            )
        }
        return (
            <div>
                <div className="card">
                    <div className="card-header bg-success"><h3>Research Paper Approve Notification</h3></div>
                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                                <div className='row'>
                                    {/* <p>{this.state.paperNotification[0]}</p> */}
                                    {temp}
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
