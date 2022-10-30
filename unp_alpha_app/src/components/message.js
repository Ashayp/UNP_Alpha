import React, { useState } from 'react';
import axios, * as others from 'axios';
import 'antd/dist/antd.css';
import { Button, Checkbox, Form, Input } from 'antd';
import { Descriptions } from 'antd';

function Search() {
  // Declare a new state variable, which we'll call "count"
  const [data, setData] = useState();

  const list = [
    {"sender": "Julie", "receiver": "Christina", "message":"Hi Christna! I found our sons go to same class. Do you like to meet on park next week? We can introduce our son to each other "}, 
    {"sender": "Max", "receiver": "Rabin", "message":"It was great meeting you last week!"},
    {"sender": "Jhon", "receiver": "Max", "message":"Does your son like to play baseball? May be we can plan something like that"},
    {"sender": "Julie", "receiver": "Christina", "message":"Hi Christna! I found our sons go to same class. Do you like to meet on park next week? We can introduce our son to each other "}, 
    {"sender": "Max", "receiver": "Rabin", "message":"It was great meeting you last week!"},
    {"sender": "Jhon", "receiver": "Max", "message":"Does your son like to play baseball? May be we can plan something like that"}
  
  
  ]
 
  return (
    <div>
   {list.map(each => 
  
   <div className='message-box'> 
  <div className='sender'>
<b>sent:</b> {each.sender}
</div>
<div className='message'>
<b>message: </b>{each.message}
</div>
<div className='receive'>
<b>received: {each.receiver}</b>
</div>

<br />

   </div>
   
   )}
    </div>
  );
}

export default Search;