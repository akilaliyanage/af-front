import React,{useState,useEffect} from "react";
import '../../assets/css/admin/admin.css'
import AdminNavbar from "./AdminNavBar";
import Participation from "./Report/Participation";



function ViewParticipation(){

    return(
        <div>
            <AdminNavbar/>
            <Participation/>
        </div>
    )
}

export default ViewParticipation;