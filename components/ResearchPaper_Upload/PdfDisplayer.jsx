import React, { Component } from 'react';
import {Document , Page , View, Text} from 'react-pdf/dist/esm/entry.parcel';
import samplePdf from '../../assets/media/Mahen/samplePdf.pdf'

export default class PdfDisplayer extends Component {
    constructor(props){
        super(props);
        this.state = {
            pdfDefault : samplePdf,
            pdfDefault2 : '' ,
            fileTypeValidator : false
        }

        this.renderPreview = this.renderPreview.bind(this)
    }
    renderPreview(event){
        var ext = event.target.files[0].name.split('.').pop().toLowerCase();
        if(ext == 'pdf'){
            this.setState({fileTypeValidator : false})
            this.setState({pdfDefault2:event.target.files[0]})
            this.props.fileChanger(event.target.files[0]);
        }
        else{
            event.target.value = null;
            this.setState({fileTypeValidator : true})
        }
        // let researchPaper = file.target.files[0];
        // let researchPaperVal = file.target.value;
        
        //this.setState({pdfDefault:pdfDefault2})
        //this.setState({membershipArray : memberships})
        // let fileReader = new FileReader();
        // fileReader.readAsDataURL(researchPaper);
        // fileReader.onload = () =>{
        //     const dataString = fileReader.result.replace('data:application/pdf;base64,', '')
        //     console.log('result : ' , dataString)
        //     const bytePdf = atob(fileReader.result);
        //     const byteStream = new Array(bytePdf.length);
        //     for(let i = 0 ; i < bytePdf.length ; i++){
        //         byteStream[i] = bytePdf.charCodeAt(i);
        //     } 
        //     let binaryArray = new Uint8Array(byteStream);
        //     this.setState({pdfDefault: new Blob([binaryArray] , {type: 'application/pdf'})});
        //     console.log(researchPaperVal);
        // }
        // fileReader.onerror = (err) =>{
        //     console.log('Error occurred : ' , err)
        // file={(this.state.pdfDefault2 == '') ? this.state.pdfDefault : this.state.pdfDefault2}
        // }
    }
    render() {
        return (
            <div>
                <div className="card p-3 border-success">
                    <div className="col-6 ">
                        <h5>Upload your research paper Here..</h5>
                        <div className="card p-3 border-success mb-2">
                            <Document  file={this.state.pdfDefault2}>
                                <Page height="250" pageNumber={1}/>
                            </Document>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <input type="file" name="researchPaper" onChange={(e) => this.renderPreview(e)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            {this.state.fileTypeValidator ? 
                            <div>
                                <span className="text-danger">Invalid file type</span><br/>
                                <span className="text-danger">Please use .pdf files only</span>
                            </div> : null
                        }
                            
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
