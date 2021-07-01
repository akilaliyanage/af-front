import React, { Component } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
class NotiErr extends Component {

    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="notiErr">
                    <AiFillCloseCircle style={{verticalAlign:'sub',fontSize:'20px'}}/> {this.props.msg}
            </div>
         );
    }
}
 
export default NotiErr;