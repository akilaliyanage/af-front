import React,{useEffect} from "react";
import '../../assets/css/admin/admin.css'
import ReviewersCard from "./ReviewersCard";
import UpperCard from "./UpperCardView";
import ConfDetails from "./ConfDetailsCard";
import MainCard from "./MainCard";
import AdminNavbar from "./AdminNavBar";
import {useHistory} from "react-router-dom";



function AdminDashboard(){

    const  history = useHistory();

    useEffect(()=> {
        document.body.style.backgroundColor = "#282c34"
        const admin = localStorage.getItem('user_name');
        if(admin === null){
            history.push("/admin/login");
        }
        // document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1508726989460-5741fe0304b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')";
    })

    return(

        <div className>
            <AdminNavbar/>
            <ReviewersCard/>
            <ConfDetails/>
            <UpperCard/>
            <MainCard/>
        </div>

    )
}

export default AdminDashboard;