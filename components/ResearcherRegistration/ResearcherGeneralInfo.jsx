import React ,  {Component} from 'react'

class ResercherGeneralInfo extends Component{

    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <React.Fragment>
                <div className='Regform-inner'>
                    <div className='form-container'>
                            <p className='form-Element-Title'>Name In Full</p>
                            <div className='form-row-container'>
                                <div className='form-Element-container'>
                                    <input type='text' className='Researcher-form-input-name' name='fName' id='fName' onChange={this.props.getValueOnChange}/>
                                    <label for='fName'>First Name</label>
                                </div>
                                <div className='form-Element-container'>
                                    <input type='text' className='Researcher-form-input-name' name='mName' id='mName' onChange={this.props.getValueOnChange}/>
                                    <label>Middle Name</label>
                                </div>
                                <div className='form-Element-container'>
                                    <input type='text' className='Researcher-form-input-name' name='lName' id='lName' onChange={this.props.getValueOnChange}/>
                                    <label>Last Name</label>
                                </div>
                            </div>
                    </div>
                    <div className='form-container'>
                            <p className='form-Element-Title'>NINO / NIC</p>
                            <div className='form-row-container'>
                                <div className='form-Element-container'>
                                    <input type='text' className='Researcher-form-input' name='NIC' id='NIC' onChange={this.props.getValueOnChange}/>
                                    <label>National Insurence No / National Identity Card No</label>
                                </div>
                            </div>
                    </div>
                    <div className='form-container'>
                            <p className='form-Element-Title'>Email (Personal)</p>
                            <div className='form-row-container'>
                                <div className='form-Element-container'>
                                    <input type='email' className='Researcher-form-input' name='pEmail' id='pEmail' onChange={this.props.getValueOnChange}/>
                                    <label>Email</label>
                                </div>
                            </div>
                    </div>
                    <div className='form-container'>
                            <p className='form-Element-Title'>Phone</p>
                            <div className='form-row-container'>
                                <div className='form-Element-container'>
                                    <input type='text' className='Researcher-form-input' name='pCountryCode' id='pCountryCode' onChange={this.props.getValueOnChange}/>
                                    <label>Country Code</label>
                                </div>
                                <div className='form-Element-container'>
                                    <input type='text' className='Researcher-form-input' name='pPhone' id='pPhone' onChange={this.props.getValueOnChange}/>
                                    <label>Phone</label>
                                </div>
                            </div>
                    </div>
                    <div className='form-container'>
                            <p className='form-Element-Title'>Address</p>
                            <div className='form-row-container'>
                                <div className='form-Element-container'>
                                    <input type='text' className='Researcher-form-input' name='pAddL1' id='pAddL1' onChange={this.props.getValueOnChange}/>
                                    <label>Address Line 1</label>
                                </div>
                                <div className='form-Element-container'>
                                    <input type='text' className='Researcher-form-input' name='pAddL2' id='pAddL2' onChange={this.props.getValueOnChange}/>
                                    <label>Address Line 2</label>
                                </div>
                            </div>
                    </div>
                    <div className='form-container'>
                            <p className='form-Element-Title'></p>
                            <div className='form-row-container'>
                                <div className='form-Element-container'>
                                    <input type='text' className='Researcher-form-input-address-extras' name='pCity' id='pCity' onChange={this.props.getValueOnChange}/>
                                    <label>City</label>
                                </div>
                                <div className='form-Element-container'>
                                    <input type='text' className='Researcher-form-input-address-extras' name='pState' id='pState' onChange={this.props.getValueOnChange}/>
                                    <label>State/Province</label>
                                </div>
                                <div className='form-Element-container'>
                                    <input type='text' className='Researcher-form-input-address-extras' name='pZip' id='pZip' onChange={this.props.getValueOnChange}/>
                                    <label>Postal/Zip Code</label>
                                </div>
                            </div>
                    </div>
                </div>
            </React.Fragment>
        ); 
    }
}

export default ResercherGeneralInfo