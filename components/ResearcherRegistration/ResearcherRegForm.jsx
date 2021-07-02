import React, { Component} from 'react'
import {NotificationContainer, NotificationManager} from 'react-notifications'
import RegFormHeading from '../ResearcherRegistration/RefFormHeading'
import RegFormSubHeading from '../ResearcherRegistration/RegFormSubHeading'
import RegFormGeneralInfo from '../ResearcherRegistration/GeneralInfo'
import ResercherGeneralInfo from '../ResearcherRegistration/ResearcherGeneralInfo'
import ResearcherProfessionalInfo from '../ResearcherRegistration/ResearcherProfessionallnfo'
import ResearcherAcademicInfo from '../ResearcherRegistration/ResearcherAcademicInfo'
import ResearcherPasswords from '../ResearcherRegistration/ResearcherPasswords'

class ResearcherRegForm extends Component {

    constructor(props){
        super(props);
        this.state={
            feedback : '',
            //Personal Information States
            fName : '', lName : '', mName : '', NIC : '', pEmail : '', pCountryCode :'', pPhone : '',
            pAddL1 : '', pAddL2 : '', pCity : '', pState : '', pZip : '',

            //Professional Informaton States
            wPlace : '', occupation : '',wEmail : '', wCountryCode :'', wPhone : '',
            wAddL1 : '', wAddL2 : '', wCity : '', wState : '', wZip : '',

            qualifications : [],
            memberships : [],
            publications : [],

            qualificationCount : 0,
            membershipCount : 0,
            publicationCount : 0,

            //Passwords States
            password : '', confPassword : '',
        }

        this.getValueOnChange = this.getValueOnChange.bind(this)
        this.setQualifications = this.setQualifications.bind(this)
        this.setMemberships = this.setMemberships.bind(this)
        this.setPublications = this.setPublications.bind(this)
        this.submitResearcher = this.submitResearcher.bind(this)
    }

    submitResearcher(){
        if(this.state.password != this.state.confPassword){
            this.setState({feedback : 'Password mismatch!!'})
            this.setState({password : ''})
            this.setState({confPassword : ''})
            NotificationManager.error(feedback + ' -  please re-enter passwords', 'Password Error' , 5000)
            return
        }
        console.log('inside submit')
        let formData = {
            fName : this.state.fName,
            lName : this.state.lName, 
            mName : this.state.mName, 
            NIC : this.state.NIC, 
            pEmail : this.state.pEmail, 
            pCountryCode : this.state.pCountryCode, 
            pPhone : this.state.pPhone,
            pAddL1 : this.state.pAddL1, 
            pAddL2 : this.state.pAddL2, 
            pCity : this.state.pCity, 
            pState : this.state.pState, 
            pZip : this.state.pZip,

            wPlace : this.state.wPlace,
            occupation : this.state.occupation,
            wEmail : this.state.wEmail,
            wCountryCode : this.state.wCountryCode,
            wPhone : this.state.wPhone,
            wAddL1 : this.state.wAddL1,
            wAddL2 : this.state.wAddL2,
            wCity : this.state.wCity,
            wState : this.state.wState,
            wZip : this.state.wZip,

            password : this.state.password,
            confPassword : this.state.confPassword,

            qualifications : this.state.qualifications,
            memberships : this.state.memberships,
            publications : this.state.publications,
        }

        fetch("http://localhost:8000/researcher/" , {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(response =>{
            console.log(response)
            if(response.status == 200){
                this.setState({feedback:'Successfully registered'})
                NotificationManager.success('Thank you -  Approval of your registraton will notified shortly', this.state.feedback , 5000)
            }
        })
        .catch(error =>{
            console.log(error)
            this.setState({feedback:'Registration Failed'})
            NotificationManager.fail('Sorry -  Something went wrong. Please try again', this.state.feedback , 5000)

        })

        
    }

    getValueOnChange(val){
        this.setState({[val.target.name] : val.target.value})
        console.log(val.target.name , val.target.value)
    };

    setQualifications(val){
        this.setState({qualifications : val})
    };
    setMemberships(val){
        this.setState({memberships : val})
    };
    setPublications(val){
        this.setState({publications : val})
    };

    render(){
            return(
                <React.Fragment>
                    
                    <RegFormHeading title='ICAF - Researcher Registration Form'/>

                    <RegFormGeneralInfo/>

                    <RegFormSubHeading title='General Information' />

                    <ResercherGeneralInfo getValueOnChange={this.getValueOnChange}/>

                    <RegFormSubHeading title='Professional Information' />

                    <ResearcherProfessionalInfo getValueOnChange={this.getValueOnChange}/>

                    <RegFormSubHeading title='Academic Information' />

                    <ResearcherAcademicInfo getValueOnChange={this.getValueOnChange} setQualifications={this.setQualifications} setMemberships={this.setMemberships} setPublications={this.setPublications}/>

                    <RegFormSubHeading title='Passwords' />

                    <ResearcherPasswords getValueOnChange={this.getValueOnChange}/>

                    <hr className='Seperator'/>
                    <NotificationContainer/>
                    <div className='form-btn-container'>
                        <button className='success-btn' onClick={this.submitResearcher}>Register</button>
                        <button className='success-fail'>Cancel</button>
                    </div>
                    <hr className='Seperator'/>
                </React.Fragment>
            );
        }
}

export default ResearcherRegForm