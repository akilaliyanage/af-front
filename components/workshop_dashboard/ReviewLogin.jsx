import React, { Component } from 'react'
import './../../assets/css/WorkshopDetails/reviewerlogin.css'
//import background from ""

import config from './../../config.json'

class ReviewLogin extends Component {

    constructor(props){
        super(props)
        this.state = {
            username:"",
            password:"",
            isAuth: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event){
        this.setState({
            [event.target.name]:event.target.value
        });

        console.log([event.target.name],event.target.value)
    }

    handleSubmit(e){
        e.preventDefault();

        const data = {
            username : this.state.username,
            password : this.state.password
        }

        console.log(data)
        
        fetch(config.host + '/reviewer/rv-login',{
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body : JSON.stringify(data)
        }).then(res => res.json()).then(data =>{
            console.log(data.token)

            if(data.token){
                window.localStorage.setItem('rev-token',data.token)
                window.localStorage.setItem('rev-id',data.id)
                window.localStorage.setItem('rev-username',data.username)

                console.log(localStorage.getItem('rev-username'))
                alert("Login Successfull!")

                setInterval(() => {
                    this.setState({isAuth : true});
                }, 2000);

                window.location = `/workshopDash`
            }
            
        }).catch(err =>{
            console.log(err)
        })

    }


    render() {
        return (
            <div className="nt-r-login" style={{ backgroundImage: `url(https://wallpaperaccess.com/full/16692.jpg)` }}>
                <div className="nt-log-card" style={{ backgroundImage: `url(https://wallpaperaccess.com/full/16692.jpg)` }}>

                    <div className="nt-login">
                        <h1 style={{color:"white"}}>I C A F</h1>
                        <p className="nt-log-head" style={{color:"white"}}>REVIEWER LOGIN</p>    
                    </div>    
                
                <form method="post">
                    <div className="nt-log-form">
                        <div className="nt-formitem">
                            {/* <label className="nt-lable" htmlFor="">User Name</label><br /> */}
                            <input type="text" name="username" className="nt-input" placeholder="Enter UserName" onChange={this.handleInput}/>
                        </div>
                        <div className="nt-formitem">
                            {/* <label className="nt-lable" htmlFor="">User Name</label><br /> */}
                            <input type="password" name="password" className="nt-input" placeholder="Enter Password" onChange={this.handleInput}/>
                        </div>
                        <div className="nt-formitem">
                            <button className="nl-form-btn" type="submit" onClick={this.handleSubmit}>Login</button>
                        </div>
                    </div>
                </form>
                    
                </div>
                
            </div>
        )
    }
}

export default ReviewLogin
