import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import pdfimg from './../../assets/media/nethsara/pdf.png'

class SingleCard extends Component {

    constructor(props) {
        super(props);
        this.state={
            modalTitle:'',
            description:'',
            date:'',
            createdDate:'',
            constuctorName:'',
            studyFeild:'',
            document:'',
            visible:false
        }
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

    render() {
        return (
            <div> 
                <div className="nethsara-card">
                        <div className="nethsara-card-image">
                            {/* <img src={this.props.url} alt="" /> */}
                            <h3>{this.props.item.title}</h3>
                        </div>
                        <div className="nethsara-card-text">
                            <h3>{this.props.item.consuctor}</h3>
                            <h6>Conducted on : {this.props.item.eventDate}</h6>
                            <p>{this.props.item.description}</p>
                        </div>
                        <div>
                            <button className="nethsara-card-button" onClick={() => this.showModal(this.props.item)}>
                                View Workshop
                            </button>
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
        );
    }
}

export default SingleCard;