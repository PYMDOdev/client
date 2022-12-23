
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/home";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import ForgetPassword from "./pages/forgetPassword";
import ResetPassword from "./pages/resetPassword";
import React from "react";
import { Container } from "react-bootstrap";

function App() {
  const [user, setUser] = React.useState(null);

  return (
    <Router>
      <Header user={user} setUser={setUser} />
      <main className="py-3" style={{ marginTop:'20px' }}>
        <Container>
          <Routes>
            <Route path="/" element={<Home user={user} />} exact />
            <Route path="/sign-in" element={<SignIn setUser={setUser} />} />
            <Route path="/sign-up" element={<SignUp  adminState={false} setUser={setUser} />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/reset-password" element={<ResetPassword user={user} />} />
          </Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;
