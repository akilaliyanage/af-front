import React,{useState,useEffect} from "react";
import '../../../assets/css/admin/admin.css'
import axios from "axios";
import config from "../../../config.json";

function MainCardTitle(){


    const [title,setTitle] = useState();


useEffect(() => {

    const url = config.host+"/topic/";
    axios.get(url).then((res) => {
        setTitle(res.data[0].topic);
    }).catch((err) => {
        console.log(err);
    })

})
    return(


            <div className="uditha-main-card-title">

                <h1 style={{color:"white"}}>{title}</h1>

            </div>



    )
}

export default MainCardTitle;