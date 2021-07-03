import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import TextField from '@material-ui/core/TextField'
import config from '../../config.json'
import "antd/dist/antd.css";
import { notification} from 'antd';

export default class PresentationAddModel extends Component {

    constructor(props){
        super(props)
        this.state = {
            
        }
        
    }

    

    

    render() {
        return (
            <React.Fragment>
                <Modal show={this.props.opened}>
                    <Modal.Header closeButton>
                        <Modal.Title>Schedule Presentation</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={this.props.handleSubmit}>
                        <Modal.Body>
                        <div className="row mt-4">
                           <div className='col-6'>
                               <TextField id="researcherName" disabled required name='researcherName' fullWidth label="Researcher Name" variant="outlined" size="small" onChange={this.props.getValueOnChange} defaultValue={this.props.researchPaperName}/>
                           </div>
                           <div className='col-6'>
                               <TextField id="researchPaperName" disabled required name='researchPaperName' fullWidth label="Research Paper Name" variant="outlined" size="small" onChange={this.props.getValueOnChange} defaultValue='A Review of Cloud Computing Architectures and their Challenges.'/>
                           </div>
                        </div>
                        <div className="row mt-4 ">
                           <div className='col-12'>
                               <TextField id="presentationName" required name='presentationName' fullWidth label="Presentation Name" variant="outlined" size="small" onChange={this.props.getValueOnChange}/>
                           </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-6">
                                <input type="file" required name="presentationSlides" id='presentationSlides' onChange={this.props.fileChanger}/>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-6">
                                <TextField id="presentationDatetime" name='presentationDatetime' required label="Presentation Date Time" type="datetime-local" variant="outlined" onChange={this.props.getValueOnChange} InputLabelProps={{shrink: true,}}
  />
                            </div>
                        </div>
                       </Modal.Body>
                       <Modal.Footer>
                           <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal" onClick={()=>{this.props.toggleModel(null , null)}} > Close </button>
                           <input type="submit" className="btn btn-primary"  value='Make Request' />
                        </Modal.Footer>
                    </form>
                </Modal>
            </React.Fragment>
        )
    }
}
