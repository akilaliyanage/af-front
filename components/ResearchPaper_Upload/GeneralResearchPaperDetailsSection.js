import React , {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import AddCircleIcon from '@material-ui/icons/AddCircle'

class ResearchPaperGeneralDetailsSection extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    
    render() {
        return(
            <React.Fragment>
                <h4 className='form-part-header'>Research Paper - General  Details</h4>
                <div className='input-element-container'>
                    <div className="row mt-4">
                        <div className="col-6">
                            <TextField id="paperName" name='paperName' fullWidth label="Research Paper Title" variant="outlined" size="small" onChange={this.props.getValueOnChange}/>
                        </div>
                        <div className="col-6">
                            <TextField id="researchArea" name='researchArea' fullWidth label="Research Area" variant="outlined" size="small" onChange={this.props.getValueOnChange}/>
                        </div>
                    </div>
                    <div className="row mt-4 d-flex align-items-center">
                        <div className="col-3">
                            <TextField id="researcherName" name='researcherName' fullWidth label="Researcher Name" variant="outlined" size="small" onChange={this.props.getValueOnChange}/>
                        </div>
                        <div className="col-1 ">
                            <IconButton style={{color:"green", width:5}} aria-label="Add More Researchers">
                                <AddCircleIcon fontSize="large"/>
                            </IconButton>
                        </div>
                    </div>
                    <div className="row mt-4 d-flex align-items-center">
                        <div className="col-12">
                            <TextField id="description" name='description' fullWidth label="Breif Description about the research paper" variant="outlined" multiline size="small" onChange={this.props.getValueOnChange}/>
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}

export default ResearchPaperGeneralDetailsSection