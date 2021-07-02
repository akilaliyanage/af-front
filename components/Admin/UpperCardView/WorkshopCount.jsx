import React, {useEffect, useState} from "react";
import '../../../assets/css/admin/admin.css';
import config from "../../../config.json";
import axios from "axios";
import EventStatus from "../EventStatusContent/EventStatus";
import { BsFillDisplayFill } from 'react-icons/bs';
import {Link} from "react-router-dom";

function WorkshopCountCard(){

    const [count,setCount] = useState(0);

    useEffect(() => {
    const url = config.host+"/event-update/workshop";
    axios.get(url).then((res) => {
        setCount(res.data.count);
    });
    })

    return(

        <div>
            <Link to ={`/Workshops`}>
            <div className="uditha-small-card workshopcard-align">
                <div className="smallcard-text-align">
                    <h3 style={{color:"white"}}>Workshops</h3>
                    <h2 style={{color:"white"}}>{count}</h2>
                    <div className="uditha-icon">
                        < BsFillDisplayFill/>
                    </div>
                </div>
            </div>
            </Link>


        </div>

    )
}

export default WorkshopCountCard;