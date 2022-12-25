/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import {  Button, List, Skeleton } from "antd";
import { useNavigate } from "react-router-dom";
import { GetBlogs, GetAuthorBlogs } from "../utils/api";

const Blogs = ({ all, userData }) => {
    const token = userData ? userData.token : "";
    const navigate = useNavigate();
    const [initLoading, setInitLoading] = useState(true);
    //const [loading, setLoading] = useState(false);
    //const [data, setData] = useState([]);
    const [list, setList] = useState([]);    
    useEffect(() => {
        async function fetchData(){
            const state = all ? await GetBlogs(token) : await GetAuthorBlogs({ author: userData.user.username, token: token });
            if (state){
                setInitLoading(false);
                //setData(state);
                setList(state);
            }
        }
        fetchData();
    }, [all, token, userData]);
    /*const onLoadMore = () => {
        setLoading(true);
        setList(
            data.concat(
                [...new Array(count)].map(() => ({
                    loading: true,
                    name: {},
                    picture: {},
                }))
            )
        );
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((res) => {
                const newData = data.concat(res.results);
                setData(newData);
                setList(newData);
                setLoading(false);
                window.dispatchEvent(new Event("resize"));
            });
    };*/
    /*const loadMore =
        !initLoading && !loading ? (
            <div
                style={{
                    textAlign: "center",
                    marginTop: 12,
                    height: 32,
                    lineHeight: "32px",
                }}
            >
                <Button onClick={onLoadMore}>loading more</Button>
            </div>
        ) : null;
            loadMore={loadMore}*/
    return (
        <List
            className="demo-loadmore-list"
            loading={initLoading}
            itemLayout="horizontal"
            dataSource={list}
            
            style={{ width: '50%', marginLeft : '25%' }}
            renderItem={(item) => (
                <List.Item
                    actions={all ? [
                        <Button type="link"
                            onClick={() => {
                                navigate("/blog", { replace: false, state: { blogId:item._id, token: token } });
                            }}
                        >
                            Read
                        </Button>,
                    ] : [
                        <Button type="link"
                            onClick={() => {
                                navigate("/blog", { replace: false, state: { blogId:item._id, token: token } });
                            }}
                        >
                            Read
                        </Button>,
                        <Button type="dashed"
                            onClick={() => {
                                navigate("/update-blog", { replace: false, state: { blogId:item._id, token: token } });
                            }}
                        >
                            Edit
                        </Button>,
                        <Button type="default"
                        onClick={() => {
                            navigate("/delete-blog", { replace: false, state: { blogId:item._id, token: token } });
                        }}
                        >
                            Delete
                        </Button>,
                    ]}
                >
                    <Skeleton avatar title={false} loading={item.loading} active>
                        <List.Item.Meta
                            avatar={<h3>{item.author} </h3>}
                            title={<a onClick={() => {navigate("/blog", { replace: false, state: { blogId:item._id, token: token } }); }}><h1>{item.title}</h1></a>}
                            description={ item.content.substring(0, 100) + "..."}
                        />
                    </Skeleton>
                </List.Item>
            )}
        />
    );
};
export default Blogs;
