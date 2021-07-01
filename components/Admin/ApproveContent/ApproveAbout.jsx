import React,{useEffect,useState} from "react";
import '../../../assets/css/admin/admin.css'
import axios from "axios";
import config from '../../../config.json'


function ApproveAbout(){

    const [about,setAbout] = useState();
    const [editID,setEditID] = useState();

    const [visible,setVisible] = useState("");

    useEffect( () => {

        const url =config.host+ "/edi-noti";
        axios.get(url).then((res) => {
            const result = res.data.filter(function(item){
                return item.cacheName === "aboutEdit";
            });
            if(result.length === 0){
                setVisible("none");
            }
            setAbout(result[0].data.des);
            setEditID(result[0]._id);
        }).catch((err) => {
            console.log(err);
        })

    })

    const ApproveAbout = () => {

        const newAbout = {
            about,
            editID,
        }

        const url = config.host+"/admin/approve/about";

        axios.post(url,newAbout).then((res) => {

            if(res.data.status === 200){
                alert("Approved");
                setVisible("none");
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
                <div className="card-header">About</div>
                <div className="card-body text-primary">
                    <h5 className="card-title">{about}</h5>
                    <br/>
                    <a href="#" onClick={ApproveAbout} className="btn btn-primary">Approve</a>
                    &nbsp;
                    <a href="#" onClick={decline} className="btn btn-danger">Decline</a>
                </div>
            </div>

        </div>

    )
}

export default ApproveAbout;