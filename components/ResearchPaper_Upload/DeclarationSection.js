import { Checkbox } from 'material-ui'
import React, { Component } from 'react'

export default class DeclarationSection extends Component {
     constructor(props){
         super(props)
         this.state = {
            isAgreed : false
         }
     }
    render() {
        return (
            <div>
                <div className="row pl-5 pr-5 pt-2">
                    <div className="card border-success p-3">
                        <h4 className="card-title text-center">Declaration</h4>
                        <div>
                            <ul style={{display: "list-item"}}>
                                <li className="p-2" style={{listStyle:"disc"}}>I/We confirm that this research paper is not under consideration, accepted for publication or published elsewhere.</li>
                                <li className="p-2" style={{listStyle:"disc"}}>I/We agree that if accepted for publication, this research paper may be checked using anti-plagiarism software.</li>
                                <li className="p-2" style={{listStyle:"disc"}}>I/We agree that by publishing with ICAF, author/authors enter into an exclusive License Agreement, where author/authors have copyright but license exclusive rights in their article to ICAF as the publisher.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row mt-4">
                    <div className="form-check d-flex justify-content-center">
                        <input className="form-check-input mr-5 ml-5" type="checkbox" id="isAgree" name='isAgree' onChange={this.props.setAgreement}/>
                        <label for="agreement" className="ml-5 mr-5"><h6 className="ml-5 mr-5">I/We acknowledge my/our agreement with the above statements.</h6></label><br/>
                    </div>
                </div>
            </div>
        )
    }
}
