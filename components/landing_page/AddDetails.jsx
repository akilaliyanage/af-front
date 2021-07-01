import { Col, Row, Alert, Button } from 'antd';
import React, { Component } from 'react';
import { AiFillCheckSquare, AiOutlineDollarCircle, AiOutlineUserAdd ,EditOutlined} from "react-icons/ai";
import { Link } from 'react-router-dom';


class AddDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
               <div>
                <div className="akila-container">
                  <Row style={{margin : '50px'}}>
                    <Col span={8}>
                        <Link to="/Workshops" style={{cursor:'grabbing', textDecoration:'none'}}>
                        <Alert
                          message="Explore Workshops"
                          description="Access to the Workshops registerd in the conference"
                          type="success"
                          icon={<EditOutlined />}
                        />
                        </Link>
                    </Col>

                    <Col span={8}>
                    <Link to="/" style={{cursor:'grabbing', textDecoration:'none'}}>
                      <Alert
                        message="Explore Research Details"
                        description="Access to the Conference resources"
                        type="info"
                        icon={""}
                      />
                      </Link>
                    </Col>

                    <Col span={8}>
                    <Link to="/payment" style={{cursor:'grabbing', textDecoration:'none'}}>
                    <Alert
                        message="Payment Portal"
                        description="Inbuild payment portal for all your payment needs "
                        type="error"
                        icon={""}
                      />
                       </Link>
                    </Col>
                  </Row>
                  </div>
               </div>
            </div>
         );
    }
}
 
export default AddDetails;