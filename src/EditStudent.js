import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function EditStudent({ students, setStudent }) {
  const [idx, setIdx] = useState("");
  const [name, setName] = useState("");
  const [standard, setStandard] = useState("");
  const [batch, setBatch] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  const selectedUser = students.find((std) => std.id === id);

  useEffect(() => {
    setIdx(selectedUser.id);
    setName(selectedUser.name);
    setStandard(selectedUser.standard);
    setBatch(selectedUser.batch);
    setAddress(selectedUser.address);
    setEmail(selectedUser.email);
    setContact(selectedUser.contact);
  }, [
    selectedUser.id,
    selectedUser.name,
    selectedUser.standard,
    selectedUser.batch,
    selectedUser.address,
    selectedUser.email,
    selectedUser.contact,
  ]);

  const updateStudent = () => {
    const editIndex = students.findIndex((std) => std.id === id);
    console.log(editIndex);
    const editedData = {
      id: idx,
      name,
      standard,
      batch,
      address,
      email,
      contact,
    };
    students[editIndex] = editedData;
    setStudent([...students]);
    navigate("/students");
  };
  return (
    <div className="add-form">
      <h3>Hello all welcome to the student edit page</h3>
      <TextField
        id="outlined-basic"
        value={id}
        label="Id"
        variant="outlined"
        onChange={(event) => setIdx(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        value={name}
        label="Name"
        variant="outlined"
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        value={standard}
        label="Standard"
        variant="outlined"
        onChange={(event) => setStandard(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        value={batch}
        label="Batch"
        variant="outlined"
        onChange={(event) => setBatch(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        value={address}
        label="Address"
        variant="outlined"
        onChange={(event) => setAddress(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        value={email}
        label="Email"
        variant="outlined"
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        value={contact}
        label="Contact"
        variant="outlined"
        onChange={(event) => setContact(event.target.value)}
      />
      <div className="btn">
        <Button variant="contained" color="success" onClick={updateStudent}>
          Save
        </Button>
      </div>
    </div>
  );
}
