import React, { Component } from 'react'

import config from '../../config.json'

class AllResearchers extends Component {

    constructor(props){
        super(props)
        this.state={
            allRchs:[]
        }
    }

    componentDidMount(){
        this.fetchItems(); 
    }

    fetchItems(){
        fetch(config.host + '/reviewer/researchers').then(res => res.json()).then(data => this.setState({allRchs:data})).catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <div className="nt-dcard-cont">
                    <div className="nt-approvedcard">

                        <div className="nt-div-head">
                            <h3 className="nt-div-head-text">
                                All Researchers
                            </h3>
                        </div>

                        <table className="nt-table">
                            <thead>
                                <tr>
                                    <th className="nt-td">Researcher Id</th>
                                    <th className="nt-td">Researcher Name</th>
                                    <th className="nt-td">Email</th>
                                    <th className="nt-td">Occupation</th>
                                </tr>
                            </thead>
                            <tbody>

                            {this.state.allRchs.map((researcher) => {
                                return(
                                        <tr>
                                            <td className="nt-td">{researcher._id}</td>
                                            <td className="nt-td">{researcher.fName}</td>
                                            <td className="nt-td">{researcher.pEmail}</td>
                                            <td className="nt-td">{researcher.occupation}</td>
                                        </tr>
                                );
                            })}
                                
                            </tbody>
                        </table>
                    </div>

                </div>
                
            </div>
        )
    }
}

export default AllResearchers
