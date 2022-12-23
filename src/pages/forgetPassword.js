import React from "react";
import { Form, Button, Input } from 'antd';
import { useNavigate } from "react-router-dom";
import '../css/home.css';

const ForgetPassword = () => {
    const navigate = useNavigate();

    const handleClick = (values) => {
        alert("Your password is sended to your email!");
        navigate("/");
    }
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={handleClick}
      //onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{ width: '50%', marginLeft : '25%' }}
    >
    <Form.Item
      name="email"
      label="E-mail"
      rules={[
        {
          type: 'email',
          message: 'The input is not valid E-mail!',
        },
        {
          required: true,
          message: 'Please input your E-mail!',
        },
      ]}
    >
      <Input />
    </Form.Item>


      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Send mail
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ForgetPassword;