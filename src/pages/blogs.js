/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import {  Button, List, Skeleton } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { GetBlogs } from "../utils/api";
let count = 10;

const Blogs = ({ userData }) => {
    const token = userData ? userData.token : "";
    const { state } = useLocation();
    count = state ? 1 : 10;
    let fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
    const navigate = useNavigate();
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const state = await GetBlogs(token);
            if (state){
                setInitLoading(false);
                setData(state);
                setList(state);
            }
        }
        fetchData();
    });
    const onLoadMore = () => {
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
    };
    const loadMore =
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
    return (
        <List
            className="demo-loadmore-list"
            loading={initLoading}
            itemLayout="horizontal"
            loadMore={loadMore}
            dataSource={list}
            
            style={{ width: '50%', marginLeft : '25%' }}
            renderItem={(item) => (
                <List.Item
                    actions={[
                        <Button type="link"
                            onClick={() => {
                                navigate("/blog", { replace: false, state: { blogId:item._id, token: token } });
                            }}
                        >
                            Read
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
