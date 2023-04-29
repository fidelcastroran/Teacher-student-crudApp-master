import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function AddStudent({ students, setStudent }) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [standard, setStandard] = useState("");
  const [batch, setBatch] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const navigate = useNavigate();
  return (
    <div className="add-form">
      <h3>welcome to the add student form page</h3>
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
        label="Standard"
        variant="outlined"
        onChange={(event) => setStandard(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Batch"
        variant="outlined"
        onChange={(event) => setBatch(event.target.value)}
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
            const newStudent = {
              id,
              name,
              standard,
              batch,
              address,
              email,
              contact,
            };
            setStudent([...students, newStudent]);
            navigate("/students");
          }}
        >
          Add Student
        </Button>
      </div>
    </div>
  );
}
