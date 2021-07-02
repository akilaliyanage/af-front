import React,{useState,useEffect} from "react";
import '../../../assets/css/admin/admin.css'
import axios from "axios";
import config from "../../../config.json";

function Participation(){

    const [data,setData] = useState([]);

    useEffect(() => {

        const url = config.host+"/n-user/";
        axios.get(url).then((res) => {

            setData(res.data);

        })

    })

    return(
        <div>
            <h4 style={{marginLeft:'20%'}}>Participation</h4>
            <table className="table table-success table-striped center" style={{width:'60%'}}>
                <thead>
                <tr>
                    <th scope="col">username</th>
                    <th scope="col">email</th>
                    <th scope="col">contact</th>
                </tr>
                </thead>
                {
                    data.map((user) =>
                <tbody>
                <tr>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.tp}</td>
                </tr>
                </tbody>

                    )}
            </table>
        </div>
    )

}

export default Participation;