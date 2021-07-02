import React, { Component } from 'react';
import { Col, Row , Card, Alert, Badge} from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../landing_page/NavBar';
import config from '../../config.json'
class EditorTem extends Component {
    constructor(props) {
        super(props);
        this.fetchTopic = this.fetchTopic.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.handSubmit = this.handSubmit.bind(this)
        this.fetchEventDate = this.fetchEventDate.bind(this)
        this.handSubmitDate = this.handSubmitDate.bind(this)
        this.handSubmitAbout = this.handSubmitAbout.bind(this)
        this.state = { 
            topic:'',
            venue : '',
            subtop : '',
            datetime : '',
            topicPen : 0,
            top: '',
            sub : '',
            ven : '',
            date : '',
            eDate :'',
            evDate : '',
            datePen : 0,
            about : '',
            aboutPen : 0,
            newsList : [],



         }
    }
    componentDidMount(){
        //fetch the current topic
        this.fetchTopic();
        this.fetchEventDate()

        fetch(config.host + "/edi-noti/pending-about").then(res => res.json()).then(data => {
            this.setState({aboutPen : data.len})
            console.log(data.len)
        }).catch(err =>{
            console.log(err)
        })

        fetch(config.host + "/edi-noti/pending-date").then(res => res.json()).then(data => {
            this.setState({datePen : data.len})
            console.log(data.len)
        }).catch(err =>{
            console.log(err)
        })

        fetch(config.host + "/edi-noti/pending-topic").then(res => res.json()).then(data => {
            this.setState({topicPen : data.len})
            console.log(data.len)
        }).catch(err =>{
            console.log(err)
        })

        fetch(config.host + "/news").then(res => res.json()).then(data => {
            this.setState({newsList : data})
            //console.log(data.len)
        }).catch(err =>{
            console.log(err)
        })

    }

    fetchTopic(){
        fetch(config.host + "/topic").then(res => res.json()).then(data => {
            this.setState({topic : data[0]["topic"],venue : data[0]['venue'], subtop : data[0]['SubTopic'], datetime : data[0]['datemonth']})
        }).catch(err =>{
            //alert(err)
            console.log(err)
        })

    }

    handleChange(e){
        this.setState({[e.target.name] : e.target.value});
        console.log([e.target.name] , e.target.value)
    }

    handSubmit(){
        const data = {
            topic : this.state.top,
            SubTopic : this.state.sub,
            datemonth : this.state.date,
            venue : this.state.ven
        }

        console.log(data)

        fetch(config.host + '/topic/sendToAdmin',{
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body : JSON.stringify(data)
        }).then(res => res.json()).then(data =>{
            console.log(data.message)

            if(data.message == 'ok'){
                this.setState({noti : true})
            }
            
        }).catch(err =>{
            console.log(err)
        })

    }

    fetchEventDate(){
        fetch(config.host + "/event-date").then(res => res.json()).then(data =>{
            console.log(data)
            this.setState({eDate : data['date']})
        }).catch(err =>{
            //alert(err)
            console.log(err)
        })

    }

    handSubmitDate(e){
        console.log(this.state.evDate)

        const data = {
            date : this.state.evDate
        }

        console.log(data)

        fetch(config.host + '/event-date/sendToAdmin',{
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body : JSON.stringify(data)
        }).then(res => res.json()).then(data =>{
            console.log(data.message)

            if(data.message == 'ok'){
                this.setState({noti : true})
            }
            
        }).catch(err =>{
            console.log(err)
        })
    }

    handSubmitAbout(){

        const data = {
            des : this.state.about
        }

        console.log(data)

        fetch(config.host + '/about/sendToAdmin',{
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body : JSON.stringify(data)
        }).then(res => res.json()).then(data =>{
            console.log(data.message)

            if(data.message == 'ok'){
                this.setState({noti : true})
            }
            
        }).catch(err =>{
            console.log(err)
        })
    }

    render() { 
        return ( 
            <div style={{overflowY:'hidden'}}>
                <div className="edi-nav">
                    <NavBar items={["test"]}/>
                </div>

                <div className="edi-div-1">
                <div className="row">
                    <div className="col" style={{textAlign:'center'}}>
                        <div class="alert alert-primary" style={{borderRadius:'0px', textAlign:'center', marginBottom:'0px'}} role="alert">
                            MAIN HEADING <br /> YOU HAVE <span class="badge bg-danger">{this.state.topicPen}</span> PENDING ACTIONS
                        </div>
                        <div className="p-5 py-0">
                        <h4 className="p-3">
                            CURRENT TOPIC : 
                            <small class="text-muted"> {this.state.topic}</small>
                            </h4>

                        
                            <h4 className="p-3">
                            CURRENT SUB-TOPIC : 
                            <small class="text-muted"> {this.state.subtop}</small>
                            </h4>

                        <h4 className="p-3">
                        CURRENT VENUE : 
                        <small class="text-muted"> {this.state.venue}</small>
                        </h4>

                        <h4 className="p-3">
                        CURRENT DATE : 
                        <small class="text-muted"> {this.state.datetime}</small>
                        </h4>

                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon3">New Topic</span>
                            <input name="top" onChange={this.handleChange} type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                        </div>

                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon3">New Sub-topic</span>
                            <input name="sub" onChange={this.handleChange} type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                        </div>

                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon3">New Venue</span>
                            <input name="ven" onChange={this.handleChange} type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                        </div>

                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon3">New Date</span>
                            <input placeholder="10/20 Dec" name="date" onChange={this.handleChange}  type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                        </div>
                        <button onClick={this.handSubmit} name="date" onChange={this.handleChange} type="button" class="btn btn-primary" style={{width:'100%'}}>SUBMIT</button>
                        </div>
                    </div>
                    

                    <div className="col" style={{textAlign:'center'}}>
                        <div class="alert alert-success" style={{borderRadius:'0px', textAlign:'center', marginBottom:'0px'}} role="alert">
                            EVENT DATE <br /> YOU HAVE <span class="badge bg-danger">{this.state.datePen}</span> PENDING ACTIONS
                        </div>
                        <div className="p-5 py-0">
                        <h4 className="p-3">
                            CURRENT DATE : 
                            <small class="text-muted"> {this.state.eDate}</small>
                            </h4>

                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon3">New Date</span>
                            <input name="evDate" onChange={this.handleChange} type="datetime-local" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                        </div>

                        <button onClick={this.handSubmitDate} name="date" type="button" class="btn btn-primary" style={{width:'100%'}}>SUBMIT</button>
                        </div>


                        <hr />

                        <div style={{marginTop:'1.3rem'}}>
                                <div class="alert alert-info" style={{borderRadius:'0px', textAlign:'center', marginBottom:'0px'}} role="alert">
                                    ABOUT <br /> YOU HAVE <span class="badge bg-danger">{this.state.aboutPen}</span> PENDING ACTIONS
                                </div>
                                <div className="p-5 py-0">
                                
                                    <div class="input-group mb-3 mt-3">
                                        <span class="input-group-text">New about</span>
                                        <textarea rows="8" name="about" onChange={this.handleChange} class="form-control" aria-label="With textarea"></textarea>
                                    </div>

                                <button onClick={this.handSubmitAbout} name="date" type="button" class="btn btn-primary" style={{width:'100%'}}>SUBMIT</button>
                                </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                    <div class="alert alert-warning" style={{borderRadius:'0px', textAlign:'center', marginBottom:'0px'}} role="alert">
                            NEWS <br /> YOU HAVE <span class="badge bg-danger">{this.state.aboutPen}</span> PENDING ACTIONS
                        </div>
                        <div className="col-6 px-5" style={{maxHeight:'500px',overflowY:'scroll'}}>
                       
                        <h4 className="p-3">
                            CURRENT NEWS ITEMS 
                            </h4>

                            <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">Event Date</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">URL pattern</th>
                                    <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody >
                                   {this.state.newsList.map(item =>{
                                       return(
                                        <tr>
                                        <td>{new Date(item.date).toDateString()}</td>
                                        <td>{item.des}</td>
                                        <td>{item.url}</td>
                                        <td>
                                        <td>
                                            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                                <button type="button" class="btn btn-danger">DELETE</button>
                                                <button type="button" class="btn btn-success">MAKE DE-ACTIVATE</button>
                                            </div>
                                        </td>
                                        </td>
                                        </tr>
                                       )
                                   })}
                                </tbody>
                            </table>
                    </div>

                    <div className="col-6">
                    <h4 className="p-3">
                            ADD NEW NEWS ITEM
                            </h4>
                     <div className="mt-5">
                     <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon3">New Date</span>
                            <input name="evDate" onChange={this.handleChange} type="datetime-local" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                        </div>

                        <div class="input-group mb-3 mt-3">
                                        <span class="input-group-text">New Description</span>
                                        <textarea rows="5" name="about" onChange={this.handleChange} class="form-control" aria-label="With textarea"></textarea>
                        </div>

                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon3">New URL pattern</span>
                            <input name="ven" onChange={this.handleChange} type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                        </div>

                        <button onClick={this.handSubmit} name="date" onChange={this.handleChange} type="button" class="btn btn-primary" style={{width:'100%'}}>SUBMIT</button>
                     </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
         );
    }
}
 
export default EditorTem;