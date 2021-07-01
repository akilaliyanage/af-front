import React, { Component } from 'react';
class MoreKeynote extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            gSpeak : [1,2,3,4,5]
         }
    }
    render() { 
        return ( 
            <div>
                 <h1>Additional <span>speakers</span></h1>
               <div className="akila-scroll">
               <table>
                    <tr>
                        <td>
                        </td>
                        {this.state.gSpeak.map(item => {
                            return(
                                <td key={item._id}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKd2drefzPMEho_WG9Wk14cd5RnKKsQkKA_A&usqp=CAU" alt="" />
                                <figcaption>
                                    <div class="fig-title">Fern.</div>
                                    <div class="fig-author">by Annie Spratt</div>
                                </figcaption>
                        </td>
                            )
                        })}
                    </tr>
                </table>
               </div>
            </div>
         );
    }
}
 
export default MoreKeynote;