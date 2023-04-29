import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";

export function TeacherDetails({ teachers }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const teacher = teachers[id];
  return (
    <div className="details">
      <h3>Hello all welcome to the teacher details page {teacher.name}</h3>
      <div className="card">
        <p>
          <strong>Id :</strong>
          {teacher.id}
        </p>
        <p>
          <strong>Name :</strong>
          {teacher.name}
        </p>
        <p>
          <strong>Gender :</strong>
          {teacher.gender}
        </p>
        <p>
          <strong>Subject :</strong>
          {teacher.subject}
        </p>
        <p>
          <strong>Address :</strong>
          {teacher.address}
        </p>
        <p>
          <strong>Email :</strong>
          {teacher.email}
        </p>
        <p>
          <strong>Contact :</strong>
          {teacher.contact}
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
