import React,{useEffect,useState} from "react";
import '../../../assets/css/admin/admin.css'
import axios from "axios";
import config from "../../../config.json";

function ApproveTitle(){

    const [title,setTitle] = useState();
    const [subTopic,setSubTopic] = useState();
    const [cacheName,setCacheName] = useState();
    const [editID,setEditID] = useState();
    const [venue,setVenue] = useState();
    const [dateMonth,setDateMonth] = useState();

    const [visible,setVisible] = useState("");



    useEffect( () => {

        const url = config.host+"/edi-noti";
        axios.get(url).then((res) => {
            const result = res.data.filter(function(item){
                return item.cacheName === "eventTopic";
            });
            if(result.length === 0){
                setVisible("none");
            }
            setTitle(result[0].data.topic);
            setEditID(result[0]._id);
            setSubTopic(result[0].data.SubTopic);
            setDateMonth(result[0].data.datemonth);
            setVenue(result[0].data.venue)
        }).catch((err) => {
            console.log(err);
        })

    })


    const ApproveTitle = () => {

        const newTitle = {
            title,
            subTopic,
            editID,
            venue,
            dateMonth
        }

        console.log(newTitle);
        const url = config.host+"/admin/approve/topic";

        axios.post(url,newTitle).then((res) => {

            if(res.data.status === 200){
                alert("Approved");
            }
            else {
                alert("Failed")
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    const decline = () => {

        const url = config.host+"/admin/delete/"+editID;
        axios.delete(url).then((res) => {

            if(res.data.status === 200){
                alert("Declined");
                setVisible("none");
            }
            else {
                alert("Failed")
            }
        }).catch((err) => {
            console.log(err);
        })
    }





    return(

        <div style={{display:visible }}>
            <div className="card w-50" >
                <div className="card-header">Title</div>
                <div className="card-body text-primary">
                    <h5 className="card-title">{title}</h5>
                    <br/>

                    <a href="#" onClick={ApproveTitle} className="btn btn-primary">Approve</a>
                    &nbsp;
                    <a href="#" onClick={decline} className="btn btn-danger">Decline</a>
                </div>
            </div>

        </div>

    )
}

export default ApproveTitle;