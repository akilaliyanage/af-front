import React, { Component } from 'react'
import {Document , Page , View, Text} from 'react-pdf/dist/esm/entry.parcel';
import samplePdf from '../../assets/media/Mahen/samplePdf.pdf'
import {Link} from 'react-router-dom'
import PresentationAddModel from './PresentationAddModel'

export default class ResearchCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            pdfDefault : samplePdf,
        }
        this.renderStatus = this.renderStatus.bind(this);
        this.renderActions = this.renderActions.bind(this);
    }
    renderStatus(param) {
        console.log('param.toLowerCase' , param.toLowerCase())
      switch(param.toLowerCase()) {
        case 'approved':
          return <h2><span className="badge bg-success">Approved</span></h2>;
        case 'rejected':
          return <h2><span className="badge bg-danger">Declined</span></h2>;
        case 'pending':
          return <h2>Status : <span className="badge bg-warning mr-3">Pending</span></h2>;
        default:
          return <h2>Status : <span className="badge bg-warning mr-3">Pending</span></h2>;;
      }
    }
    renderActions(param) {
        let loverStatus = param.toLowerCase();
        if(loverStatus === 'approved') 
          return (
            <div className='row d-flex justify-content-center mt-2'>
            <div className='d-grid col-6 mx-auto'>
                <Link type="button" className="btn btn-primary btn-lg" onClick={()=>{this.props.toggleModel(this.props.researchPaperModel.paperName , this.props.researchPaperModel._id)}} >Schedule Presentation</Link>
            </div>
            <div className='d-grid col-6 mx-auto'>
                <Link to='/payment' type="button" className="btn btn-success btn-lg">Make Payment</Link>
            </div>
            </div>
          )
        else{
            return  <div></div>
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col-4'>
                        <div className="card p-3 border-success mb-2" style={{borderRadius:10 , borderWidth:4 , borderColor:'#4CAF50' , borderStyle:'solid'}}>
                            <Document  file={this.props.researchPaperModel.researchPaper}>
                                <Page height="350" pageNumber={1}/>
                            </Document>
                        </div>
                    </div>
                    <div className='col-8 pl-4 pr-4'>
                        <div className='row d-flex justify-content-start'>
                            <h1 className='mt-2'>{this.props.researchPaperModel.paperName}</h1>
                            <h3 className='mt-2'>{this.props.researchPaperModel.researcherName}</h3>
                            <h3 className='mt-2'>{this.props.researchPaperModel.researchArea}</h3>
                            <p className='text-center mt-2'>{this.props.researchPaperModel.description}</p>
                        </div>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-5Link'>
                                {this.renderStatus(this.props.researchPaperModel.isApproved)}
                            </div>
                        </div>
                        {this.renderActions(this.props.researchPaperModel.isApproved)}
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}
