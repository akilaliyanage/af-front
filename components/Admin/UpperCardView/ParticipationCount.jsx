import React, {useEffect, useState} from "react";
import '../../../assets/css/admin/admin.css'
import axios from "axios";
import config from "../../../config.json";
import { BsPeopleFill } from 'react-icons/bs';
import {Link} from "react-router-dom";


function ParticipateCountCard(){

    const [count,setCount] = useState(0);

    useEffect(() => {
        const url = config.host+"/event-update/participation";
        axios.get(url).then((res) => {
            setCount(res.data.count);
        });
    })

    return(

        <div>

            <Link to ={`/admin/view-participation`}>
            <div className="uditha-small-card participation-align">

                <div className="smallcard-text-align">
                    <h3 style={{color:"white"}}>Participation</h3>
                    <h2 style={{color:"white"}}>{count}</h2>
                    <div className="uditha-icon">
                    < BsPeopleFill/>
                    </div>
                </div>

            </div>
            </Link>

        </div>

    )
}

export default ParticipateCountCard;