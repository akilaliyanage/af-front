import React , {Component} from 'react'

class ResearcherProfessionalInfo extends Component{

    constructor(props){
        super(props)
        this.state ={
            //Professional Informaton States
            wPlace : '', occupation : '',wEmail : '', wCountryCode :'', wPhone : '',
            wAddL1 : '', wAddL2 : '', wCity : '', wState : '', wZip : ''
        }
    }

    render(){
        return(
            <React.Fragment>
                <div className='Regform-inner'>
                    <div className='form-container'>
                        <p className='form-Element-Title'>Current WorkPlace</p>
                        <div className='form-row-container'>
                                <div className='form-row-container'>
                                    <div className='form-Element-container'>
                                        <input type='text' className='Researcher-form-input-long' name='wPlace' id='wPlace' onChange={this.props.getValueOnChange}/>
                                        <label>Name of the WorkPlace</label>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className='form-container'>
                        <p className='form-Element-Title'>Current Occupation</p>
                        <div className='form-row-container'>
                                <div className='form-row-container'>
                                    <div className='form-Element-container'>
                                        <input type='text' className='Researcher-form-input' name='occupation' id='occupation' onChange={this.props.getValueOnChange}/>
                                        <label>Occupation</label>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className='form-container'>
                            <p className='form-Element-Title'>Email (Work)</p>
                            <div className='form-row-container'>
                                <div className='form-Element-container'>
                                    <input type='email' className='Researcher-form-input' name='wEmail' id='wEmail' onChange={this.props.getValueOnChange}/>
                                    <label>Email</label>
                                </div>
                            </div>
                    </div>
                    <div className='form-container'>
                            <p className='form-Element-Title'>Phone (Work)</p>
                            <div className='form-row-container'>
                                <div className='form-Element-container'>
                                    <input type='text' className='Researcher-form-input' name='wCountryCode' id='wCountryCode' onChange={this.props.getValueOnChange}/>
                                    <label>Country Code</label>
                                </div>
                                <div className='form-Element-container'>
                                    <input type='text' className='Researcher-form-input' name='wPhone' id='wPhone' onChange={this.props.getValueOnChange}/>
                                    <label>Phone</label>
                                </div>
                            </div>
                    </div>
                    <div className='form-container'>
                            <p className='form-Element-Title'>Address (Work)</p>
                            <div className='form-row-container'>
                                <div className='form-Element-container'>
                                    <input type='text' className='Researcher-form-input' name='wAddL1' id='wAddL1' onChange={this.props.getValueOnChange}/>
                                    <label>Address Line 1</label>
                                </div>
                                <div className='form-Element-container'>
                                    <input type='text' className='Researcher-form-input' name='wAddL2' id='wAddL2' onChange={this.props.getValueOnChange}/>
                                    <label>Address Line 2</label>
                                </div>
                            </div>
                    </div>
                    <div className='form-container'>
                            <p className='form-Element-Title'></p>
                            <div className='form-row-container'>
                                <div className='form-Element-container'>
                                    <input type='text' className='Researcher-form-input-address-extras' name='wCity' id='wCity' onChange={this.props.getValueOnChange}/>
                                    <label>City</label>
                                </div>
                                <div className='form-Element-container'>
                                    <input type='text' className='Researcher-form-input-address-extras' name='wState' id='wState' onChange={this.props.getValueOnChange}/>
                                    <label>State/Province</label>
                                </div>
                                <div className='form-Element-container'>
                                    <input type='text' className='Researcher-form-input-address-extras' name='wZip' id='wZip' onChange={this.props.getValueOnChange}/>
                                    <label>Postal/Zip Code</label>
                                </div>
                            </div>
                    </div>
                </div>
                    
                
            </React.Fragment>
        );
    }

}

export default ResearcherProfessionalInfo