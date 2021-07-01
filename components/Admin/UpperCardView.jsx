import React from "react";
import '../../assets/css/admin/admin.css'
import WorkshopCountCard from "./UpperCardView/WorkshopCount";
import ResearchCountCard from "./UpperCardView/ResearchCount";
import ParticipateCountCard from "./UpperCardView/ParticipationCount";
import OtherCountCard from "./UpperCardView/OtherCount";

function UpperCard(){



    return(

        <div>


            <WorkshopCountCard/>

            <ResearchCountCard/>

            <ParticipateCountCard/>

            <OtherCountCard/>




        </div>

    )
}

export default UpperCard;