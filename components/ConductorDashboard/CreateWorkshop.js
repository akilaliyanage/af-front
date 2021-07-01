import React, { Component } from 'react'
import './../../assets/css/WorkshopDetails/WorkDashHome.css'
import './../../assets/css/WorkshopDetails/fileupload.css'

import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

import config from '../../config.json'
const { Dragger } = Upload;

const props = {
    name: 'image',
    multiple: false,
    action: config.host + '/image',
    onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
          console.log(info.file.response.Location)
          window.localStorage.setItem('linkToFile',info.file.response.Location)
  
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

class CreateWorkshop extends Component {

    constructor(props){
        super(props);
        this.state = {
            workshopTitle:"",
            eventDate:"",
            description:"",
            conductor:"",
            file:localStorage.getItem('linkToFile'),
            loginID:localStorage.getItem('wc-id')
        }
        
        console.log(this.state.file)

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        });
        console.log([event.target.name],event.target.value)
    }


    handleSubmit(e){
        
        e.preventDefault();

        const data = {
            title : this.state.workshopTitle,
            eventDate: this.state.eventDate,
            conductor : this.state.loginID,
            description: this.state.description,
            document:this.state.file

            // title : "_test_ title",
            // eventDate: "22/06/2021",
            // conductor : this.state.loginID,
            // desciption: "testing 1234567809ghjfdb"
        }
        console.log(data)

        fetch(config.host + '/wShop/create',{
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(data)
        }).then(res => res.json()).then(data =>{
            
            alert("Workshop Created Successfully!")
            
        }).catch(err =>{
            console.log(err)
        })

        window.location = `/condDash`
    }

    render() {
        return (
            <div>
                <div className="nt-dcard-cont">
                    <div className="nt-approvedcard">

                        <h2 style={{marginTop:"3%", color:"black"}}>Create a Workshop</h2> 

                        <form action="" method="POST" style={{marginLeft:"10%"}}>
                            <table style={{width:"80%", marginTop:"4%"}}>
                                <tbody>
                                    <tr>
                                        <td>
                                            Workshop Title :
                                        </td>
                                        <td>
                                            <input type="text" name="workshopTitle" className="nt-cw-input" 
                                            value={this.state.workshopTitle} 
                                            onChange={this.handleChange}/>
                                            
                                        </td>
                                    </tr>
                                    <br />
                                    <tr >
                                        <td>
                                            Workshop date :
                                        </td>
                                        <td>
                                            <input type="date" name="eventDate" className="nt-cw-input" 
                                            placeholder="" value={this.state.eventDate} 
                                            onChange={this.handleChange}/>
                                        </td>
                                    </tr>
                                    <br />
                                    <tr >
                                        <td>
                                            Workshop Description :
                                        </td>
                                        <td>
                                            <textarea type="text" style={{border: "2px solid #000000dc;"}} name="description" 
                                            className="nt-cw-input" 
                                            placeholder="" value={this.state.description} 
                                            onChange={this.handleChange}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Workshop Resources :
                                        </td>
                                        <td>
                                            {/* <div class="file-upload">
                                                <div class="image-upload-wrap">
                                                    <input class="file-upload-input" type='file' onchange={this.readURL} value={this.state.eventDate} accept=".pdf, .doc, .docx, .zip" multiple/>
                                                    <div class="drag-text">
                                                        <h3 class="d-h3">Drag and drop or Click here to add</h3>
                                                    </div>
                                                </div>
                                                <div class="file-upload-content">
                                                    <img class="file-upload-image" src="#" alt="your image" />
                                                    <div class="image-title-wrap">
                                                        <button type="button" onclick={this.removeUpload} class="remove-image">Remove <span class="image-title">Uploaded Image</span></button>
                                                    </div>
                                                </div>
                                                <button class="file-upload-btn" type="button" onclick="$('.file-upload-input').trigger( 'click' )">Add Resources</button>
                                            </div> */}
                                            {/* <input className="w-file-upload" type='file' 
                                            accept=".pdf, .doc, .docx, .zip" multiple/> */}

                                            <Dragger {...props}>
                                                <p className="ant-upload-drag-icon">
                                                <InboxOutlined />
                                                </p>
                                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                                <p className="ant-upload-hint">
                                                    You are only allowed to upload a single PDF.
                                                </p>
                                            </Dragger>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <button type="submit" className="nl-sign-form-btn" style={{width:"50%"}} 
                            onClick={this.handleSubmit}>Create Workshop</button>
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default CreateWorkshop
