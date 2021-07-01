import React , {Component} from 'react'

class PublicationComponent extends Component{

    constructor(props){
        super(props)
        this.state ={}
    }

    render(){
        return(
            <React.Fragment>
                <div className='qualification-container' data-testid = 'qualification-container'>
                                <div className='form-row-container qualification-row'>
                                    <div className='form-Element-container'>
                                        <input type='text' className='Researcher-form-input-long' id='publication' name='publication' onChange={this.props.setPublicationsExtraOnChange}/>
                                        <label>Publication</label>
                                    </div>
                                </div>
                                <div className='form-row-container qualification-row'>
                                    <div className='form-Element-container'>
                                        <input type='text' className='Researcher-form-input-long' id='source' name='source' onChange={this.props.setPublicationsExtraOnChange}/>
                                        <label>Conference/Journal/Book</label>
                                    </div>
                                    <div className='form-Element-container'>
                                        <select className='Researcher-form-input-address-extras' id='pubYear' name='pubYear' onChange={this.props.setPublicationsExtraOnChange}>
                                                {this.props.yearList.map(year =>(
                                                    <option key={year} value={year}>
                                                        {year}
                                                    </option>
                                                ))}
                                        </select>
                                        <label>Year</label>
                                    </div>
                                </div>
                                <div className='form-row-container qualification-row'>
                                    <div className='form-Element-container'>
                                        <input type='text' className='Researcher-form-input-long' id='pubURL' name='pubURL' onChange={this.props.setPublicationsExtraOnChange}/>
                                        <label>URL</label>
                                    </div>
                                </div>
                        </div>
            </React.Fragment>
        );
    }

}

export default PublicationComponent