import React, { Component } from 'react';
import { AiFillDownCircle } from 'react-icons/ai';
class Noti extends Component {

    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="noti">
                    <AiFillDownCircle style={{verticalAlign:'sub',fontSize:'20px'}}/> Task compleated successfully, Please wait we will redirect you to the page
            </div>
         );
    }
}
 
export default Noti;