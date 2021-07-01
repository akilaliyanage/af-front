import React,{useState,useEffect} from "react";
import '../../assets/css/admin/admin.css'
import AdminNavbar from "./AdminNavBar";
import ResearchPaper from "./Report/ResearchPapers";



function ViewResearcPapers(){

    return(
        <div>
            <AdminNavbar/>
            <ResearchPaper/>
        </div>
    )
}

export default ViewResearcPapers;