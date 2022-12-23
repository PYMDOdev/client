import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../css/home.css';

const Home = ({ user }) => {
    return (
        <Container>
            <div className="containerDesign">
                <Row className="justify-content-center">
                    <Col xs={12} md={6}>
                        {
                            user ? 
                            <p> { user.email }</p>
                            :
                            <p> User Not Found </p>
                        }
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Home;