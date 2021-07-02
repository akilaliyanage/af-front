import React, { Component } from 'react';
import NavBar from '../landing_page/NavBar';
import Noti from './Noti'
import NotiErr from './NotiErr';
import { Redirect } from 'react-router-dom';

import config from '../../config.json'
import KPanel from './KPnanel';
import Form from './Form';
class UserReg extends Component {
    constructor(props) {
        super(props);
        this.role = this.role.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.timer = this.timer.bind(this)
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
            isAuth : false
         }
    }

    role(val){
        if(val == 'reg'){
            this.setState({role : 'reg', hidden : false})
        }else if(val == 'login'){
            this.setState({role : 'login', hidden : true})
        }
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
                proImg : "bcjcdsc",
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
            <div className="akila-user" style={{overflow:'hidden'}}>
               

                <div class="akila-container">
                    <div>
                        <div className="img">
                            <div style={{backgroundColor:'rgb(23, 24, 26, 0.3)'}}>
                                <NavBar items={this.state.navbar_items}/>
                            </div>
                            <KPanel/>
                        </div>
                    </div>
                    <div>
                        <Form/>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default UserReg;