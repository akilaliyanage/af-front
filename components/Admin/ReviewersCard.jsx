import React,{useState,useEffect} from "react";
import '../../assets/css/admin/admin.css'
import axios from "axios";
import {Link} from "react-router-dom";
import config from "../../config.json";
import { BsPencilSquare } from 'react-icons/bs';

function ReviewersCard(props){


    const [reviewData,setReviewers] = useState([]);


    useEffect(() => {
        const url = config.host+"/reviewer/";
        axios.get(url).then((res) => {
            setReviewers(res.data);
        }).catch((err) => {
            console.log(err);
        })

    },[]);


    return(

        <div className="uditha-card uditha-reviewer-card-align">

        <div className="uditha-reviewers">

            <h4 style={{color:"white"}}>Current Reviewers</h4>
            <div className="uditha-reviewer-button-align">
            <button onClick={e =>  window.location.href='/add-reviewer'} className="button-add-reviewer">Add new</button>
            </div>
            <br/>
            {
                reviewData.map((reviewer) =>

                    <div>

                        <table style={{padding:"5px",borderSpacing:"1px",tableLayout:"fixed",width:"400px"}}>
                            <tr>

                                <th><img src={config.host+"/"+reviewer.profileImage} width="70"  style={{"border-radius": "50%"}}/> </th>
                                <td style={{color:"white"}}>{reviewer.name}</td>

                                <Link to ={`update-reviewer/${reviewer._id}`}>
                                <td><BsPencilSquare/></td>
                                </Link>
                            </tr>

                        </table>





                    </div>


            )
            }



        </div>

        </div>

)
}

export default ReviewersCard;