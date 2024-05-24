import { Table, Container } from "react-bootstrap";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdSystemUpdateAlt, MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BasicExample() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    const url = "http://localhost:5000/get";
    try {
      const res = await axios.get(url);
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleUpdate = (user) => {
    navigate("/update", { state: user });
  };

  const handleDelete = async (id) => {
    const url = `http://localhost:5000/delete/${id}`;
    try {
      const res = await axios.delete(url);
      if (res.status === 200) {
        toast.success("Successfully Deleted", { autoClose: 2000 });
        setUsers(users.filter((user) => user._id !== id));
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to Delete");
    }
  };

  return (
    <Container className="py-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Phone</th>
            <th>email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={user.avatar}
                  alt="avatar"
                  width={40}
                  className="rounded-circle"
                />
              </td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td className="d-flex gap-3">
                <MdSystemUpdateAlt
                  onClick={() => handleUpdate(user)}
                  className="text-info fs-3"
                />
                <MdDelete
                  onClick={() => handleDelete(user._id)}
                  className="text-danger fs-3"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ToastContainer />
    </Container>
  );
}

export default BasicExample;
