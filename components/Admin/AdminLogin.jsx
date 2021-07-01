import React,{useEffect,useState} from "react";
import '../../assets/css/admin/admin.css'
import AdminNavbar from "./AdminNavBar";
import axios from "axios";
import {useHistory} from "react-router-dom";
import config from "../../config.json";

function AdminLogin(){

    const  history = useHistory();


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [passwordToggle, setToggle] = useState("password");

    useEffect(()=> {
        document.body.style.backgroundColor = "#282c34"
        });


    const toggleVisible = e => {
        if(passwordToggle === "password") {
            setToggle("text");
        }
        else {
            setToggle("password");
        }
    }

    const Login = (e) => {
        e.preventDefault();
        const admin = {
            username,
            password
        }


        const url = config.host+"/admin/login";
        axios.post(url,admin).then((res) => {

            if(res.data.status === 200){

                localStorage.setItem("user_role",res.data.user[0].role);
                localStorage.setItem("user_name",res.data.user[0].username);
                history.push("/admin");

            }
            else {
                alert("Invalid Username or Password");

            }
        })

    }

    return(

        <div>

            <AdminNavbar/>

            <div className="uditha-add-reviewer-form">


                <div className="uditha-login-cover">
                    <img src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" width="370" height="450"/>
                </div>

                <form className="uditha-form-control" onSubmit={Login}>

                    <h2 style={{color:"white"}}>Admin Login</h2>
                    <br/>
                    <label className="description" htmlFor="element_2">Username </label>
                    <div>
                        <input required={true} style={{color:"black"}} type="text" onChange={(e) => {setUsername(e.target.value)}} className="uditha-text-control"/>
                    </div>


                    <label className="description" htmlFor="element_3">Access Key </label>
                    <div>
                        <input required={true} style={{color:"black"}} type={passwordToggle}  onChange={(e) => {setPassword(e.target.value)}} className="uditha-text-control"/>
                    </div>

                    <input type="checkBox" onClick={toggleVisible}/>
                    <label>Show Access Key &nbsp; </label>


                    <input  className="uditha-add-button" type="submit"  value="Login"/>


                </form>
            </div>
        </div>



    )
}

export default AdminLogin;
