import React , {Component} from 'react'

class RegFormSubHeading extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <React.Fragment>
                <div className='regSubHeading'>
                    <h1>{this.props.title}</h1>
                </div>
            </React.Fragment>
        );
     }
}

export default RegFormSubHeading