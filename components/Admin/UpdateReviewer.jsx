import React,{useEffect,useState} from "react";
import '../../assets/css/admin/admin.css'
import axios from "axios";
import AdminNavbar from "./AdminNavBar";
import {useHistory} from "react-router-dom";
import config from "../../config.json";

function UpdateReviewer(props){

    const  history = useHistory();
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [picture, setPicture] = useState();
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();
    const [reviewer,setReviewer] = useState([]);
    const [passwordToggle, setToggle] = useState("password");

    const rid = props.match.params.ID;



    useEffect(()=> {
        document.body.style.backgroundColor = "#282c34"

        const url = config.host+"/reviewer/"+ rid;
        axios.get(url).then((res) => {

            setReviewer(res.data);
            setName(res.data[0].name);
            setUsername(res.data[0].username);



        }).catch((err) => {
            console.log(err);
        })

        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    },[selectedFile]);

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        setSelectedFile(e.target.files[0])
        setPicture(e.target.files[0])
    }

    const toggleVisible = e => {
        if(passwordToggle === "password") {
            setToggle("text");
        }
        else {
            setToggle("password");
        }
    }

    const UpdateReviewer = (e) => {
        e.preventDefault();

        const  formData = new FormData();
        formData.append("name",name);
        formData.append("username",username);
        formData.append("picture",picture);

        console.log(rid);
       const url = "http://localhost:8000/reviewer/update/"+rid;
       axios.put(url,formData).then((res) => {
           if(res.data.status === 200){
               alert("Successfully updated");
               history.push("/admin");
           }
           else {
               alert("Failed");
           }
       })
    }

    const DeleteReviewer = (e) => {
        e.preventDefault();
        const url = "http://localhost:8000/reviewer/delete/"+rid;
        axios.delete(url).then((res) => {
            if(res.data.status === 200){
                alert("Successfully deleted");
                history.push("/admin");
            }
            else {
                alert("Failed");
            }
        })
    }

    return(

        <div>


            <AdminNavbar/>
            {
                reviewer.map((reviewer) =>

            <div className="uditha-add-reviewer-form">
                <div className="uditha-avatarInput">
                    <div className="form-group">
                        <input type="file" className="uditha-file-control"  onChange={onSelectFile} name="picture" id="exampleFormControlFile1"/>
                    </div>
                </div>

                <h2>Update Reviewer</h2>

                <div className="uditha-old-avatar-Preview">
                    <img style={{borderRadius:'50%'}} src={config.host+"/"+reviewer.profileImage} width="200" height="200" alt="avatar"/>
                </div>

                <div className="uditha-avatar-Preview">
                    {selectedFile &&  <img style={{borderRadius:'50%'}} src={preview} width="200" height="200" alt="avatar"/>}
                </div>


                <form className="uditha-form-control" onSubmit={UpdateReviewer}>

                    <label className="description" htmlFor="element_1">Full Name </label>
                    <div>
                        <input style={{color:"black"}} type="text"
                               defaultValue={reviewer.name} onChange={(e) => {setName(e.target.value)}} className="uditha-text-control"/>
                    </div>

                    <label className="description" htmlFor="element_2">Username </label>
                    <div>
                        <input style={{color:"black"}} type="text"
                               defaultValue={reviewer.username} onChange={(e) => {setUsername(e.target.value)}} className="uditha-text-control"/>
                    </div>




                    <input  className="uditha-add-button" type="submit"  value="Update"/>
                    <input  className="uditha-add-button" onClick={DeleteReviewer} type="button"  value="Delete"/>


                </form>


            </div>

                )
            }

        </div>



    )
}

export default UpdateReviewer;
