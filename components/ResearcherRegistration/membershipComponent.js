import React , {Component} from 'react'

class MembershipComponent extends Component{

    constructor(props){
        super(props)
        this.state ={}
    }

    render(){
        return(
            <React.Fragment>
                <div data-testid='membership-container' className='form-row-container' >
                        <div className='form-Element-container'>
                            <input type='text' className='Researcher-form-input-long' id='membership' name='membership' onChange={this.props.setMembershipExtraOnChange}/>
                            <label>Name of Membership</label>
                         </div>
                </div>
            </React.Fragment>
        );
    }

}

export default MembershipComponent