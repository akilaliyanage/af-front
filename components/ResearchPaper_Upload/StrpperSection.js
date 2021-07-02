import React , {Component} from 'react'
import {Stepper , StepLabel , Step, makeStyles , withStyles} from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SettingsIcon from '@material-ui/icons/Settings';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import WhereToVoteIcon from '@material-ui/icons/WhereToVote';
import StepConnector from '@material-ui/core/StepConnector';
import PropTypes from 'prop-types';
import clsx from 'clsx'

const ConnectorCompo = withStyles({
    alternativeLabel: {
        top: 32,
    },
    active: {
        '& $line': {
        backgroundImage:
            'linear-gradient( 90deg, rgba(0,113,38,1) 0%,rgba(150,150,150,1) 50%,rgba(98,98,98,1) 100%)',
        },
    },
    completed: {
        '& $line': {
        backgroundImage:
            'linear-gradient( 90deg, rgba(0,113,38,1) 0%,rgba(150,150,150,1) 50%,rgba(98,98,98,1) 100%)',
        },
    },
    line: {
        height: 6,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
    },
})(StepConnector);

const IconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 60,
    height: 60,
    display: 'flex',
    borderRadius: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient(90deg, rgba(1,158,53,1) 100%, rgba(252,176,69,1) 100%)',
  },
  completed: {
    backgroundImage:
      'linear-gradient(90deg, rgba(1,158,53,1) 100%, rgba(252,176,69,1) 100%);',
  },
});

function GetIcons(props) {
  const classes = IconStyles();
  const { active, completed } = props;

  const Labelicons = {
    1: <LibraryBooksIcon />,
    2: <CloudUploadIcon/>,
    3: <WhereToVoteIcon />,
  };

  return (
    <div className={clsx(classes.root, { [classes.active]: active, [classes.completed]: completed,})}>
      {Labelicons[String(props.icon)]}
    </div>
  );
}
GetIcons.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};


class StepperSection extends Component{
    constructor(props){
        super(props);
        this.state = {
          currentStep: 0
        }
        this.labelList = this.labelList.bind(this);
    }

    

    labelList(){
        return ['Research Paper - General  Details' , 'Upload Research Paper' , 'Declaration']
    }

    render(){
        return (
            <React.Fragment>
                <Stepper orientation="horizontal" activeStep={this.props.currentSteperStep} alternativeLabel connector={<ConnectorCompo/>}>
                    {this.labelList().map((title) =>
                        (
                            <Step key={title}>
                                <StepLabel StepIconComponent={GetIcons} > <b className='StepperLabel-style'>{title} </b> </StepLabel>
                            </Step>
                        )
                    )}
                </Stepper>
            </React.Fragment>
        )
    }
}

export default StepperSection