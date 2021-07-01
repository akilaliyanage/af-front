import React, {useState} from "react";
import '../../assets/css/admin/admin.css'
import EventStatus from "./EventStatusContent/EventStatus";
import EventLimitUpdate from "./EventManageContent/EventLimitUpdate";
import { BsPencilSquare } from 'react-icons/bs';

function ConfDetails(){


    const [visible,setVisible] = useState("none");

    const makeVisible = () => {
        setVisible("")
    }


    return(

        <div className="uditha-card uditha-conf-detail-card-align">
            <div className="event-edit-button">
                <BsPencilSquare style={{color:"whitesmoke"}} onClick={makeVisible}/>
            </div>
            <div style={{display:visible}}>
            <EventLimitUpdate/>
            </div>
            <div className="uditha-current-conf-detail">

                <h3 style={{color:"white"}}> Event Registrations</h3>
                <br/>

                <EventStatus/>


            </div>
        </div>

    )
}

export default ConfDetails;