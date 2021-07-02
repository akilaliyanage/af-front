import React, {useEffect, useState} from 'react';
import '../../assets/css/admin/admin.css'
import {useHistory} from "react-router-dom";

function AdminNavbar(){

    const  history = useHistory();

    const [admin,setAdmin] = useState();
    const [visible,setVisible] = useState('none')


    useEffect(() => {
        const admin = localStorage.getItem('user_name');
        if(admin !== null){
            setAdmin(admin);
            setVisible('')
        }
    });

    const logout = () => {
        localStorage.clear();
        history.push("/admin/login");
    }


    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Dashboard</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home </a>
                        </li>
                        <li className="nav-item">
                            <a style={{display:visible }} onClick={logout} className="nav-link" href="#">Logout</a>
                        </li>
                        <li className="nav-item">
                            <a style={{display:visible }} className="nav-link" href="#">Logged in as {admin}</a>
                        </li>


                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default AdminNavbar;