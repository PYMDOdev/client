import axios from 'axios';
const apiValues = {
    url: "http://localhost:8080/api/"
}

const SendPost = async (page, data, token = undefined) => {
    let headers = { 'Content-Type': 'application/json' };
    if (token)
        headers =  { 'Content-Type': 'application/json', 'x-auth-token': token };
    try {
        const response = await axios({
            method: 'post',
            headers: headers,
            url: apiValues.url + page,
            data: data,
        });
        return response.data;
    } catch (error ){
        console.log(error);
        alert(error.response.data);
    }
}
const SendGet = async (page, data, token = undefined) => {
    let headers = { 'Content-Type': 'application/json' };
    if (token)
        headers =  { 'Content-Type': 'application/json', 'x-auth-token': token };
    try {
        const response = await axios({
            method: 'get',
            headers: headers,
            url: apiValues.url + page,
            data: data,
        });
        return response.data;
    } catch (error ){
        console.log(error);
        alert(error.response.data);
    }
}
export const Login = async (loginData) => {
    return await SendPost("login", loginData);
}
export const Register = async (userData) => {
    return await SendPost("register", userData);
}
export const AddBlog = async (blogData) => {
    return await SendPost("add-blog", blogData.values, blogData.token);
}
export const GetBlog = async (blogData) => {
    return await SendGet("blogs/" + blogData.id,{} , blogData.token);
}
export const GetBlogs = async (token) => {
    return await SendGet("blogs/",{} , token);
}
