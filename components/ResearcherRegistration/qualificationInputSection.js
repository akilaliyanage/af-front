import React, { Component} from 'react'

class QualificationSection extends Component {
    constructor(props){
        super(props)
        this.state = {
            UniList : [],
            sortedUniList : [],
        }
    }

    componentDidMount(){
        fetch('http://universities.hipolabs.com/search?name=' , {
            method: 'GET'
        })
        .then(response => response.json().
        then(data => {
            this.setState({UniList : data})
            this.setState({sortedUniList : UniList})
        } 
        ))
    }

    render(){
        return(
            <React.Fragment>
                <div className='qualification-container'>
                                <div className='form-row-container qualification-row'>
                                    <div className='form-Element-container'>
                                        <input type='text' className='Researcher-form-input-long' id='degreeName' name='degreeName' onChange={this.props.setQualificationExtraOnChange}/>
                                        <label>Name of the Degree</label>
                                    </div>
                                </div>
                                <div className='form-row-container qualification-row' data-testid='qualification-container'>
                                    <div className='form-Element-container'>
                                        <input type='text' className='Researcher-form-input-long' list='uniList' id='UniName' name='UniName' onChange={this.props.setQualificationExtraOnChange}/>
                                        <datalist id="uniList">
                                            {this.state.UniList.map(uni => (
                                                <option key={uni.name} value={uni.name}>
                                                    {uni.name}
                                                </option>
                                            ))}
                                            {/* {this.props.UniList.map(uni => (
                                                <option key={uni.name} value={uni.name}>
                                                    {uni.name}
                                                </option>
                                            ))} */}
                                        </datalist>
                                        <label>Name of the University</label>
                                    </div>
                                    <div className='form-Element-container'>
                                        <select className='Researcher-form-input-address-extras' id='qualiYear' name='qualiYear' onChange={this.props.setQualificationExtraOnChange}>
                                                {/* {this.state.yearList.map(year =>(
                                                    <option key={year} value={year}>
                                                        {year}
                                                    </option>
                                                ))} */}
                                                {this.props.yearList.map(year =>(
                                                    <option key={year} value={year}>
                                                        {year}
                                                    </option>
                                                ))}
                                        </select>
                                        <label>Year</label>
                                    </div>
                                </div>
                            </div>
            </React.Fragment>
        );
    }
}


export default QualificationSection