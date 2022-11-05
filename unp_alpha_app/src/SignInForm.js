import { useState } from "react";
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom';

export default function SignInForm() {
  // States for registration
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [response, setResponse] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleResponse = (e) => {
    setResponse(e);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || password === "") {
      setError(true);
    } else {
      let body = {
        username: name,
        password: password,
      };
      axios.post("http://localhost:8080/register/login", body).then((res) => {
        handleResponse(res.data);
        setSubmitted(true);
        setError(false);
      });
      setSubmitted(true);
      setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
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
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className="reg-form">
      <div>
        <h1>Login</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        {/* Labels and inputs for form data */}
        <div class="form-group">
          <label className="label">User Name/ E-mail</label>
          <input
            class="form-control"
            onChange={handleName}
            className="input"
            value={name}
            type="text"
          />
        </div>
        <div class="form-group">
          <label className="label">Password</label>
          <input
            class="form-control"
            onChange={handlePassword}
            className="input"
            value={password}
            type="password"
          />
        </div>
        <div class="form-group">
          <button class="btn btn-success" onClick={handleSubmit} type="submit">
            Login
          </button>
        </div>
      </form>

      <div>
      <Link to="/SignUpForm">Create an account</Link>
      </div>
    </div>
  );
}
