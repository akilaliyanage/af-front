import React, { Component } from 'react'
class Speaker extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        console.log(this.props.data);
        return (
            <div className="akila-speaker">
               <img data-testid="speaker-img" src={this.props.data.image} alt=""/>
               {this.props.colored?<canvas className="coveringCanvas"></canvas>:null}
                <div className="overlay">
                    <p>{this.props.data.name}</p>
                    <p>{this.props.data.des}</p>
               </div>
            </div>
         );
    }
}
 
export default Speaker;