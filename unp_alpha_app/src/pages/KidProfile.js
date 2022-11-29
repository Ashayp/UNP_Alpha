// import React from 'react';
// import 'antd/dist/antd.css';
// // import './index.css';
// import { Button, Form, Input, InputNumber } from 'antd';


// import React from 'react';
import 'antd/dist/antd.css';
// import './index.css';
import { Button, Form, Input, InputNumber } from 'antd';
import React, { useState, useEffect } from 'react';
import Search from '../components/search';
import Messenger from "../components/messenger/Messenger";
import 'antd/dist/antd.min.css';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;



const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const Profilepage = ()=> {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
   


<div class="container rounded bg-yellow mt-6 mb-6">
<div class="row">
    <div class="col-md-3 border-right">
        <div class="d-flex flex-column align-items-center text-center p-3 py-5"><span class="font-weight-bold">User</span><span class="text-black-50">user@email.com</span><span> </span></div>
    </div>
    <div class="col-md-5 border-right">
        <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h4 class="text-right">User settings</h4>
            </div>
            <div class="row mt-2">
                <div class="col-md-7"><label class="labels">First name</label><input type="text" class="form-control" placeholder="first name" value=""></input></div>
                <div class="col-md-7"><label class="labels">Surname</label><input type="text" class="form-control" value="" placeholder="surname"></input></div>
            </div>
            <div class="row mt-3">
                <div class="col-md-11"><label class="labels">Phone No.</label><input type="text" class="form-control" placeholder="enter phone number" value=""></input></div>
                <div class="col-md-11"><label class="labels">Residence (1st line)</label><input type="text" class="form-control" placeholder="first line" value=""></input></div>
                <div class="col-md-11"><label class="labels">Residence (2nd line)</label><input type="text" class="form-control" placeholder="second line" value=""></input></div>
                <div class="col-md-11"><label class="labels">Zip  </label><input type="text" class="form-control" placeholder="second line" value=""></input></div>
                <div class="col-md-11"><label class="labels">State</label><input type="text" class="form-control" placeholder="second line" value=""></input></div>
                
                <div class="col-md-11"><label class="labels">E-mailID</label><input type="text" class="form-control" placeholder="Mail" value=""></input></div>
                <div class="col-md-11"><label class="labels">Qualifications</label><input type="text" class="form-control" placeholder="Qualification" value=""></input></div>
            </div>
            <div class="row mt-4">
                <div class="col-md-7"><label class="labels">Nationality</label><input type="text" class="form-control" placeholder="Nationality" value=""></input></div>
                
            </div>
            <div class="mt-6 text-right"><button class="btn btn-primary profile-button" type="button">Submit</button></div>
        </div>
    </div>
    
</div>
</div>


//   <div
//     className="site-layout-background"
//     style={{
//       padding: 24,
//       minHeight: '90vh',
//     }}
//   >
//     {/* content */}
//     <div>
//       Kid's Profile
//     <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
//       <Form.Item name={['first_name', 'first_name']} label="First Name">
//         <Input />
//       </Form.Item>
//       <Form.Item name={['last_name', 'last_name']} label="Last Name">
//         <Input />
//       </Form.Item>
//       <Form.Item name={['user', 'username']} label="Username">
//         <Input />
//       </Form.Item>
//       <Form.Item name={['user', 'gender']} label="Gender">
//         <Input />
//       </Form.Item>
//       <Form.Item name={['user', 'location']} label="location">
//         <Input />
//       </Form.Item>
//       <Form.Item name={['user', 'school']} label="school">
//         <Input />
//       </Form.Item>
//       <Form.Item name={['user', 'grade']} label="grade">
//         <Input />
//       </Form.Item>
//       <Form.Item name={['user', 'ethnicity']} label="ethnicity">
//         <Input />
//       </Form.Item>
//       <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
//         <InputNumber />
//       </Form.Item>
//       <Form.Item name={['user', 'bio']} label="Bio">
//         <Input.TextArea />
//       </Form.Item>
//       <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
//         <Button type="primary" htmlType="submit">
//           Submit
//         </Button>
//       </Form.Item>
//     </Form>
//     </div>
  
//   </div>
// </Content>
// </Layout>
// </Layout>
// </div>
  );
};

export default Profilepage;