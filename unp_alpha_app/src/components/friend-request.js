import React, { useState, useEffect } from "react";
import axios, * as others from "axios";
import "antd/dist/antd.css";
import { Button, Checkbox, Form, Input } from "antd";
import { Descriptions } from "antd";
import env from "../environment.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FriendRequest() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [parents, setParents] = useState([]);

  useEffect(() => {
    getData()
      .then((res) => res.data)
      .then(
        (result) => {
          setIsLoaded(true);
          setParents(result.parents);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  let getData = async () => {
    return await axios.get(env.backendUrl + "request/getParentsNearby/hoboken");
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h2>Parents Nearby</h2>
        <table class = "table request-table">
          <thead>
            <th>Name</th>
            <th>Location</th>
            <th>Send Request</th>
          </thead>
          <tbody>
            {parents.map((parent) => (
              <tr style={{padding: "5px"}}>
                <td>{parent.first_name + " " + parent.last_name}</td>
                <td>{parent.location}</td>
                <td>
                  <button class="btn btn-success btn-sml">Send</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FriendRequest;
