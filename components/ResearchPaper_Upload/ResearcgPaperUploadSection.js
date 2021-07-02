import React, { Component } from 'react'
import PdfDisplayer from './PdfDisplayer'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import AddCircleIcon from '@material-ui/icons/AddCircle'

export default class ResearcgPaperUploadSection extends Component {
    constructor(props){
        super(props);
        this.state = {}

        
    }

    
    render() {
        return (
            <React.Fragment>
                <h4 className='form-part-header'>Upload Research Paper</h4>
                <div className='input-element-container ml-5'>
                    <div className="row mt-4">
                        <div className="col-5">
                            <PdfDisplayer fileChanger={this.props.fileChanger}/>
                        </div>
                        <div className="col-7">
                              <div className='input-element-container'>
                                <div className="row">
                                    <div className="col-6">
                                        <TextField id="noOfPages" name="noOfPages" type="number" InputProps={{inputProps:{max:5000 , min : 1}}} fullWidth label="Number of pages" variant="outlined" size="small"  onChange={this.props.getValueOnChange}/>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-10">
                                        <TextField id="noOfPages" fullWidth label="Institute" variant="outlined" size="small"/>
                                    </div>
                                </div>
                            </div>      
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
