import React , {Component} from 'react'
import QualificationSection from '../ResearcherRegistration/qualificationInputSection'
import MembershipComponent from '../ResearcherRegistration/membershipComponent'
import PublicationComponent from '../ResearcherRegistration/publicationsComponant'

class ResearcherAcademicInfo extends Component{

    constructor(props){
        super(props)
        this.state ={
            UniList : [],
            sortedUniList : [],
            yearList : [],
            qualificationList : [],
            membershipList : [],
            publicationList : [],

            qualificationArray : [],
            membershipArray : [],
            publicationArray : [],

            qualificationCount : 0,
            membershipCount : 0,
            publicationCount : 0,

            //Properties of Qualification Section
            degreeName : '',
            UniName : '',
            qualiYear:'',

            //Properties of membership Section
            membership:'',

            //Properties of publications Section
            publication : '',
            source : '',
            pubYear : '',
            pubURL : '',


        }

        this.populateQualifications = this.populateQualifications.bind(this)
        this.populateMembership = this.populateMembership.bind(this)
        this.populatePublications = this.populatePublications.bind(this)
        this.setQualificationExtraOnChange = this.setQualificationExtraOnChange.bind(this)
        this.setMembershipExtraOnChange = this.setMembershipExtraOnChange.bind(this)
        this.setPublicationsExtraOnChange = this.setPublicationsExtraOnChange.bind(this)
        
    }

    setQualificationExtraOnChange(val){
        //Assign value of input element to state
        this.setState({[val.target.name] : val.target.value})
        
        //Assign qualfications state array into a normal array and retrive needed element from 
        //temperory array
        let qualifications = this.state.qualificationArray
        let qualification = qualifications[this.state.qualificationCount];
        

        //edit temperory object to set values in state
        qualification ={
            degreeName : this.state.degreeName,
            qualiYear : this.state.qualiYear,
            UniName : this.state.UniName,
        }
        
        //replace dummy object with dummy array 
        qualifications[this.state.qualificationCount] = qualification;

        //set dummy aray as original state array
        this.setState({qualificationArray : qualifications})
        this.props.setQualifications(this.state.qualificationArray)

    }

    //Method to handle memberships
    setMembershipExtraOnChange(val){
        //Assign value of input element to state
        this.setState({[val.target.name] : val.target.value})
        
        //Assign qualfications state array into a normal array and retrive needed element from 
        //temperory array
        let memberships = this.state.membershipArray
        let membership = memberships[this.state.membershipCount];
        

        //edit temperory object to set values in state
        membership ={
            membership : this.state.membership
        }
        
        //replace dummy object with dummy array 
        memberships[this.state.membershipCount] = membership;

        //set dummy array as original state array
        this.setState({membershipArray : memberships})
        this.props.setMemberships(this.state.membershipArray)

    }

    //Method to handle memberships
    setPublicationsExtraOnChange(val){
        //Assign value of input element to state
        this.setState({[val.target.name] : val.target.value})
        
        //Assign qualfications state array into a normal array and retrive needed element from 
        //temperory array
        let publications = this.state.publicationArray
        let publication = publications[this.state.publicationCount];
        

        //edit temperory object to set values in state
        publication ={
            publication : this.state.publication,
            source : this.state.source,
            pubYear : this.state.pubYear,
            pubURL : this.state.pubURL
        }
        
        //replace dummy object with dummy array 
        publications[this.state.publicationCount] = publication;

        //set dummy array as original state array
        this.setState({publicationArray : publications})
        this.props.setPublications(this.state,publicationArray)
    }

    componentDidMount(){

        fetch('http://universities.hipolabs.com/search?name=' , {
            method: 'GET'
        })
        .then(response => response.json().
        then(data => {
            this.setState({UniList : data})
            this.setState({sortedUniList : UniList})
        } 
        ))

        const currentYear = (new Date()).getFullYear();
        const yearRange = 100;

        for(let i = 0 ; i < yearRange; i++){
            let year = currentYear - i;
            let tempArray = this.state.yearList;
            tempArray.push(year); 
            this.setState({yearList:tempArray})
        }

        
        //Add First Entry to Qualification list
        var tempCompo = (<QualificationSection yearList = {this.state.yearList} setQualificationExtraOnChange={this.setQualificationExtraOnChange}/>)
        let tempQualificationArray = this.state.qualificationList;
        tempQualificationArray.push(tempCompo); 
        this.setState({qualificationList:tempQualificationArray})

        //Add First Entry to membership list
            var tempCompo_member = (<MembershipComponent setMembershipExtraOnChange={this.setMembershipExtraOnChange}/>)
        let tempmemberArray = this.state.membershipList;
        tempmemberArray.push(tempCompo_member); 
        this.setState({membershipList:tempmemberArray})

        //Add First Entry to membership list
        var tempCompo_publication = (<PublicationComponent yearList = {this.state.yearList} setPublicationsExtraOnChange={this.setPublicationsExtraOnChange}/>)
        let temppublicationArray = this.state.publicationList;
        temppublicationArray.push(tempCompo_publication); 
        this.setState({publicationList:temppublicationArray})
    }

    populateQualifications(){
        var tempCompo = (<QualificationSection yearList = {this.state.yearList} setQualificationExtraOnChange={this.setQualificationExtraOnChange} />)
        let tempQualificationArray = this.state.qualificationList;
        tempQualificationArray.push(tempCompo); 
        this.setState({qualificationList:tempQualificationArray})
        this.setState({qualificationCount : this.state.qualificationCount + 1})
        
    }
    populateMembership(){
        var tempCompo_member = (<MembershipComponent setMembershipExtraOnChange={this.setMembershipExtraOnChange} />)
        let tempmemberArray = this.state.membershipList;
        tempmemberArray.push(tempCompo_member); 
        this.setState({membershipList:tempmemberArray})
        this.setState({membershipCount : this.state.membershipCount + 1})
    }
    populatePublications(){
        var tempCompo_publication = (<PublicationComponent yearList = {this.state.yearList}  setPublicationsExtraOnChange={this.setPublicationsExtraOnChange}/>)
        let temppublicationArray = this.state.publicationList;
        temppublicationArray.push(tempCompo_publication); 
        this.setState({publicationList:temppublicationArray})
        this.setState({publicationCount : this.state.publicationCount + 1})
    }

    


    render(){

        return(
            <React.Fragment>
                <div className='Regform-inner'>

                    <div className='form-container'>
                        <p className='form-Element-Title'>Qualification</p>
                        <div className='column-form-container'>
                            {this.state.qualificationList.map((section) => (<div>{section}</div>))}
                            <div className='form-row-container'>
                                <div className='form-Element-container'>
                                    <button className='success-btn' onClick={this.populateQualifications}>Add More</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className='form-container'>
                        <p className='form-Element-Title'>Memberships</p>
                        <div className='form-row-container'>
                            <div className='column-form-container'>
                                {this.state.membershipList.map((section) => (<div>{section}</div>))}
                                <div className='form-row-container'>
                                    <div className='form-Element-container'>
                                    <button className='success-btn' onClick={this.populateMembership}>Add More</button>
                                </div>
                            </div>
                                        
                        </div>
                    </div>
                            
                    </div>

                    <div className='form-container'>
                        <p className='form-Element-Title'>Previous Publications</p>
                        <div className='column-form-container'>
                            {this.state.publicationList.map((section) => (<div>{section}</div>))}
                            <div className='form-row-container'>
                                <div className='form-Element-container'>
                                    <button className='success-btn' onClick={this.populatePublications}>Add More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default ResearcherAcademicInfo