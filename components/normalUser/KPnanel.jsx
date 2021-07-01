import React, { Component } from 'react';
class KPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{position:'relative', bottom:'0',backgroundColor:'rgb(0, 0, 0, 0.5',width:'auto'}}>
            <p style={{color:'white'}}>"Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution."</p>
            <p style={{color:'white'}}><b>— Albert Einstein</b> </p>
     </div>
         );
    }
}
 
export default KPanel;