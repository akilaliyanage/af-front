import React,{useEffect,useState} from "react";
import '../../../assets/css/admin/admin.css'
import axios from "axios";
import config from "../../../config.json";



function EventLimitUpdate(){


    const [workshopLimit,setWorkshopLimit] = useState();
    const [researchLimit,setResearchLimit] = useState();
    const [participateLimit,setParticipateLimit] = useState();
    const [visible,setVisible] = useState("");

    useEffect(() => {

        const url = config.host+"/event-update";
        axios.get(url).then((res) => {

            setWorkshopLimit(res.data[0].WorkshopLimit);
            setResearchLimit(res.data[0].ResearchLimit);
            setParticipateLimit(res.data[0].ParticipateLimit)

        })

    },[])


    const updateEvents = (e) => {
        e.preventDefault();

        const update = {
            workshopLimit,
            researchLimit,
            participateLimit
        }
        console.log(update);

        const url = config.host+"/event-update";

    axios.post(url,update).then((res) => {
        if(res.data.status === 200){
            alert("Updated")
        }
        else{
            alert("failed")
        }

        setVisible("none")
        window.location.reload();
    })

    }

    const cancel = () => {
        setVisible("none");
        window.location.reload();
    }


    return(

        <div style={{display:visible}}>
            <div className="card" style = {{"width": "22rem", marginTop:'30px'}}>
                <div className="card-body">
                    <div className="form-group">
                   <form onSubmit={updateEvents}>
                       <label >Workshops</label>
                       <input type="number" defaultValue={workshopLimit}
                              onChange={(e) => {setWorkshopLimit(e.target.value)}} className="form-control"/>
                       <br/>
                       <label>Research</label>
                       <input type="number" defaultValue={researchLimit}
                              onChange={(e) => {setResearchLimit(e.target.value)}} className="form-control"/>
                       <br/>
                       <br/>
                       <label>Participation</label>
                       <input type="number" defaultValue={participateLimit}
                              onChange={(e) => {setParticipateLimit(e.target.value)}} className="form-control"/>
                       <br/>
                       <input className="btn btn-primary" type="submit"  value="Save"/>
                       <input style={{marginLeft:'10px'}} onClick={cancel} className="btn btn-primary" type="button"  value="Cancel"/>

                   </form>
                    </div>

                </div>
            </div>
        </div>

    )

}

export default EventLimitUpdate;