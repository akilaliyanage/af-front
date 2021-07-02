import React, {useEffect, useState} from "react";
import '../../../assets/css/admin/admin.css'
import axios from "axios";
import config from '../../../config.json'

function MainCardDate(){

    const [date,setDate] = useState();


    useEffect(() => {

        const url = config.host+"/event-date/";
        axios.get(url).then((res) => {
            setDate(res.data.date);
        }).catch((err) => {
            console.log(err);
        })

    })



    return(


        <div className="uditha-main-card-title">


            <h3 style={{color:"white"}}>{date}</h3>

        </div>



    )
}

export default MainCardDate;