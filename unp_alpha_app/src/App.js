import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Search from "./components/search";
import FriendRequest from "./components/friend-request";
import "antd/dist/antd.css";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import 'bootstrap/dist/css/bootstrap.min.css';

const { Header, Content, Footer, Sider } = Layout;
import './App.css';
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import GetDetailsForm from "./getdetails";
import {Link, useNavigate} from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import Searchpage from './searchpage';
import 'antd/dist/antd.css';
import Login from './Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function Signup() {
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();

    // 👇️ redirect to /contacts
    navigate('/SignUpForm');
  };



  return (
    <div className="App">
      {/* <Search/> */}
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={[
              UserOutlined,
              VideoCameraOutlined,
              UploadOutlined,
              UserOutlined,
            ].map((icon, index) => ({
              key: String(index + 1),
              icon: React.createElement(icon),
              label: `nav ${index + 1}`,
            }))}
          />
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{
              padding: 0,
            }}
          />
          <Content
            style={{
              margin: "24px 16px 0",
            }}
          >
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              {/* content */}
              <FriendRequest />
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}
function Signin() {
  return <SignInForm />;
}




function App() {
return ( 
<div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/SignInForm">Login</Link>
            </li>
            <li>
              <Link to="/SignUpForm">Sign Up</Link>
            </li>
            <li>
              <Link to="/GetDetailsForm">Get Details</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/SignInForm" element={<SignInForm />} />
          <Route path="/SignUpForm" element={<SignUpForm />} />
          <Route path="/GetDetailsForm" element={<GetDetailsForm />} />
        </Routes>
      </div>
    </div>
);
}

export default App;