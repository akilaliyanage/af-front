import React,{useState,useEffect} from "react";
import '../../../assets/css/admin/admin.css'
import axios from "axios";
import config from "../../../config.json";

function Workshops(){

    const [data,setData] = useState([]);

    useEffect(() => {

        const url = config.host+"/wShop/";
        axios.get(url).then((res) => {

            setData(res.data);

        })

    })

    return(
        <div>
            <h4 style={{marginLeft:'20%'}}>Workshops</h4>
            <table className="table table-success table-striped center" style={{width:'60%'}}>
            <thead>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Conductor</th>
                <th scope="col">Status</th>
            </tr>
            </thead>
            {
                data.map((workshop) =>
                    <tbody>
                    <tr>
                        <td>{workshop.title}</td>
                        <td>{workshop.conductor}</td>
                        <td>{workshop.aproveStatus}</td>
                    </tr>
                    </tbody>

                )}
        </table>
        </div>
    )

}

export default Workshops;