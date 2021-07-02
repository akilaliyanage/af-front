import React from "react";
import '../../../assets/css/admin/admin.css'
import {BsFillCalendarFill, BsFolderFill} from 'react-icons/bs';
import {Link} from "react-router-dom";


function OtherCountCard(){



    return(

        <div>

            <Link to ={`/report`}>
            <div className="uditha-small-card other-align">

                <div className="smallcard-text-align">
                    <h3 style={{color:"white"}}>Report</h3>
                    <h5 style={{color:"white"}}>''''</h5>
                    <div className="uditha-icon">
                        < BsFillCalendarFill/>
                    </div>
                </div>

            </div>
            </Link>

        </div>

    )
}

export default OtherCountCard;