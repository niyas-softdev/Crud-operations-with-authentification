import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BasicExample() {
  const Navigate = useNavigate();
  const user = useLocation()?.state;

  console.log("user:", user);

  const [name, setName] = useState(user?.name);
  const [phone, setPhoneno] = useState(user?.phone);
  const [avatar, setAvatar] = useState(user?.avatar);
  const formData = {
    name: name,
    phone: phone,
    avatar: avatar
  };


  const Updatedata = async (e) => {
    e.preventDefault();
    const id = user._id;

    const url = `http://localhost:5000/update/${id}`;
    await axios
      .put(url, formData)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast("Successfully Updated", { type: "success", autoClose: 2000 });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleGoToHome = () => {
    Navigate("/");
  };
  return (
    <Container className=" d-flex justify-content-center align-items-center py-5">
      <Form className=" shadow-lg p-5 rounded-4">
        <h3 className="text-center mb-4">Update</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phoneno</Form.Label>
          <Form.Control
            type="text"
            placeholder="Phone"
            onChange={(e) => setPhoneno(e.target.value)}
            value={phone}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Avatar</Form.Label>
          <Form.Control
            type="text"
            placeholder="Avatar Image"
            onChange={(e) => setAvatar(e.target.value)}
            value={avatar}
          />
        </Form.Group>
        <div className=" d-flex gap-5">
          <Button onClick={Updatedata} variant="primary" type="submit">
            Update
          </Button>
          <Button onClick={handleGoToHome} variant="primary" type="submit">
            Back
          </Button>
        </div>
      </Form>
      <ToastContainer />
    </Container>
  );
}

export default BasicExample;
