import React,{useEffect,useState} from "react";
import '../../../assets/css/admin/admin.css'
import axios from "axios";
import config from '../../../config.json'


function ApproveNews(){

    const [name,setName] = useState();
    const [image,setImage] = useState();
    const [edate,setEdate] = useState();
    const [newsUrl,setUrl] = useState();
    const [description,setDescription] = useState();
    const [editID,setEditID] = useState();
    const [visible,setVisible] = useState("");

    useEffect( () => {

        const url = config.host+"/edi-noti";
        axios.get(url).then((res) => {
            const result = res.data.filter(function(item){
                return item.cacheName === "eventNews";
            });
            console.log(result);
            if(result.length === 0){
                setVisible("none");
            }
            setName(result[0].data.name);
            setImage(result[0].data.image);
            setDescription(result[0].data.des);
            setEdate(result[0].data.edate);
            setUrl(result[0].data.url);
            setEditID(result[0]._id);

        }).catch((err) => {
            console.log(err);
        })

    },[])

    const ApproveAbout = () => {

        const news = {
            name,
            image,
            edate,
            newsUrl,
            editID,
            description
        }

        const url = config.host+"/admin/approve/news";

        axios.post(url,news).then((res) => {

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
                <div className="card-header">News</div>
                <div className="card-body text-primary">
                    <img src={image} width="70" height="70" style={{"border-radius": "50%"}} />
                    <br/>
                    <h5 className="card-title">{name}</h5>
                    <br/>
                    <a href="#" onClick={ApproveAbout} className="btn btn-primary">Approve</a>
                    &nbsp;
                    <a href="#" onClick={decline} className="btn btn-danger">Decline</a>
                </div>


            </div>




        </div>


    )
}

export default ApproveNews;