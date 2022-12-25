
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/home";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import ForgetPassword from "./pages/forgetPassword";
import ResetPassword from "./pages/resetPassword";
import Blogs from "./pages/blogs";
import Blog from "./pages/blog";
import WriteBlog from "./pages/writeBlog";
import DeleteAuthorBlog from "./pages/deleteBlog";
import UpdateAuthorBlog from "./pages/updateBlog";
import React from "react";
import { Container } from "react-bootstrap";

function App() {
  const [userData, setUserData] = React.useState(null);
  
  return (
    <Router>
      <Header userData={userData} setUserData={setUserData} />
      <main className="py-3" style={{ marginTop:'20px' }}>
        <Container>
          <Routes>
            <Route path="/" element={<Home userData={userData} />} exact />
            <Route path="/sign-in" element={<SignIn setUserData={setUserData} />} />
            <Route path="/sign-up" element={<SignUp  adminState={userData ? (userData.user.userType === "admin") : false } setUserData={setUserData} />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/reset-password" element={<ResetPassword userData={userData} />} />
            <Route path="/blogs" element={<Blogs all={true} userData={userData} />} />
            <Route path="/my-blogs" element={<Blogs all={false} userData={userData}/>} />
            <Route path="/write-blog" element={<WriteBlog userData={userData}/>} />
            <Route path="/update-blog" element={<UpdateAuthorBlog userData={userData}/>} />
            <Route path="/delete-blog" element={<DeleteAuthorBlog/>} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;
