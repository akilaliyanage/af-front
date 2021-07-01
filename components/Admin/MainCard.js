import React, {useEffect, useState} from "react";
import '../../assets/css/admin/admin.css'
import MainCardTitle from "./MainCardContent/Title";
import MainCardDate from "./MainCardContent/Date";
import axios from "axios";
import config from "../../config.json";

function Reviewers(){

    const [visible,setVisible] = useState("");
    const [result,setResult] = useState();

    useEffect( () => {

        const url = config.host+"/edi-noti";
        axios.get(url).then((res) => {
            const status = res.data;
            setResult(status);

            if(result.length === 0){
                setVisible("none");
            }


        }).catch((err) => {
            console.log(err);
        })

    })



    return(

        <div className="uditha-main-card uditha-main-card-align">
            <div className="uditha-edit-content">


           <MainCardTitle/>
                <br/>
           <MainCardDate/>

                <br/>

                <h2 style={{color:"white"}}>@</h2>
                <h1 style={{color:"white"}}>SLIIT</h1>
                <br/>
                <button style={{display:visible }} onClick={e =>  window.location.href='/approve'} className="uditha-notify-button blink">Updates are Pending</button>

            </div>

        </div>

    )
}

export default Reviewers;