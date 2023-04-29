import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function AddTeacher({ teachers, setTeacher }) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [subject, setSubject] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const navigate = useNavigate();
  return (
    <div className="add-form">
      <h3>welcome to the add teacher page</h3>
      <TextField
        id="outlined-basic"
        label="Id"
        variant="outlined"
        onChange={(event) => setId(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Gender"
        variant="outlined"
        onChange={(event) => setGender(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Subject"
        variant="outlined"
        onChange={(event) => setSubject(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Address"
        variant="outlined"
        onChange={(event) => setAddress(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Contact"
        variant="outlined"
        onChange={(event) => setContact(event.target.value)}
      />
      <div className="btn">
        <Button
          variant="contained"
          onClick={() => {
            const newTeacher = {
              id,
              name,
              gender,
              subject,
              address,
              email,
              contact,
            };
            setTeacher([...teachers, newTeacher]);
            navigate("/teachers")
          }}
        >
          Add Teacher
        </Button>
      </div>
    </div>
  );
}
