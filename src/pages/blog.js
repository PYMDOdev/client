import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../css/home.css';
import { useLocation } from "react-router-dom";
import { GetBlog } from "../utils/api";

const Blog = () => {
    const { state } = useLocation();
    const { blogId, token } = state ? state : { blogId: "", token: ""};
    const [ blog, setBlog] = React.useState({ title: "Blog Not Found", content: "Blog Not Found", auhtor: "-" });
       
    useEffect(() => {
        async function fetchData(){
            if (blogId !==  ""){
                const state = await GetBlog({ token: token, id: blogId });
                if (state)
                    setBlog(state);
            }
        }
        fetchData();
    }, [blogId, token])
    return (
        <Container>
            <div className="containerDesign">
                <Row className="justify-content-center">
                    <Col xs={12} md={6}>
                        <div style={{ marginLeft: '20%', width: '60%' }} >
                            <h1> { blog.title } </h1>
                            <h6> { blog.author } </h6>
                            <hr></hr>
                            <p> { blog.content } </p>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Blog;