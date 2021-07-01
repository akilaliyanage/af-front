import React,{useEffect,useState} from "react";
import '../../../assets/css/admin/admin.css'
import axios from "axios";
import config from "../../../config.json";


function EventStatus(props){

    const [workshopLimit,setWorkshopLimit] = useState();
    const [researchLimit,setResearchLimit] = useState();
    const [participateLimit,setParticipateLimit] = useState();
    const [workshopStatus,setWorkshopStatus] = useState('Open');
    const [researchStatus,setResearchStatus] = useState('Open');
    const [participateStatus,setParticipateStatus] = useState('Open');

    const [workshopCount,setWorkshopCount] = useState(0);
    const [researchCount,setResearchCount] = useState(0);
    const [participationCount,setParticipationCount] = useState(0);

    const[workshopStatusColor,setWorkshopStatusColor] = useState('btn btn-success');
    const[researchStatusColor,setResearchStatusColor] = useState('btn btn-success');
    const[participateStatusColor,setParticipateColor] = useState('btn btn-success');

    useEffect(() => {
        const url = config.host+"/event-update/workshop";
        axios.get(url).then((res) => {
            setWorkshopCount(res.data.count);
        })
    });

    useEffect(() => {
        const url = config.host+"/event-update/research";
        axios.get(url).then((res) => {
            setResearchCount(res.data.count);
        })
    });

    useEffect(() => {
        const url = config.host+"/event-update/participation";
        axios.get(url).then((res) => {
            setParticipationCount(res.data.count);
        })
    });

    useEffect(() => {

        const url = config.host+"/event-update";
        axios.get(url).then((res) => {

            setWorkshopLimit(res.data[0].WorkshopLimit);
            setResearchLimit(res.data[0].ResearchLimit);
            setParticipateLimit(res.data[0].ParticipateLimit);

        }).then(() => {

                if(workshopCount >= workshopLimit){
                    setWorkshopStatus('Closed');
                    setWorkshopStatusColor('btn btn-danger')
                }
                if (researchCount >= researchLimit){
                    setResearchStatus('Closed');
                    setResearchStatusColor('btn btn-danger')
                }
                if (participationCount >= participateLimit){
                    setParticipateStatus('Closed');
                    setParticipateColor('btn btn-danger')
                }
        })

    });


    return(

        <div>
            <div className="card bg-dark mb-3">
                <img className="card-img-top" src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" alt="Card image cap"/>
                    <div className="card-body">


                        <h5 style={{color:"orange"}}>Workshops<span className="pull-right">
                        <button type="button" style={{marginLeft:"20%",width:"40%"}} className={workshopStatusColor}>{workshopStatus}</button></span></h5>

                        <h5 style={{color:"orange"}}>Researches<span className="pull-right">
                        <button type="button" style={{marginLeft:"20%", width:"40%"}} className={researchStatusColor}>{researchStatus}</button></span></h5>

                        <h5 style={{color:"orange"}}>Participation<span className="pull-right">
                        <button type="button" style={{marginLeft:"15%", width:"40%"}} className={participateStatusColor}>{participateStatus}</button></span></h5>


                    </div>
            </div>
        </div>

    )

}

export default EventStatus;