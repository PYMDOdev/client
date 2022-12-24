import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../css/home.css';
import { useLocation } from "react-router-dom";

const Blog = () => {
    const { state } = useLocation();
    const { blog } = state;
    const NotFound = () =>{
        return (
            <p> NOT FOUND</p>
        );
    }
    const getBlogData = (blogId) => {
        return { title: 'Welcome To First Blog!', content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' };
    }
    const ShowBlog = (blogId) => {
        const blog = getBlogData(blogId);
        return (
            <div style={{ marginLeft: '20%', width: '60%' }} >
                <h1> {blog.title} </h1>
                <hr></hr>
                <p> { blog.content } </p>
            </div>
        );
        
    }
    return (
        <Container>
            <div className="containerDesign">
                <Row className="justify-content-center">
                    <Col xs={12} md={6}>
                        {
                            blog ? ShowBlog() :
                            NotFound()
                        }
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Blog;