import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function EditTeacher({ teachers, setTeacher }) {
  const [idx, setIdx] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [subject, setSubject] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  const selectedUser = teachers.find((tech) => tech.id === id);

  useEffect(() => {
    setIdx(selectedUser.id);
    setName(selectedUser.name);
    setGender(selectedUser.gender);
    setSubject(selectedUser.subject);
    setAddress(selectedUser.address);
    setEmail(selectedUser.email);
    setContact(selectedUser.contact);
  }, [
    selectedUser.id,
    selectedUser.name,
    selectedUser.gender,
    selectedUser.subject,
    selectedUser.address,
    selectedUser.email,
    selectedUser.contact,
  ]);

  const updateTeacher = () => {
    const editIndex = teachers.findIndex((tech) => tech.id === id);
    console.log(editIndex);
    const editedData = {
      id: idx,
      name,
      gender,
      subject,
      address,
      email,
      contact,
    };
    teachers[editIndex] = editedData;
    setTeacher([...teachers]);
    navigate("/teachers");
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
        value={gender}
        label="Gender"
        variant="outlined"
        onChange={(event) => setGender(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        value={subject}
        label="Subject"
        variant="outlined"
        onChange={(event) => setSubject(event.target.value)}
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
        <Button variant="contained" color="success" onClick={updateTeacher}>
          Save
        </Button>
      </div>
    </div>
  );
}
