import React, { Component } from 'react'
import '../../assets/css/Landing_Page/index.css'
import config from '../../config.json'
import { Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {AiOutlineUser, AiOutlineDown } from 'react-icons/ai'
import { Link } from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.fetchTopic = this.fetchTopic.bind(this)
        this.logout = this.logout.bind(this);
        this.state = {
            navbar_items: [],
            topic : '',
            show : true
         }
    }

    componentDidMount(){
        this.fetchTopic()

    }

    fetchTopic(){
        fetch(config.host + "/topic").then(res => res.json()).then(data => {
            this.setState({topic : data[0]["topic"]})
        }).catch(err =>{
            //alert(err)
        })
    }

    logout(){
        window.localStorage.setItem('username','')
        window.localStorage.setItem('token','')
        window.localStorage.setItem('id','')
        window.localStorage.setItem('proImg','')

        window.location.reload();
    }

    render() { 
        //const item = <li hidden={window.localStorage.getItem('token') == null?true : false} onClick={this.logout} style={{backgroundColor:'#1b4d72',color:'rgb(63, 65, 69)',padding:'10px', borderRadius:'10px'}} className="akila-menu-item"><a href=""><AiOutlineUser/>   hello {window.localStorage.getItem('username') + ' | SIGN-OUT'}</a></li>
        const drop = <div className="dropdown">
        <a><AiOutlineDown/> REGISTRATIONS</a>
            <div className="dropdown-content">
                <br />
                <Link to="/register"><p>Attendee Registration</p></Link>
                <Link to=""><p>researcher Registration</p></Link>
                <Link to=""><p>workshop presenter</p></Link>
            </div>
        </div>

        const login = <div className="dropdown">
        <a><AiOutlineDown/> LOGINS</a>
            <div className="dropdown-content">
                <br />
                <Link to="/login"><p>Attendee Login</p></Link>
                <Link to="/researcher-login"><p>researcher Login</p></Link>
                <Link to=""><p>workshop Login</p></Link>
                <Link to="/admin/login"><p>Admin Login</p></Link>
                <Link to="/edi-login"><p>Editor Login</p></Link>
                <Link to="/reviewLogin"><p>Reviewer Login</p></Link>
            </div>
        </div>

        const user = <div className="dropdown">
        <Avatar src={window.localStorage.getItem('proImg')} />
            <div className="dropdown-content">
                <br />
                <p>{window.localStorage.getItem('username')}</p>
                <Link><p onClick={this.logout}>Log Out</p></Link>
            </div>
        </div>
        return (
            <div className='akila-header' data-testid='nav-bar'>
                <nav className='akila-navbar'>
                    <Link to="/home"><a href="" className='akila-brand'>{this.state.topic}</a></Link>
                    <input type="checkbox" id="nav" className='akila-hidden' />
                    <label htmlFor="nav" className='akila-nav-toggle'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>

                    <div className='akila-wrapper'>
                        <ul className='akila-menu'>
                            {this.props.items.map(item => {
                                return (
                                    <li data-testid="nav-list" className="akila-menu-item" key={item._id}><a href={item.url}>{item.name}</a></li>
                                );
                            })}
                             <li hidden={this.state.show ? false : true} 
                             className="akila-menu-item"> 
                                {window.location.href.includes('/home') ? drop : null}
                             </li>
                             
                            <li className="akila-menu-item">
                                {login}
                            </li>

                            <li onClick={this.logout} className="akila-menu-item">
                                {user}
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
         );
    }
}
 
export default NavBar;