import React from "react";
import '../css/home.css';
import {
    Button,
    Form,
    Input,
} from 'antd';
import { useNavigate } from "react-router-dom";
import { AddBlog } from "../utils/api";
import { Container, Row, Col } from "react-bootstrap";


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

const WriteBlog = ({ userData }) => {
    const user = userData ? userData.user : null;
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        values.author = user.username;
        const state = await AddBlog({ token: userData.token, values: values });
        if (state){
            navigate("/my-blogs", { replace: true, state: { user: user } } );
        }
    };




    return userData ? (
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
    ) : (
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

export default WriteBlog;