import React, { Component } from 'react'
import { Modal, Button } from 'antd';

class PreviewModal extends Component {

    constructor(props){
        super(props)
        this.state={
            visible:'false'
        }
    }

    showModal = () => {
        this.setState({visible : 'true'})
    };
    
    handleOk = () => {
        this.setState({visible : 'false'})
    };
    
    handleCancel = () => {
        this.setState({visible : 'false'})
    };

    render() {
        return (
            <div>
                <Modal title="Basic Modal" visible={this.state.visible} onOk={handleOk} onCancel={handleCancel}>
                    
                    <h3>Workshop Title</h3>
                    <h6>date</h6>
                    <p>decsription</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        )
    }
}

export default PreviewModal
