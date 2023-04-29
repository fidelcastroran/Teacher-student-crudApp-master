import Carousel from "react-bootstrap/Carousel";

export function Dashboard() {
  return (
    <div className="home">
      <div className="title">
        <h3>welcome to the student teacher management app</h3>
      </div>
      <div className="slides">
        <Carousel>
         
            <img
              className="d-block w-100"
              src="https://png.pngtree.com/png-vector/20200608/ourmid/pngtree-teacher-and-student-meeting-debate-png-image_2220911.jpg"
              alt="First slide"
            />
         
        </Carousel>
      </div>
    </div>
  );
}
