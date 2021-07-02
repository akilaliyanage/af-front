import React, { Component } from 'react';
import NavBar from '../landing_page/NavBar';
import Noti from './Noti'
import NotiErr from './NotiErr';
import { Redirect } from 'react-router-dom';

import config from '../../config.json'
class Form extends Component {
    constructor(props) {
        super(props);
        this.role = this.role.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.timer = this.timer.bind(this)
        this.submitFile = this.submitFile.bind(this);
        this.state = { 
            navbar_items : [],
            role: 'reg',
            Cnum : '',
            hidden : false,
            username : '',
            password : '',
            repass : '',
            email : '',
            noti : false,
            message : '',
            notiErr : false,
            isAuth : false,
            selectedFile: null,
            curImage : '',
            spin : 'true',
            inputImg : ''
         }
    }

    role(val){
        if(val == 'reg'){
            this.setState({role : 'reg', hidden : false})
        }else if(val == 'login'){
            this.setState({role : 'login', hidden : true})
        }
    }

    submitFile(e){
        console.log(e.target.files[0].name)
        this.setState({ selectedFile: e.target.files[0] });

        this.setState({spin:'',inputImg : 'true'})

        const formData = new FormData()
        formData.append('image', e.target.files[0])

        fetch(config.host + "/image", {
            method: 'POST',
            body: formData
          })
          .then(response => response.json())
          .then(data => {
            console.log(data)
            this.setState({curImage : data.Location,spin: 'true', inputImg:''})
            window.localStorage.setItem('proImg',data.Location)

          })
          .catch(error => {
            console.error(error)
          })
    }

    handleChange(e){
        //console.log([e.target.name] , e.target.value)
        this.setState({[e.target.name] : e.target.value})
    }

    timer(){
        setInterval(() =>{ 
            this.setState({notiErr : false})
            this.setState({noti : false})
         }, 3000);
    }

    handleSubmit(){

        if(this.state.role == 'reg'){
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(this.state.password != this.state.repass){
            this.setState({message : 'Password mismatch!!'})
            this.setState({notiErr : true})
            this.setState({password : ''})
            this.setState({repass : ''})
            this.timer()

        }else if(!re.test(String(this.state.email).toLowerCase())){
            this.setState({message : 'Invalid email address!!'})
            this.setState({notiErr : true})
            this.setState({email : ''})
            this.timer()
        }else{


            const data = {
                username : this.state.username,
                password: this.state.password,
                proImg : this.state.curImage,
                email : this.state.email
            }
    
            fetch(config.host + '/n-user/reg',{
                method : 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body : JSON.stringify(data)
            }).then(res => res.json()).then(data =>{
                console.log(data.message)

                if(data.message == 'ok'){
                    this.setState({noti : true})
                }
                
            }).catch(err =>{
                console.log(err)
            })
        }

        }else if(this.state.role == 'login'){
            const data = {
                username : this.state.username,
                password : this.state.password
            }

            fetch(config.host + '/n-user/login',{
                method : 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body : JSON.stringify(data)
            }).then(res => res.json()).then(data =>{
                console.log(data.token)
    
                if(data.token){
                    window.localStorage.setItem('token',data.token)
                    window.localStorage.setItem('id',data.id)
                    window.localStorage.setItem('username',data.username)
                    window.localStorage.setItem('proImg',data.proImg)
                    this.setState({noti : true});

                    setInterval(() => {
                        this.setState({isAuth : true});
                    }, 2000);
                }
                
            }).catch(err =>{
                console.log(err)
            })
        }

        

               
    }

    render() { 

        const back = {
            background: '#071d48',
            color : 'white'
        };

        const back2 = {
            background: 'white',
            color : 'black'
        };
        const noti = <Noti/>
        const notiErr = <NotiErr msg={this.state.message}/>

        if(this.state.isAuth) {
            return <Redirect to="/" />
        }

        return ( 
           <div>
                               {this.state.noti ? noti : null}
                {this.state.notiErr ? notiErr : null}
                <div style={{color:'black'}} className="login-reg">
                        <p>Please select the desierd action</p>
                                <div class="row">
                                    <div className="col mx-4" onClick = {() => this.role('reg')} style={this.state.role == 'reg' ? back : back2}> <b>New user sign-up</b> </div>
                                    <div className="col mx-4" onClick = {() => this.role('login')} style={this.state.role == 'login' ? back : back2}> <b>Login</b> </div>
                                </div>
                                </div>
                    <div className="login-form">
                        <div className="login" style={{width:'600px',margin:'0 auto',marginTop:'0px',borderRadius:'10px'}}>
                            <p><b>{this.state.role == 'reg'?'Attendee Registration Form' : 'Attendee Login Form'}</b></p>
                               <img className="mb-4" src={this.state.curImage} alt="" />
                               <div className="row">
                                    <div className="col">
                                        <input onChange={this.submitFile} accept=".jpg,.png"  type="file" id="formFile" hidden={this.state.inputImg | this.state.hidden}/>
                                            <div class="alert alert-danger" role="alert" hidden={this.state.spin}>
                                           Please wait, we are uploading ypur image      
                                            <span className="px-3"><div class="spinner-border text-danger" role="status">
                                            <span class="visually-hidden">     Loading...</span>
                                            </div></span>
                                            </div>
                                    </div>
                               </div>
                               <input  type="text" onChange={this.handleChange} name="username" id="" placeholder="Username" value={this.state.username}/>
                               <input style={{textTransform: 'revert'}}  type="text" onChange={this.handleChange} name="password" id="password" value={this.state.password} placeholder={this.state.role == 'reg' ? 'Enter new password' : 'Enter password'}/>
                               <input type="text" onChange={this.handleChange} value={this.state.repass} placeholder="Re-enter the password" name="repass" hidden={this.state.hidden}/>
                               <input type="text" onChange={this.handleChange} value={this.state.email} placeholder="E-mail address" name="email" hidden={this.state.hidden}/>
                               <button onClick={this.handleSubmit}>{this.state.role == 'reg' ? 'Sign Up' : 'Log-in'}</button>
                        </div>
                    </div>
           </div>
         );
    }
}
 
export default Form;