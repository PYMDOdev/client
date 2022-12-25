import React from "react";
import { Form, Button, Input } from 'antd';
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { UpdateUser } from "../utils/api";
import '../css/home.css';

const ResetPassword = ({ userData }) => {
    const navigate = useNavigate();

    const handleClick = async (values) => {
        const user = userData.user;
        user.password = values.password;
        delete user._id;
        delete user.__v;
        const state = await UpdateUser({ token: userData.token, username: userData.user.username, values: user });
        if (state){
            navigate("/" );
        }
    }
  return userData ? (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={handleClick}
      //onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{ width: '50%', marginLeft : '20%' }}
    >
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>


      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Reset Password
        </Button>
      </Form.Item>
    </Form>
  ) : 
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

export default ResetPassword;