import React from "react";
import { Button, Divider, Space } from 'antd';
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Header = ({ user, setUser }) => {
    const navigate = useNavigate();
    const SignOutClick = () => {
        setUser(null);
        navigate("/");
    }
    const homeClick = () => {
        navigate("/");
    }
    const SignInClick = () => {
        navigate("/signin");
    }
    const SignUpClick = () => {
        navigate("/signup");
    }
    const ResetPasswordClick = () => {
        navigate("/resetPassword");
    }
    const loggedNav = () => {
        return (
            <>
                <Col xs={12} md={6}>
                    <Button type="default" onClick={ResetPasswordClick} >Reset Password</Button>
                </Col>
                <Col xs={12} md={6}>
                    <Button type="primary" onClick={SignOutClick} >Log Out</Button>
                </Col>
            </>
        );
    }
    const defaultNav = () => {
        return (
            <>
                <Col xs={12} md={6}>
                    <Button type="default" onClick={homeClick} >Home</Button>
                </Col>
                <Col xs={12} md={6}>
                    <Button type="default" onClick={SignInClick} >Log In</Button>
                </Col>
                <Col xs={12} md={6}>
                    <Button type="primary" onClick={SignUpClick} >Log Up</Button>
                </Col>
            </>
        );
    }
    return (
        <Container>
            <div className="containerDesign">
                <Row style={{ display: 'flex', marginTop: '20px' }}>
                    <Space split={<Divider type="vertical" />}>
                        <Col xs={12} md={6}>
                            <Button type="default" onClick={homeClick} >Home</Button>
                        </Col>
                        { user ? 
                            loggedNav()
                            :
                            defaultNav()
                        }
                    </Space>
                </Row>
            </div>
        </Container>
    );
};

export default Header;