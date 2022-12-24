import React from "react";
import { Form, Button, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import '../css/home.css';
import { Login } from "../utils/api";

const SignIn = ({ setUserData }) => {
  const navigate = useNavigate();

  const handleClick = async (values) => {
    const state = await Login(values);
    if (state) {
      setUserData(state);
      navigate("/");
    }
  }
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={handleClick}
      //onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{ width: '50%', marginLeft: '35%' }}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item style={{ textAlignLast: 'right'}}>
        <Button type="link" onClick={() => { navigate('/forget-password'); }}>Forget Password</Button>
      </Form.Item>

      <Form.Item>
        <Button style={{ width: '100%'}} type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        <div  style={{ textAlignLast: 'right'}}>
          Or<Button type="link" onClick={() => { navigate('/sign-up'); }}> register now!</Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default SignIn;