import React,{useState,useEffect} from "react";
import '../../../assets/css/admin/admin.css'
import axios from "axios";
import config from "../../../config.json";

function ResearchPaper(){

    const [data,setData] = useState([]);

    useEffect(() => {

        const url = config.host+"event-update/research-papers";
        axios.get(url).then((res) => {

            setData(res.data);

        })

    })

    return(
        <div>
            <h4 style={{marginLeft:'20%'}}>Researches</h4>
            <table className="table table-success table-striped center" style={{width:'60%'}}>
                <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Researcher</th>
                    <th scope="col">Status</th>
                </tr>
                </thead>
                {
                    data.map((research) =>
                        <tbody>
                        <tr>
                            <td>{research.paperName}</td>
                            <td>{research.researcherName}</td>
                            <td>{research.isApproved}</td>
                        </tr>
                        </tbody>

                    )}
            </table>
        </div>
    )

}

export default ResearchPaper;