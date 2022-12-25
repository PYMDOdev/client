import React from "react";
import { Button } from 'antd';
import { Container, Row, Col } from "react-bootstrap";
import '../css/home.css';
import { useNavigate, useLocation } from "react-router-dom";
import { DeleteBlog } from "../utils/api";

const DeleteAuthorBlog = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { blogId, token } = state ? state : { blogId: "", token: ""};
    const handleClick = async () => {
        const state = await DeleteBlog({id: blogId, token: token });
        if (state) {
          navigate("/my-blogs");
        }
      }
    return state ? (
        <Container>
            <div className="containerDesign">
                <Row className="justify-content-center">
                    <Col xs={12} md={6}>
                        <div style={{ marginLeft: '20%', width: '60%' }} >
                            <h1> Delete Blog </h1>
                            <br></br>
                            <p> Are you sure to delete blog ? </p>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} md={6}>
                        <Button type="default" onClick={() => { navigate('/my-blogs'); }}> No</Button>
                    </Col>
                    <Col xs={12} md={6}>
                        <Button type="primary" onClick={handleClick}> Yes</Button>
                    </Col>
                </Row>

            </div>
        </Container>
    )
    : 
    (
        <Container>
            <div className="containerDesign">
                <Row className="justify-content-center">
                    <Col xs={12} md={6}>
                            <p> User Not Found </p>
                    </Col>
                </Row>
            </div>
        </Container>
  );
};

export default DeleteAuthorBlog;