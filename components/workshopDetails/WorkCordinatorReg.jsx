import React, { Component } from 'react'
import ReactDOM from "react-dom";
import './../../assets/css/WorkshopDetails/workReg.css'


import config from '../../config.json'

class WorkCordinatorReg extends Component {

    constructor(props){
        super(props)
        this.state = {
            name:"",
            studyField:"",
            email:"",
            password:"",
            confPassword:"",
            regErros:"",
            role: 'reg',
            isAuth : false,
            hiddenStatus: false,
            logInURL: "/n-wc/workCon-login",
            regURL:"/n-wc/workCon-register"
        }

        this.role = this.role.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    role(value){
        if(value == 'reg'){
            this.setState({role : 'reg', hiddenStatus : false})
        }else if(value == 'login'){
            this.setState({role : 'login', hiddenStatus : true})
        }
    }

    

    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    handleSubmit(e){
        
        e.preventDefault();
        
        if(this.state.role == 'reg'){
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if(this.state.password != this.state.confPassword){
                alert("Passwords mismatch!!!")

            }else if(!re.test(String(this.state.email).toLowerCase())){
                alert("Invalid E-mail address!")
            }else{


                const data = {
                    name : this.state.name,
                    studyField: this.state.studyField,
                    email : this.state.email,
                    password: this.state.password
                }

                console.log(data)
        
                fetch(config.host + '/n-wc/workCon-register',{
                    method : 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body : JSON.stringify(data)
                }).then(res => res.json()).then(data =>{

                    alert("Registration Successfull!")
                    
                }).catch(err =>{
                    console.log(err)
                })
            }
        }

        else if(this.state.role == 'login'){
            const data = {
                email : this.state.email,
                password : this.state.password
            }

            console.log(data)
            fetch(config.host + '/n-wc/workCon-login',{
                method : 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body : JSON.stringify(data)
            }).then(res => res.json()).then(data =>{
                console.log(data.token)
    
                if(data.token){
                    window.localStorage.setItem('wc-token',data.token)
                    window.localStorage.setItem('wc-id',data.id)
                    window.localStorage.setItem('wc-email',data.email)

                    alert("Login Successfull!")

                    setInterval(() => {
                        this.setState({isAuth : true});
                    }, 2000);

                    window.location = `/condDash`
                }
                
            }).catch(err =>{
                console.log(err)
            })
        }

    }


    render() {

        const back = {
            background: '#00b5fddc',
            color : 'white'
        };

        const back2 = {
            background: 'none',
            color : 'white'
        };

        return (
            <div className="nt-r-signin" style={{ backgroundImage: `url(http://ig.com.my/wp-content/uploads/2017/11/profile-background.jpg)` }}>
                <div className="nt-sign-card" style={{ backgroundImage: `url(http://ig.com.my/wp-content/uploads/2017/11/profile-background.jpg)` }}>

                    <div className="nt-signin">
                        <h1 style={{color:"white"}} >I C A F</h1>
                        <p className="nt-sign-head" style={{color:"white"}}>Workshop Coordinator | {this.state.role == 'reg'?'SignUp' : 'LogIn'}</p>    
                    </div>   

                    <div className="nt-log-reg">
                        <div onClick = {() => this.role('reg')} className="nt-rg-btns" style={this.state.role == 'reg' ? back : back2}> <b>SignUp</b> </div>
                        <div onClick = {() => this.role('login')} className="nt-rg-btns" style={this.state.role == 'login' ? back : back2}> <b>LogIn</b> </div>
                    </div> 
                
                    <form method="post">
                        <div className="nt-sign-form">
                            <div className="nt-sign-formitem">
                                {/* <label className="nt-lable" htmlFor="">User Name</label><br /> */}
                                <input type="text" name="name" className="nt-sign-input" placeholder="Your Name" 
                                    value={this.state.name} onChange={this.handleChange} required hidden={this.state.hiddenStatus}
                                />
                            </div>
                            <div className="nt-sign-formitem">
                                {/* <label className="nt-lable" htmlFor="">User Name</label><br /> */}
                                <input type="text" name="studyField" className="nt-sign-input" placeholder="Your Feild of study" 
                                    value={this.state.studyField} onChange={this.handleChange} required hidden={this.state.hiddenStatus}
                                />
                            </div>
                            <div className="nt-sign-formitem">
                                {/* <label className="nt-lable" htmlFor="">User Name</label><br /> */}
                                <input type="text" name="email" className="nt-sign-input" placeholder="Your Email" 
                                    value={this.state.email} onChange={this.handleChange} required
                                />
                            </div>
                            <div className="nt-sign-formitem">
                                {/* <label className="nt-lable" htmlFor="">User Name</label><br /> */}
                                <input type="password" name="password" className="nt-sign-input" placeholder="Your Password" 
                                    value={this.state.password} onChange={this.handleChange} required
                                />
                            </div>
                            <div className="nt-sign-formitem">
                                {/* <label className="nt-lable" htmlFor="">User Name</label><br /> */}
                                <input type="password" name="confPassword" className="nt-sign-input" placeholder="Confirm Password" 
                                    value={this.state.confPassword} onChange={this.handleChange} required hidden={this.state.hiddenStatus}
                                />
                            </div>
                            <div className="nt-formitem">
                                <button className="nl-sign-form-btn" type="submit" onClick={this.handleSubmit}>{this.state.role == 'reg' ? 'Sign Up' : 'Log In'}</button>
                            </div>

                            {/* <p className="nt-warn">You won't be able to create workshops immediately. A reviewer should accept you as a workshop coordinator before.</p> */}
                        </div>
                    </form>
                    
                </div>
                
            </div>
        )
    }
}

export default WorkCordinatorReg
