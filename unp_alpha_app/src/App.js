<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Searchpage from './searchpage';
import Message from './components/message';
// import '../styles/global.css'
>>>>>>> a02bbd56dadf4c9555dce91c307e4dfada468fc8

// import Layout from '../containers/Layout'
// import Home from '../pages/Home'
// import Login from '../containers/Login'
// import RecoveryPassword from '../containers/RecoveryPassword'
// import NotFound from '../pages/NotFound'

<<<<<<< HEAD
function Signup() {
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();

    // 👇️ redirect to /contacts
    navigate('/SignUpForm');
  };

=======
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Searchpage from './searchpage';
import Message from './components/message';
// import '../styles/global.css'
>>>>>>> 05eaafc (added routes for message)

// import Layout from '../containers/Layout'
// import Home from '../pages/Home'
// import Login from '../containers/Login'
// import RecoveryPassword from '../containers/RecoveryPassword'
// import NotFound from '../pages/NotFound'

<<<<<<< HEAD
=======
const App = () => {
>>>>>>> 05eaafc (added routes for message)
=======
const App = () => {
>>>>>>> a02bbd56dadf4c9555dce91c307e4dfada468fc8
  return (
    <Router>
      {/* <Layout> */}
        <Routes>
          <Route exact path="/" element={<Searchpage/>}/>
          <Route exact path="/message" element={<Message/>}/>
          {/* <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
          <Route path="*" element={<NotFound/>}/> */}
        </Routes>
      {/* </Layout> */}
    </Router>
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