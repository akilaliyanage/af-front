import React,{useState,useEffect} from "react";
import '../../../assets/css/admin/admin.css'
import axios from "axios";
import AdminNavbar from "../AdminNavBar";
import Participation from "./Participation";
import Workshops from "./Workshops";
import JsPDF from 'jspdf';
import ResearchPaper from "./ResearchPapers";

function  Report(){

    const generatePDF = () => {

        const report = new JsPDF('portrait','pt','a2');
        report.html(document.querySelector('#report')).then(() => {
            report.save('report.pdf');
        });



    }



    return(
        <div>
            <AdminNavbar/>
            <br/>
            <button onClick={generatePDF} type="button" className="btn btn-dark uditha-report-button">Export PDF</button>
            <div id = 'report'>
            <Participation/>
            <Workshops/>
            <ResearchPaper/>

            </div>

        </div>
    )
}

export default Report;