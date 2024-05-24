import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Table, Container } from "react-bootstrap";
import axios from "axios";
import React, { useEffect, useState } from "react";

function BasicExample() {
  const [users, setusers] = useState([]);

  console.log("users:", users);

  const getdata = async () => {
    const url = "http://localhost:5000/get";
    await axios
      .get(url)
      .then((res) => {
        // console.log(res.data);
        setusers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <Container className=" d-flex justify-content-between align-items-center flex-wrap py-3 gap-1">
      {users.map((user) => (
        <Card
          style={{
            width: "18rem",
            fontFamily: "Poppins, sans-serif",
            transition: "transform 0.3s, box-shadow 0.3s",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
          }}
          key={user.id}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
          }}
        >
          <Card.Img
            variant="top"
            src={user.avatar}
            style={{ height: "200px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title style={{ fontWeight: "700" }}>{user.name}</Card.Title>
            <Card.Text style={{ fontWeight: "300" }}>{user.phone}</Card.Text>
            <Card.Text style={{ fontWeight: "300" }}>{user.email}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default BasicExample;
