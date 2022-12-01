// import React from 'react';
// import 'antd/dist/antd.css';
// // import './index.css';
// import { Button, Form, Input, InputNumber } from 'antd';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';

import "./KidProfile.css";
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
import axios from 'axios';
export default function Profilepage() {


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
const [firstname, setFirstName] = useState('');
const [lastname, setLastName] = useState('');
const [gender, setGender] = useState('');
const [age, setAge] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const [response, setResponse] = useState('');


// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleFirstName = (e) => {
setFirstName(e.target.value);
setSubmitted(false);
};


const handleLastName = (e) => {
    setLastName(e.target.value);
    setSubmitted(false);
    };

// Handling the username change
const handleGender = (e) => {
setGender(e.target.value);
setSubmitted(false);
};

const handleAge = (e) => {
    setAge(e.target.value);
    setSubmitted(false);
    };

// Handling the email change
const handleEmail = (e) => {
setEmail(e.target.value);
setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
setPassword(e.target.value);
setSubmitted(false);
};

const handleResponse = (e) => {
    setResponse(e.target.value);
    setSubmitted(false);
    };
const Profilepage = ()=> {
  const onFinish = (values) => {
    console.post(values);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (firstname === '' || lastname === '' || email === '' || password === '') {
    setError(true);
    } else {
       let body = {
        "first_name":firstname,
        "last_name":lastname,
        "email":email,
        "password": password,
        "phone":"987654321",
        "gender":gender,
        "age":age
     } 

     axios.post("http://localhost:3000/register/signup/kid", body)
     .then(res=>{
        handleResponse(res.data);
        setSubmitted(true);
        setError(false);
     })

     const successMessage = () => {
      return (
      <div
      className="success"
      style={{
      display: submitted ? '' : 'none',
      }}>
      <h1>{response.message}</h1>
      </div>
      );
      };
      
      // Showing error message if error is true
      const errorMessage = () => {
      return (
      <div
      className="error"
      style={{
      display: error ? '' : 'none',
      }}>
      <h1>Please enter all the fields</h1>
      </div>
      );
      };
      
  return (
   
<form onSubmit={onFinish}>
  {/* </form><form method="post" action="http://www.someurl.com/formHandler.php" onSubmit={onFinish}> */}
  <fieldset>
<div>
<div class="row">
  <div class="col-md-3 border-center">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"></img><span class="font-weight-bold">User</span><span class="text-black-50">user@email.com</span><span> </span></div>
        </div>
   
    <div class="col-md-5 border-right">
        <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-2">
                <h4 class="text-right">User settings</h4>
            </div>
            <div>
                <div ><label class="labels">First name</label><input onChange={handleFirstName} className="input" value={firstname} type="text" class="form-control" placeholder="first name" ></input></div>
                <div ><label class="labels">Surname</label><input type="text" class="form-control" value="" placeholder="surname"></input></div>
            </div>
            <div>
                <div><label class="labels">Parent's Phone No.</label><input id="phone" type="text" class="form-control" placeholder="enter phone number" ></input></div>
                <div><label class="labels">Residence (1st line)</label><input type="text" class="form-control" placeholder="first line"></input></div>
                <div><label class="labels">Residence (2nd line)</label><input type="text" class="form-control" placeholder="second line"></input></div>
                <div><label class="labels">Zip  </label><input type="text" class="form-control" placeholder="second line" ></input></div>
                <div><label class="labels">State</label><input type="text" class="form-control" placeholder="second line"></input></div>
                
                <div><label class="labels">E-mailID</label><input type="text" class="form-control" placeholder="Mail"></input></div>
                <div><label class="labels">School Grade</label><input type="text" class="form-control" placeholder="Qualification" ></input></div>
            </div>
            <div class="row mt-4">
                <div><label class="labels">Nationality</label><input type="text" class="form-control" placeholder="Nationality"></input></div>
                
            </div>
            <div class="mt-6 text-right"><button class="btn btn-primary profile-button" onClick={handleSubmit} type="submit">Submit</button></div>
        </div>
    </div>
    
</div>
</div>
</fieldset>
</form>

//    <div
//      className="site-layout-background"
//      style={{
//        padding: 24,
//        minHeight: '90vh',
//      }}
//    >
//      {/* content */}
//      <div>
//      Kid's Profile
//      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
//        <Form.Item name={['first_name', 'first_name']} label="First Name">
//          <Input />
//        </Form.Item>
//        <Form.Item name={['last_name', 'last_name']} label="Last Name">
//          <Input />
//        </Form.Item>
//        <Form.Item name={['user', 'username']} label="Username">
//          <Input />
//        </Form.Item>
//        <Form.Item name={['user', 'gender']} label="Gender">
//          <Input />
//        </Form.Item>
//        <Form.Item name={['user', 'location']} label="location">
//          <Input />
//        </Form.Item>
//        <Form.Item name={['user', 'school']} label="school">
//          <Input />
//        </Form.Item>
//        <Form.Item name={['user', 'grade']} label="grade">
//          <Input />
//        </Form.Item>
//        <Form.Item name={['user', 'ethnicity']} label="ethnicity">
//          <Input />
//      </Form.Item>
//        <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
//          <InputNumber />
//        </Form.Item>
//        <Form.Item name={['user', 'bio']} label="Bio">
//          <Input.TextArea />
//        </Form.Item>
//        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
//          <Button type="primary" htmlType="submit">
//            Submit
//          </Button>
//        </Form.Item>
//      </Form>
//      </div>
  
//</div>
//</Content>
//</Layout>
//</Layout>
 //</div>
  )
  }