import React, { Component } from 'react'

import config from '../../config.json'

class MyWorkshops extends Component {

    constructor(props){
        super(props)
        this.state={
            myWorkshops:[],
            loginID:localStorage.getItem('wc-id')
        }
    }

    componentDidMount(){
        this.fetchItems(); 
    }

    fetchItems(){
        fetch(config.host + '/wShop/myWorkshops/'+this.state.loginID).then(res => res.json()).then(data => this.setState({myWorkshops:data})).catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <div className="nt-dcard-cont">
                    <div className="nt-approvedcard">

                        <div className="nt-div-head">
                            <h3 className="nt-div-head-text">
                                My Workshops
                            </h3>
                        </div>
                        
                        <table className="nt-table">
                            <thead>
                                <tr>
                                    <th className="nt-td">Workshop Id</th>
                                    <th className="nt-td">Workshop Title</th>
                                    <th className="nt-td">Workshop Date</th>
                                    <th className="nt-td">Status</th>
                                </tr>
                            </thead>
                            <tbody>

                            {this.state.myWorkshops.map((workshop) => {
                                return(
                                        <tr>
                                            <td className="nt-td">{workshop._id}</td>
                                            <td className="nt-td">{workshop.title}</td>
                                            <td className="nt-td">{workshop.eventDate}</td>
                                            <td className="nt-td">{workshop.aproveStatus}</td>
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

export default MyWorkshops
