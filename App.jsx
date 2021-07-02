import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Template from './components/landing_page/Template'
import 'antd/dist/antd.css'
import AdminDashboard from "./components/Admin/Base";
import WorkshopTemplate from './components/workshopDetails/WorkshopTemplate'
import AddReviewer from "./components/Admin/AddReviewer";
import WorkshopDashboard from './components/workshop_dashboard/WorkshpDTemp'
import ResearcherRegistration from './components/ResearcherRegistration/Registration'
import ReviewerLogin from './components/workshop_dashboard/ReviewLogin'
import UpdateReviewer from "./components/Admin/UpdateReviewer";
import ReviewLogin from './components/workshop_dashboard/ReviewLogin'
import WorkCordinaorReg from './components/workshopDetails/WorkCordinatorReg'
import PayTemplate from './components/PaymentPage/PayTemplate'
import ConductorDTemp from './components/ConductorDashboard/ConductorDTemp'
import UserReg from './components/normalUser/UserReg'
import UserSkeliton from './components/normalUser/UserSkeliton'
import AdminApprove from "./components/Admin/AdminApprove";
import EditorTem from './components/Editor_admin/EditorTem'
import EventLimitUpdate from "./components/Admin/EventManageContent/EventLimitUpdate";
import ResearchPaperUploadeComponant from "./components/ResearchPaper_Upload/ResearchPaperUploadeComponent";
import UserRegForm from './components/normalUser/UserRegForm';
import EditorTemplate from './components/Editor_admin/EditorTemplate';
import EventDate from './components/Editor_admin/EventDate';
import EventAbout from './components/Editor_admin/EventAbout';
import EventNews from './components/Editor_admin/EventNews';
import KeyNote from './components/Editor_admin/KeyNote';
import LoginComponant from './components/ResearcherLogin/LoginComponant';
import Report from "./components/Admin/Report/Report";
import AdminLogin from "./components/Admin/AdminLogin";
import EditorLogin from "./components/EditorLogin/EditorLogin";
import ViewResearcPapers from "./components/Admin/ViewResearchPapers";
import ViewParticipation from "./components/Admin/ViewParticipation";


export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        return (
            <Router>
                <Switch>
                <Route exact path="/">
                       <Redirect to="/home"/>
                    </Route>
                    <Route exact path="/home">
                        <Template />
                    </Route>
                    <Route exact path="/admin">
                        <AdminDashboard />
                    </Route>
                    <Route exact path="/Workshops">
                        <WorkshopTemplate />
                    </Route>
                    <Route exact path="/add-reviewer">
                        <AddReviewer/>
                    </Route>
                    <Route exact path="/workshopDash">
                        <WorkshopDashboard/>
                    </Route>
                    <Route exact path="/ResearcherRegistration">
                        <ResearcherRegistration/>
                    </Route>
                    <Route exact path="/reviewLogin">
                        <ReviewLogin/>
                    </Route>
                    <Route exact path="/workCordinaorReg">
                        <WorkCordinaorReg/>
                    </Route>
                    <Route exact path="/payment">
                        <PayTemplate/>
                    </Route>
                    <Route exact path="/login">
                        <UserSkeliton/>
                    </Route>

                    <Route exact path="/register">
                        <UserRegForm/>
                    </Route>

                    <Route exact path="/condDash">
                        <ConductorDTemp/>
                    </Route>

                    <Route exact path="/approve">
                        <AdminApprove/>
                    </Route>

                    <Route exact path="/edi-admin">
                        <EditorTemplate/>
                    </Route>

                    <Route exact path="/edi-admin/date">
                        <EventDate/>
                    </Route>

                    <Route exact path="/edi-admin/about">
                        <EventAbout/>
                    </Route>

                    <Route exact path="/edi-admin/news">
                        <EventNews/>
                    </Route>

                    <Route exact path="/edi-admin/keynote">
                        <KeyNote/>
                    </Route>

                    <Route exact path="/Add-ResearchPaper">
                        <ResearchPaperUploadeComponant/>
                    </Route>

                    <Route exact path="/researcher-login">
                        <LoginComponant/>
                    </Route>

                    <Route exact path="/report">
                        <Report/>
                    </Route>

                    <Route exact path="/edi-login">
                        <EditorLogin/>
                    </Route>

                    <Route exact path="/admin/login">
                        <AdminLogin/>

                    </Route>

                    <Route exact path="/admin/view-research-papers">
                        <ViewResearcPapers/>
                    </Route>

                    <Route exact path="/admin/view-participation">
                        <ViewParticipation/>
                    </Route>

                    <Route path = "/update-reviewer/:ID" exact component = {UpdateReviewer}/>

                    <Route path = "/manage-workshop" exact component = {EventLimitUpdate}/>


                </Switch>
            </Router>
        );
    }
}