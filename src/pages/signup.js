import React from "react";
import '../css/home.css';
import {
    Button,
    Form,
    Input,
    Select,
  } from 'antd';
  import { useNavigate } from "react-router-dom";
  
  const { Option } = Select;
  
  
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  
  const SignUp = ({ adminState, setUser } ) => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
  
    const onFinish = (values) => {
      setUser(values)
      navigate("/");
    };
  
  
  
  
    return (
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          prefix: '86',
        }}
        style={{ width: '50%', marginLeft : '20%' }}
        scrollToFirstError
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
  
        <Form.Item
          name="username"
          label="User Name"
          tooltip="What do you want others to call you?"
          rules={[{ required: true, message: 'Please input your user name!', whitespace: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: 'Please select gender!' }]}
        >
          <Select placeholder="select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>
        { adminState &&
          <Form.Item
            name="userType"
            label="User Type"
            rules={[{ required: true, message: 'Please select user type!' }]}
          >
            <Select placeholder="select your gender">
              <Option value="male">Editor</Option>
              <Option value="female">Admin</Option>
            </Select>
          </Form.Item>
        }
  
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            { adminState ? 'Create User' : 'Sign Up' }
          </Button>
        </Form.Item>
      </Form>
    );
  };
  
export default SignUp;