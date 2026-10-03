import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import students from "../data/students";

function StudentList() {
  const { isFavourite, addFavourite } = useContext(StudentContext);

  return (
    <section className="page">
      <h1>Student List</h1>
      <div className="card-grid">
        {students.map((student) => {
          const favourited = isFavourite(student.id);
          return (
            <div className="student-card" key={student.id}>
              <h2>{student.name}</h2>
              <p className="roll">Roll No: {student.id}</p>
              <p className="course">{student.course}</p>
              <button
                className={favourited ? "btn btn-added" : "btn btn-add"}
                disabled={favourited}
                onClick={() => addFavourite(student)}
              >
                {favourited ? "Added ✓" : "Add to Favourite"}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default StudentList;
