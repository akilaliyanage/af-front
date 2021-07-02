import React, { Component } from 'react';
import NavBar from '../landing_page/NavBar';
import config from '../../config.json'
import KPanal from './KPanal';
import PaymentForm from './PaymentForm';
import Footer from '../landing_page/Footer';

class PayTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            navbar_items : [],
         }
    }

    componentDidMount(){

        // //calling the api to fetch data
        // fetch(config.host + "/nav-items").then(res => res.json()).then(data =>{
        //     console.log(data)
        //     this.setState({navbar_items:data})
        // })
    }

    // addHyphen(ele) {
    //     console.log(ele.target.value)
    //     ele = ele.target.value.split('-').join('');    // Remove dash (-) if mistakenly entered.

    //     let finalVal = ele.match(/.{1,4}/g).join('-');
    //     console.log(finalVal)
    //     this.setState({Cnum : finalVal})
    //     //document.getElementById(element.id).value = finalVal;
    // }

    render() { 

        return ( 
            <div className="akila-payment">
                <div className="row">
                        <div className="col">
                        <div className="img" style={{height:'100vh'}}>
                            <div style={{backgroundColor:'rgb(23, 24, 26, 0.3)'}}>
                                <NavBar items={this.state.navbar_items}/>
                            </div>

                            <KPanal/>
                        </div>
                        </div>

                       <div className="col">
                       <PaymentForm/>
                       </div>
                    </div>

                    <Footer/>
            </div>
         );
    }
}
 
export default PayTemplate;