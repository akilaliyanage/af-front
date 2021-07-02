import React,{useEffect,useState} from "react";
import '../../assets/css/admin/admin.css'
import AdminNavbar from "./AdminNavBar";
import axios from "axios";
import {useHistory} from "react-router-dom";
import config from "../../config.json";

function AddReviewer(){

    const  history = useHistory();

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [picture, setPicture] = useState();
    const [password, setPassword] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();
    const [passwordToggle, setToggle] = useState("password");


    useEffect(()=> {
        document.body.style.backgroundColor = "#282c34"
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

    const AddReviewer = (e) => {
        e.preventDefault();

        const  formData = new FormData();
        formData.append("name",name);
        formData.append("username",username);
        formData.append("password",password);
        formData.append("picture",picture);

        const url = config.host+"/reviewer/add";
        axios.post(url,formData).then((res) => {
            if(res.data.status === 200){
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

            <div className="uditha-add-reviewer-form">
                <div className="uditha-avatarInput">
                    <div className="form-group">
                        <input type="file" className="uditha-file-control"  onChange={onSelectFile} name="picture" id="exampleFormControlFile1"/>
                    </div>
                </div>

                <div className="uditha-old-avatar-Preview">
                    <img style={{borderRadius:'50%'}} src="https://static.vecteezy.com/system/resources/previews/000/550/731/non_2x/user-icon-vector.jpg" width="200" height="200" alt="avatar"/>
                </div>

                <div className="uditha-avatar-Preview">
                    {selectedFile &&  <img style={{borderRadius:'50%'}} src={preview} width="200" height="200" alt="avatar"/>}
                </div>

                <h2 style={{color:"white"}}>Add new Reviewer</h2>

            <form className="uditha-form-control" onSubmit={AddReviewer}>

                        <label className="description" htmlFor="element_1">Name </label>
                        <div>
                            <input required={true} style={{color:"black"}} type="text"  onChange={(e) => {setName(e.target.value)}} className="uditha-text-control"/>
                        </div>

                        <label className="description" htmlFor="element_2">Username </label>
                        <div>
                            <input required={true} style={{color:"black"}} type="text" onChange={(e) => {setUsername(e.target.value)}} className="uditha-text-control"/>
                        </div>


                        <label className="description" htmlFor="element_3">Access Key </label>
                        <div>
                            <input required={true} style={{color:"black"}} type={passwordToggle}  onChange={(e) => {setPassword(e.target.value)}} className="uditha-text-control"/>
                        </div>

                         <input type="checkBox" onClick={toggleVisible}/>
                <label>Show Access Key &nbsp; </label>


                        <input  className="uditha-add-button" type="submit"  value="Submit"/>


            </form>
            </div>
        </div>



    )
}

export default AddReviewer;
