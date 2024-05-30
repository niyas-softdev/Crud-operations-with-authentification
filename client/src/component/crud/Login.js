import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const formData = {
    email: email,
    password: password
  };
  console.log(formData, ",.,.,.,");

  const postdata = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/login";
    await axios
      .post(url, formData)
      .then((res) => {
        // console.log(res.data.return);
        const userData = res?.data?.return;
        localStorage.setItem("userData", JSON.stringify(userData));
        if (res.status === 200) {
          toast("Login Success", { type: "success", autoClose: 2000 });
           navigate("/home");
        }
      })
      .catch((err) => {
        // console.log(err.response.data.message);
        if (err.response.data.message) {
          toast(`${err.response.data.message}`, {
            type: "error",
            autoClose: 2000,
            pauseOnHover: true
          });
        }
      });
  };
  return (
    <Container className=" d-flex justify-content-center align-items-center py-5">
      <Form onSubmit={postdata} className=" shadow-lg p-5 rounded-4">
        <h3 className="text-center mb-4">Login</h3>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <ToastContainer />
    </Container>
  );
}

export default Login;
