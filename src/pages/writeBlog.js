import React from "react";
import '../css/home.css';
import {
    Button,
    Form,
    Input,
} from 'antd';
import { useNavigate } from "react-router-dom";


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

const WriteBlog = ({ adminState, setUser }) => {
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
            style={{ width: '50%', marginLeft: '20%' }}
            scrollToFirstError
        >

            <Form.Item
                name="title"
                label="Title"
                tooltip="Blog Title?"
                rules={[{ required: true, message: 'Please input blog title!', whitespace: true }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="content"
                label="Content"
                tooltip="Blog Content?"
                rules={[{ required: true, message: 'Please input blog content!',  whitespace: true }]}
            >
                <Input.TextArea showCount maxLength={100} />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Publish
                </Button>
            </Form.Item>
        </Form>
    );
};

export default WriteBlog;