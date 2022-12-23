import React from "react";
import { Form, Button, Input } from 'antd';
import { useNavigate } from "react-router-dom";
import '../css/home.css';

const SignIn = ({ setUser }) => {
    const navigate = useNavigate();

    const handleClick = (values) => {
        setUser(values)
        navigate("/");
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
      style={{ width: '50%', marginLeft : '20%' }}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>


      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignIn;