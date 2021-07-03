import React, { Component } from 'react'
import './../../assets/css/WorkshopDetails/WorkDashHome.css'
import { Modal, Button } from 'antd';
import pdfimg from './../../assets/media/nethsara/pdf.png'

import config from '../../config.json'

class PendingWorkshops extends Component {

    constructor(props){
        super(props)
        this.state={
            pendworkshops:[],
            modalTitle:'',
            description:'',
            date:'',
            createdDate:'',
            constuctorName:'',
            studyFeild:'',
            document:'',
            visible:false,
            isAuth: false
        }
        this.approveWorkshop = this.approveWorkshop.bind(this);
        this.declineWorkshop = this.declineWorkshop.bind(this);
        this.saveNotification = this.saveNotification.bind(this);
        this.showModal = this.showModal.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    showModal(workshop){
        this.setState({
            visible : true,
            modalTitle: workshop.title,
            description: workshop.description,
            date: workshop.eventDate,
            createdDate: workshop.dateCreated,
            document: workshop.document
        })

    };
    
    handleOk(){
        this.setState({visible : false})
    };
    
    handleCancel(){
        this.setState({visible : false})
    };

    saveNotification(data){
        fetch(config.host + '/notify/create',{
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(data)
        }).then(res => res.json()).then(data =>{
            if(data.status == 200){
                console.log('noti saved')
                // alert("Workshop Created Successfully!")
                // window.location = `/condDash`
            }
        }).catch(err =>{
            console.log(err)
        })
    }

    
    componentDidMount(){
        this.fetchItems(); 
    }

    fetchItems(){
        fetch(config.host + '/wShop/pending').then(res => res.json()).then(data => this.setState({pendworkshops:data})).catch(err => console.log(err))
    }
    
    approveWorkshop(id,user){
        console.log(id+', user :'+user)
        fetch(config.host + '/wShop/approve/'+id).then(res => res.json()).then(data =>{
            
            if(data.message == 'success'){
                const data = {
                    type: 'workshop',
                    itemId: id,
                    userID: user,
                    // approve: 'Approved',
                    status: 'Approved'
                }
                this.saveNotification(data)
                
                alert("Workshop Approve Successful");
                // window.location = `/workshopDash`
            }
            else {
                alert("Workshop Approve Failed");
                // window.location = `/workshopDash`
            }
        }).catch(err =>{
            console.log(err)
        })
    }

    declineWorkshop(id,user){
        console.log(id+', user :'+user)
        fetch(config.host + '/wShop/decline/'+id,).then(res => res.json()).then(data =>{
            
            if(data.message == 'success'){
                const data = {
                    type: 'workshop',
                    itemId: id,
                    userID: user,
                    // approve: 'Approved',
                    status: 'Declined'
                }
                this.saveNotification(data)
                
                alert("Workshop declined Successful");
                // window.location = `/workshopDash`
            }
            else {
                alert("Workshop declined Failed");
                // window.location = `/workshopDash`
            }
            
        }).catch(err =>{
            console.log(err)
        })

    }
    

    render() {
        return (
            <div>
                <div className="nt-dcard-cont">
                    <div className="nt-approvedcard">

                        <div className="nt-div-head">
                            <h3 className="nt-div-head-text">
                                Approval Pending Workshops
                            </h3>
                        </div>

                        <table className="nt-table">
                            <thead>
                                <tr>
                                    {/* <th className="nt-td">Workshop Id</th> */}
                                    <th className="nt-td">Workshop Title</th>
                                    <th className="nt-td">Workshop Date</th>
                                    <th className="nt-td">Preview</th>
                                    {/* <th className="nt-td">Created Date</th> */}
                                    <th className="nt-td">Approval</th>
                                </tr>
                            </thead>
                            <tbody>

                            {this.state.pendworkshops.map((workshop) => {
                                return(
                                        <tr>
                                            {/* <td className="nt-td">{workshop._id}</td> */}
                                            <td className="nt-td">{workshop.title}</td>
                                            <td className="nt-td">{workshop.eventDate}</td>
                                            <td className="nt-td"><button className="nt-preview-btn" 
                                            onClick={() => this.showModal(workshop)}
                                            >Preview</button></td>
                                            {/* <td className="nt-td">{workshop.dateCreated}</td> */}
                                            <td>
                                                <button className="nt-approve-btn" onClick={() => this.approveWorkshop(workshop._id, workshop.conductor)}> Approve </button>
                                                <button className="nt-decline-btn" onClick={() => this.declineWorkshop(workshop._id, workshop.conductor)}> Decline </button>
                                            </td>
                                        </tr>
                                );
                            })}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
      
                <Modal title="Preview Workshop" 
                    centered
                    visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}
                    
                >
                    
                    <h3>Workshop Title :  {this.state.modalTitle}</h3>
                    <h6>Workshop date : {this.state.date}</h6>
                    <p>Decsription : {this.state.description}</p>
                    <p>Resources : <a href={this.state.document} target='_blank'>View Resource</a></p>
                    <a href={this.state.document} target='_blank'><img src={pdfimg} alt="" style={{width:"80px", marginLeft:"80px"}}/></a>
                    
                </Modal>         
            </div>
        )
    }
}

export default PendingWorkshops
