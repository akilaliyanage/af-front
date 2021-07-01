import React , {Component} from 'react';

class RegFormGeneralInfo extends Component{

    
    constructor(props){
        super(props)
        this.state = {}
    }


    render(){

        return(
            <React.Fragment>
                <div className='Regform-inner'>
                    <p className='text-light'><b className='text-light'>Conference Dates : </b> Octomber 1, 2021 /  Octomber 2, 2021 / Octomber3, 2021</p>
                    <p className='text-light'><b className='text-light'>Conference Location : </b> Main Audotoriam - SLIIT Malabe Campus, New Kandy Rd, Malabe</p>
                    <p className='text-light'><b className='text-light'>Conference Time : </b> 8.00 to 17.00</p>
                    <p style={{color:"green" , marginTop:20}} onclick={this.props.checkFn}>Please Fill-up the form below to register as a researcher of ICAF</p>
                </div>
            </React.Fragment>
        ); }
}

export default RegFormGeneralInfo