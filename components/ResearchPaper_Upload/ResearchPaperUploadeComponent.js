import React ,  { Component} from 'react';
import NavBar from '../landing_page/NavBar'
import config from '../../config.json'
import '../../assets/css/ResearcherReg/ResearcherReg.css'
import '../../assets/css/REsearchPaper_Upload/RpaperUpload.css'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import StepperSection from './StrpperSection'
import FormContainer from './FormContainer'

class ResearchPaperUploadeComponant extends Component {
    constructor(props){
        super(props);
        this.state = {
            nav_Items : [],
            currentSteperStep: 0
        }

        this.stepperUp = this.stepperUp.bind(this);
        this.stepperDown = this.stepperDown.bind(this);
    }
    componentDidMount(){
            fetch(config.host + "nav-items")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    nav_Items: data
                })
            })
        }

    stepperUp(){
        if(this.state.currentSteperStep < 2)
            this.setState({currentSteperStep : this.state.currentSteperStep + 1});
        console.log(this.state.currentSteperStep);
    };

    stepperDown(){
        if(this.state.currentSteperStep != 0)
            this.setState({currentSteperStep : this.state.currentSteperStep - 1})

        console.log(this.state.currentSteperStep);
    };
    

    render(){
        return (
            <React.Fragment>
                <div className='uploadResearchPaperBack'>
                    <div className='akila-template-header'>
                        <NavBar items={this.state.nav_Items}/>
                    </div>
                    <Grid container justify='center'>
                        <Grid item xs={10} sm={10} >
                            <Box mb={3}>
                                <Paper className="paper-bounderies">
                                    <div className='d-flex justify-content-center'>
                                        <div className='d-flex flex-column align-items-center'>
                                            <h1 className="mb-2">Research Paper Submit Form</h1>
                                            <div className='topic-Seperator'></div>
                                        </div>
                                    </div>
                                    <StepperSection currentSteperStep={this.state.currentSteperStep}/>
                                </Paper>
                            </Box>
                            
                        </Grid>
                        <Grid item xs={10} sm={10}>
                            <FormContainer stepperUp={this.stepperUp} stepperDown={this.stepperDown}/>
                        </Grid>
                    </Grid>
                </div>
            </React.Fragment>
        )
    }
}

export default ResearchPaperUploadeComponant