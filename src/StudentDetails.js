import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";

export function StudentDetails({ students }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const student = students[id];
  return (
    <div className="details">
      <h3>Hello all welcome to the student details page</h3>
      <div className="card">
        <p>
          <strong>Id :</strong>
          {student.id}
        </p>
        <p>
          <strong>Name :</strong>
          {student.name}
        </p>
        <p>
          <strong>Standard :</strong>
          {student.standard}
        </p>
        <p>
          <strong>Batch :</strong>
          {student.batch}
        </p>
        <p>
          <strong>Address :</strong>
          {student.address}
        </p>
        <p>
          <strong>Email :</strong>
          {student.email}
        </p>
        <p>
          <strong>Contact :</strong>
          {student.contact}
        </p>
      </div>
      <div className="btn">
        <Button variant="contained" onClick={() => navigate(-1)}>
          ⬅Back
        </Button>
      </div>
    </div>
  );
}
