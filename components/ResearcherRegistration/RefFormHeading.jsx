import React , {Component} from 'react'

class RegFormHeading extends Component {

    constructor(props){
        super(props);
        this.state= {}
    }

    render(){
        return (
            <section>
                <div className='regHeading'>
                    <h1>{this.props.title}</h1>
                </div>
            </section>
        );
    }
}

export default RegFormHeading