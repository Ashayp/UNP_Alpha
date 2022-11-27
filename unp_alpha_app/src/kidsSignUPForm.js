import { useState } from 'react';
import axios from 'axios';
export default function SignInForm() {

// States for registration
const [firstname, setFirstName] = useState('');
const [lastname, setLastName] = useState('');
const [gender, setGender] = useState('');
const [age, setAge] = useState('');
const [username, setUserName] = useState('');
const [userid, setUserID] = useState('');

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
const handleUserName = (e) => {
setUserName(e.target.value);
setSubmitted(false);
};

// Handling the password change
const handleUserID = (e) => {
setUserID(e.target.value);
setSubmitted(false);
};

const handleResponse = (e) => {
    setResponse(e.target.value);
    setSubmitted(false);
    };

// Handling the form submission
const handleSubmit = async (e) => {
e.preventDefault();
if (firstname === '' || lastname === '' || email === '' || password === '') {
setError(true);
} else {
   let body = {
    "first_name":firstname,
    "last_name":lastname,
    "username":username,
    "userid": userid,
    "gender":gender,
    "age":age
 } 
 axios.post("http://localhost:8080/register/signup/kid", body)
 .then(res=>{
    handleResponse(res.data);
    setSubmitted(true);
    setError(false);
 })
}
};

// Showing success message
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
<div className="form">
<div>
<h1>User registration</h1>
</div>

{/* Calling to the methods */}
<div className="messages">
{errorMessage()}
{successMessage()}
</div>

<form>
{/* Labels and inputs for form data */}
<label className="label">First Name</label>
<input onChange={handleFirstName} className="input"
value={firstname} type="text" />

<label className="label">Last Name</label>
<input onChange={handleLastName} className="input"
value={lastname} type="text" />

<label className="label">Gender</label>
<input onChange={handleGender} className="input"
value={gender} type="text" />

<label className="label">Age</label>
<input onChange={handleAge} className="input"
value={age} type="text" />

<label className="label">User Name</label>
<input onChange={handleUserName} className="input"
value={username} type="text" />

<label className="label">User ID</label>
<input onChange={handleUserID} className="input"
value={userid} type="text" />

<button onClick={handleSubmit} className="btn" type="submit">
Submit
</button>
</form>
</div>
);
}