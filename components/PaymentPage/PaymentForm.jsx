import React, { Component } from 'react';
import { Input } from 'antd';
import config from '../../config.json'
class PaymentForm extends Component {
    constructor(props) {
        super(props);
        this.role = this.role.bind(this)
        this.addHyphen = this.addHyphen.bind(this);
        this.state = { 
            navbar_items : [],
            role: 'attendee',
            Cnum : '',
            price : 0,
            cardName : '',
            cardNo : '',
            month : '',
            year : '',
            cvv : '',
            zip : ''
         }
    }

    componentDidMount(){

        // //calling the api to fetch data
        // fetch(config.host + "/nav-items").then(res => res.json()).then(data =>{
        //     console.log(data)
        //     this.setState({navbar_items:data})
        // })
    }

    role(val){
        if(val == 'attendee'){
            this.setState({role : 'attendee'})
            fetch(config.host + "/price/atendee").then(res => res.json()).then(data =>{
                this.setState({price : data.price})
            })
        }else if(val == 'reser'){
            this.setState({role : 'reser'})
            fetch(config.host + "/price/re-paper presenter").then(res => res.json()).then(data =>{
                this.setState({price : data.price})
            })
        }
    }

    addHyphen(ele) {
        console.log(ele.target.value)
        ele = ele.target.value.split('-').join('');    // Remove dash (-) if mistakenly entered.

        let finalVal = ele.match(/.{1,4}/g).join('-');
        console.log(finalVal)
        this.setState({Cnum : finalVal})
        //document.getElementById(element.id).value = finalVal;
    }

    handleChange = (e) =>{
        this.setState({[e.target.name] : e.target.value})
        console.log([e.target.name] , e.target.value);
    }

    handleSubmit = () =>{
        const data = {
            cardName : this.state.cardName,
            cardNo : this.state.cardNo,
            month : this.state.month,
            year : this.state.year,
            cvv : this.state.cvv,
            zip : this.state.zip,
            userid : window.localStorage.getItem('id'),
            amount : this.state.price,
            role : window.localStorage.getItem('role')
        }

        console.log(data);

        fetch(config.host + "/payment",{
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body : JSON.stringify(data)
        }).then(res => res.json()).then(data =>{
            console.log(data);
        })
    }
    render() { 
        const back = {
            background: '#301b3f',
            color:'white'
        };

        const back2 = {
            background: 'white',
            color : 'black'
        };

        return ( 
            <div className="payment">
            <div style={{width:'600px',margin:'0 auto'}}>
            <h1>Lets finish setting you up..</h1>
            <div className="center">
                <br />
                <div className="row">
                    <div className="col p-3" onClick = {() => this.role('attendee')} style={this.state.role == 'attendee' ? back : back2}> <b>Attendee</b> </div>
                    <div className="col p-3" onClick = {() => this.role('reser')} style={this.state.role == 'reser' ? back : back2}> <b>Research paper presenter</b> </div>
                </div>

                <div className="pay-info">
                    <hr />

                <div className="akila-container">
                    <div>Your bill value is</div>
                    <div>Rs {this.state.price}</div>
                </div>
                <hr />

                <input type="text" name="cardName" id="" onChange={this.handleChange}/>
                <label htmlFor="CardName">Name on the card</label>

                <input type="number" maxLength={12} onChange={this.handleChange} name="cardNo" id="" />
                <label htmlFor="CardName">Card number</label>

               <div className="dates" style={{width: '100%'}}>
               <div className="akila-container">
                    <div>
                        <div className="akila-container" >
                        <input type="text" onChange={this.handleChange} name="month" id="" placeholder="MM"/>
                        <input type="text" onChange={this.handleChange} name="year" id="" placeholder="YY"/>
                            
                        </div>

                    </div>
                    <div>
                        <input type="text" onChange={this.handleChange} name="cvv" id="" />
                        <label htmlFor="CardName">CVV</label>
                    </div>
                </div>
               </div>

               <input onChange={this.handleChange} type="text" name="zip" id="" placeholder="EX: LK/70100"/>
                <label htmlFor="CardName">Country/ZIP code</label>

                <button onClick={this.handleSubmit}><b>PAY</b></button>




                </div>
            </div>
            </div>
            
        </div>  
         );
    }
}
 
export default PaymentForm;