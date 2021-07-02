import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import "antd/dist/antd.css";
import { notification} from 'antd';
import config from '../../config.json'

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pEmail : '',
            password : ''
        }
        this.triggerLogin = this.triggerLogin.bind(this);
        this.getValueOnChange = this.getValueOnChange.bind(this);
    }

    triggerLogin = () => {
        const data = {
            pEmail : this.state.pEmail,
            password : this.state.password
        }
        console.log(data);

        fetch(config.host + '/researcher/login',{
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body : JSON.stringify(data)
        }).then(res => res.json()).then(data =>{
            console.log(data)

            if(data.token){
                // alert('login')
                window.localStorage.setItem('token',data.token)
                window.localStorage.setItem('id',data.id)
                window.localStorage.setItem('username',data.username)
                notification['success']({
                    message: 'Sucessfully Loged in',
                    description:
                      'You have sucessfully logged as an researcher to the ICAF',
                  });
                  
                window.location.replace("/Add-ResearchPaper")
            }
            
        }).catch(err =>{
            console.log(err)
            notification['error']({
                    message: 'Login Failed',
                    description:
                      'Please check your credentials and try again',
                  });
        })
    }

    getValueOnChange(val){
        this.setState({[val.target.name] : val.target.value})
        console.log(val.target.name , val.target.value)
    };

    render() {
        return (
            <div>
                <div>
                    <Paper className="paper-bounderies mt-5 p-3">


                        <div className="row">
                            <h1 className="text-center">Researcher Login</h1>
                        </div>
                        <div className="row m-4 d-flex justify-content-center">

                            <div className="form-outline mb-4">
                                <TextField id="pEmail" name='pEmail' type='email' fullWidth label="Email Adddress" variant="outlined" size="small" onChange={this.getValueOnChange}/>
                            </div>

                            <div className="form-outline mb-4">
                                {/* <input type="password" id="form1Example2" className="form-control" />
                                <label className="form-label" for="form1Example2">Password</label> */}
                                <TextField id="password" name='password' type='password' fullWidth label="Password" variant="outlined" size="small" onChange={this.getValueOnChange}/>
                            </div>


                            <div className="col d-flex justify-content-center mb-2">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="Remember" />
                                    <label className="form-check-label" htmlFor="Remember"> Remember me </label>
                                </div>
                            </div>
                            <div className="row d-flex text-center align-items-center justify-content-center pl-5 pr-1">
                                <button type="submit" className="btn btn-primary btn-block ml-5 w-75" onClick={this.triggerLogin}>Sign in</button>
                            </div>

                            <div className="row mt-3">
                                <p>Still Not registered</p>
                                <a href="#!">Register as a researcher</a>
                            </div>
                        </div>
                    </Paper>
                </div>
            </div>
        )
    }
}
