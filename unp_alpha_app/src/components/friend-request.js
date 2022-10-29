import React, { useState, useEffect } from "react";
import axios, * as others from "axios";
import "antd/dist/antd.css";
import { Button, Checkbox, Form, Input } from "antd";
import { Descriptions } from "antd";
import env from "../environment.json";

function FriendRequest() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [parents, setParents] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    getData()
      .then((res) => res.data)
      .then(
        (result) => {
          setIsLoaded(true);
          setParents(result.parents);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  let getData = async () =>{
    return await axios.get(env.backendUrl + "request/getParentsNearby/hoboken");
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <table>
        <thead>
          <th>Name</th>
          <th>Location</th>
          <th>Send Request</th>
        </thead>
        <tbody>
          {parents.map((parent) => (
            <tr>
              <td>{parent.first_name + " " + parent.last_name}</td>
              <td>{parent.location}</td>
              <td><button>Send</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default FriendRequest;
