import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import Search from 'antd/lib/transfer/search';
import 'antd/dist/antd.css';
import { render } from '@testing-library/react';
import axios, * as others from 'axios';
// const axios = require('axios');

const onFinish = (e) => {
  console.log("reached here",e)
  axios.post('http://localhost:9000/kid/filters',e)
  .then(response => {
    console.log("response", response.data)
   {
    <div>
      hesdfasdfadsfadsfasdfasdfasdfsdf
      </div>
   } 
  })
  .catch(error => {
    console.log(error);
  });
}
const search = () => (
  <div>
  <div className="App">
    <h3>Search Here tom Find Kids! </h3>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="location"
        name="location"
        rules={[
          {
            required: true,
            message: 'Please input your location!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Grade"
        name="grade"
        rules={[
          {
            required: true,
            message: 'Please input your grade!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Search
        </Button>
      </Form.Item>
    </Form>
  ;
  </div>
  </div>
);

export default search;