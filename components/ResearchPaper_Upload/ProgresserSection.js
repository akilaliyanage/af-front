import React , {Component} from 'react'
import Button from '@material-ui/core/Button'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import DescriptionIcon from '@material-ui/icons/Description'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

class ProgresserSection extends Component {
    constructor(props){
        super(props)
        this.state = {

        }

    }

    render(){
        return (
            <React.Fragment>
                <div className="row d-flex justify-content-end">
                    <div className="col-4 d-flex justify-content-between">
                        <Button variant="contained" color="default" startIcon={<ArrowBackIcon/>} onClick={this.props.stepDown}>Back</Button>
                        <Button variant="contained" color="default" endIcon={<ArrowForwardIcon/>} onClick={this.props.stepUp}>Next</Button>
                        {this.props.showSubmit ?
                            <Button variant="contained" style={{backgroundColor:"green" , color:"white"}} startIcon={<DescriptionIcon/>} onClick={this.props.submitResearchPaperForm} >Submit</Button> : null
                        }
                        
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ProgresserSection