import React,{useEffect,useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/admin/admin.css'
import '../../assets/css/admin/approve.css'
import ApproveTitle from "./ApproveContent/ApproveTitle";
import ApproveDate from "./ApproveContent/ApproveDate";
import ApproveAbout from "./ApproveContent/ApproveAbout";
import AdminNavbar from "./AdminNavBar";
import ApproveSpeecher from "./ApproveContent/ApproveSpeechers";
import ApproveNews from "./ApproveContent/ApproveNews";

function AdminApprove(){



    useEffect( () => {

        document.body.style.backgroundColor = "#282c34"

    })


    return(

        <div>
            <AdminNavbar/>
        <div className= "uditha-approve-section">

             <ApproveTitle/>
             <br/>
             <ApproveDate/>
            <br/>
             <ApproveAbout/>
             <br/>
            <ApproveSpeecher/>
            <br/>
            <ApproveNews/>

        </div>
        </div>

    )
}

export default AdminApprove;