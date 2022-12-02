// import React from 'react';
import "antd/dist/antd.css";
// import './index.css';
import { Button, Form, Input, InputNumber, Select } from "antd";
import React, { useState, useEffect } from "react";
import Search from "../components/search";
import Messenger from "../components/messenger/Messenger";
import "antd/dist/antd.min.css";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import env from "../environment.json";
import { useCookies } from "react-cookie";
import axios, * as others from "axios";
const { Header, Content, Footer, Sider } = Layout;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const Profilepage = () => {
  const [cookies, setCookie] = useCookies(["user"]);
  const [parent, setParent] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const [form] = Form.useForm();

  const config = {
    headers: {
      Authorization: cookies.token,
    },
  };
  const updateParent = async (body) => {
    let id = cookies.user.id;
    let res = await axios.post(
      `${env.backendUrl}api/parents/updateparent/${id}`,
      body,
      config
    );
    alert("Profile updated");
  };
  const onFinish = (values) => {
    console.log(values);
    updateParent(values);
  };

  const getData = async () => {
    let id = cookies.user.id;
    console.log(id);
    let res = await axios.get(
      `${env.backendUrl}api/parents/getparent/${id}`,
      config
    );
    setParent(res.data);
    setIsLoaded(true);
    return res;
  };

  useEffect(() => {
    let res = getData().then((res) => {
      console.log("Parent ", parent);
      form.setFieldsValue(parent);
    });
  }, [isLoaded]);

  return (
    <div>
      {/* <Search/> */}
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{
            padding: 0,
            height: "10vh",
          }}
        />
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            // style={{marginTop:50}}
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            {/* <div className="logo" /> */}
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["2"]}>
              <Menu.Item key="search">
                <Link to="/home">Search </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/profile">Parent Profile </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/Kidprofile">Kid Profile </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/ViewFriends">View Friends </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/inbox">Inbox </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/registerkid">Register Kid </Link>
              </Menu.Item>
              <Menu.Item key="messenger">
                <Link to="/messenger">Messenger </Link>
              </Menu.Item>
              <Link to="/login">
                <Menu.Item
                  style={{
                    position: "absolute",
                    bottom: 0,
                    zIndex: 1,
                    transition: "all 0.2s",
                  }}
                >
                  Sign Out
                </Menu.Item>
              </Link>
            </Menu>
          </Sider>
          <Content
            style={{
              margin: "24px 16px 0",
            }}
          >
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: "90vh",
              }}
            >
              {/* content */}
              <div>
                Parents Profile
                {/* {{parent}} */}
                <Form
                  form={form}
                  {...layout}
                  name="nest-messages"
                  initialValues={parent}
                  onFinish={onFinish}
                  validateMessages={validateMessages}
                >
                  <Form.Item name="first_name" label="First Name">
                    <Input />
                  </Form.Item>
                  <Form.Item name="last_name" label="Last Name">
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[{ type: "email" }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item name="gender" label="Gender">
                    <Select
                      options={[
                        {
                          value: "male",
                          label: "male",
                        },
                        {
                          value: "female",
                          label: "female",
                        },
                        {
                          value: "NA",
                          label: "prefer not to say",
                        },
                      ]}
                    />
                  </Form.Item>
                  <Form.Item name="location" label="Location">
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="age"
                    label="Age"
                    rules={[{ type: "number", min: 0, max: 99 }]}
                  >
                    <InputNumber />
                  </Form.Item>
                  <Form.Item name="phone" label="Phone">
                    <Input />
                  </Form.Item>

                  <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Profilepage;
