import React, { Component } from 'react'

import config from '../../config.json'

export class ApprovedResearches extends Component {
    constructor(props){
        super(props)
        this.state={
            researchs:[]
        }
    }

    componentDidMount(){
        this.fetchItems(); 
    }

    fetchItems(){
        fetch(config.host + '/resrch/approved').then(res => res.json()).then(data => this.setState({researchs:data})).catch(err => console.log(err))
    }


    render() {
        
        return (
            <div>
                <div className="nt-dcard-cont">

                    <div className="nt-approvedcard">
                        

                        <div className="nt-div-head">
                            <h3 className="nt-div-head-text">
                                All approved Researches
                            </h3>
                        </div>

                        <table className="nt-table">
                            <thead>
                                <tr>
                                    <th className="nt-td">Paper Name</th>
                                    <th className="nt-td">Researcher Name</th>
                                    <th className="nt-td">Description</th>
                                    <th className="nt-td">Research paper</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.researchs.map((research) => {
                                    return(
                                            <tr>
                                                <td className="nt-td">{research.paperName}</td>
                                                <td className="nt-td">{research.researcherName}</td>
                                                <td className="nt-td">{research.description}</td>
                                                <td className="nt-td"><a href={research.researchPaper} target="_blank">Preview Paper</a></td>
                                            </tr>
                                    );
                                })}

                                {/* <tr>
                                    <td className="nt-td">test id</td>
                                    <td className="nt-td">Test title</td>
                                    <td className="nt-td">Test date</td>
                                    <td className="nt-td">Test conductor</td>
                                    <td className="nt-td">Test date</td>
                                </tr>
                                <tr>
                                    <td className="nt-td">test id</td>
                                    <td className="nt-td">Test title</td>
                                    <td className="nt-td">Test date</td>
                                    <td className="nt-td">Test conductor</td>
                                    <td className="nt-td">Test date</td>
                                </tr>
                                <tr>
                                    <td className="nt-td">test id</td>
                                    <td className="nt-td">Test title</td>
                                    <td className="nt-td">Test date</td>
                                    <td className="nt-td">Test conductor</td>
                                    <td className="nt-td">Test date</td>
                                </tr> */}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        )
    }
}

export default ApprovedResearches
