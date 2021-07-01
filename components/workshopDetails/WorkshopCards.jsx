import React, { Component } from 'react';
import SingleCard from './SingleCard'

import config from '../../config.json'

class WorkshopCards extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            workshops:[]
         }
    }

    componentDidMount(){
        this.fetchItems(); 
    }

    fetchItems(){
        fetch(config.host + '/wShop/approved').then(res => res.json()).then(data => this.setState({workshops:data})).catch(err => console.log(err))
    }
    
    render() {
        return (
            <div class="nethsara-workshopCards">

                <div className="nethsara-grid-container">
                    {this.state.workshops.map((workshop) => {
                        return(
                            <SingleCard item={workshop}/>
                        
                        );
                    })}
                    {/* <SingleCard url="https://st.depositphotos.com/1056393/5008/i/600/depositphotos_50088039-stock-photo-speaker-at-business-convention-and.jpg"/>
                    <SingleCard url="https://st.depositphotos.com/1056393/5008/i/600/depositphotos_50088039-stock-photo-speaker-at-business-convention-and.jpg"/>
                    <SingleCard url="https://st.depositphotos.com/1056393/5008/i/600/depositphotos_50088039-stock-photo-speaker-at-business-convention-and.jpg"/>
                 */}
                </div>
            </div>
        );
    }
}

export default WorkshopCards;