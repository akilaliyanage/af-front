import React, { Component } from 'react'
import { Modal, Button } from 'antd';
import pdfimg from './../../assets/media/nethsara/pdf.png'

import config from '../../config.json'

class PendingResearches extends Component {
    constructor(props){
        super(props)
        this.state={
            pendResearches:[],
            modalTitle:'',
            description:'',
            researcherName:'',
            createdDate:'',
            constuctorName:'',
            studyFeild:'',
            document:'',
            visible:false,
            isAuth: false
        }
        this.approveResearch = this.approveResearch.bind(this);
        this.declineResearch = this.declineResearch.bind(this);
        this.showModal = this.showModal.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    showModal(research){
        this.setState({
            visible : true,
            modalTitle: research.paperName,
            description: research.description,
            researcherName: research.researcherName,
            // createdDate: workshop.dateCreated,
            document: research.researchPaper
        })

    };
    
    handleOk(){
        this.setState({visible : false})
    };
    
    handleCancel(){
        this.setState({visible : false})
    };

    componentDidMount(){
        this.fetchItems(); 
    }

    fetchItems(){
        fetch(config.host + '/resrch/pending').then(res => res.json()).then(data => this.setState({pendResearches:data})).catch(err => console.log(err))
    }
    

    approveResearch(id){
        console.log(id)
        fetch(config.host + '/resrch/approve/'+id).then(res => res.json()).then(data =>{
            
            if(data.message == 'success'){
                alert("Research Approve Successful");
                window.location = `/workshopDash`
            }
            else {
                alert("Research Approve Failed");
                window.location = `/workshopDash`
            }
            
        }).catch(err =>{
            console.log(err)
        })
        
    }


    declineResearch(id){
        console.log(id)
        fetch(config.host + '/resrch/decline/'+id).then(res => res.json()).then(data =>{
            
            if(data.message == 'success'){
                alert("Research Decline Successful");
                window.location = `/workshopDash`
            }
            else {
                alert("Research Decline Failed");
                window.location = `/workshopDash`
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
                                Approval Pending Researches
                            </h3>
                        </div>

                        <table className="nt-table">
                            <thead>
                                <tr>
                                    <th className="nt-td">Paper Name</th>
                                    <th className="nt-td">Researcher Name</th>
                                    <th className="nt-td">Preview</th>
                                    {/* <th className="nt-td">Conductor</th>
                                    <th className="nt-td">Created Date</th> */}
                                    <th className="nt-td">Approval</th>
                                </tr>
                            </thead>
                            <tbody>

                                {this.state.pendResearches.map((research) => {
                                    return(
                                            <tr>
                                                <td className="nt-td">{research.paperName}</td>
                                                <td className="nt-td">{research.researcherName}</td>
                                                {/* <td className="nt-td">{research.eventDate}</td>
                                                <td className="nt-td">{research.conductor}</td> */}
                                                <td className="nt-td"><button className="nt-preview-btn" 
                                                onClick={() => this.showModal(research)}
                                                >Preview</button></td>
                                                <td>
                                                    <button className="nt-approve-btn" onClick={() => this.approveResearch(research._id)}> Approve </button>
                                                    <button className="nt-decline-btn" onClick={() => this.declineResearch(research._id)}> Decline </button>
                                                </td>
                                            </tr>
                                    );
                                })}
                               
                            </tbody>
                        </table>
                    </div>

                </div>
                <Modal title="Preview Research" 
                    centered
                    visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}
                    
                >
                    
                    <h3>Research Title :  {this.state.modalTitle}</h3>
                    <h6>Researcher : {this.state.researcherName}</h6>
                    <p>Decsription : {this.state.description}</p>
                    <p>Resources : <a href={this.state.document} target='_blank'>View Resource</a></p>
                    <a href={this.state.document} target='_blank'><img src={pdfimg} alt="" style={{width:"80px", marginLeft:"80px"}}/></a>
                </Modal> 
            </div>
        )
    }
}

export default PendingResearches
