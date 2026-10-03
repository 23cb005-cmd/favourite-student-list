import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function Favourites() {
  const { favourites, removeFavourite } = useContext(StudentContext);

  return (
    <section className="page">
      <h1>Favourite Students</h1>
      {favourites.length === 0 ? (
        <p className="empty-msg">No favourite students added yet.</p>
      ) : (
        <div className="card-grid">
          {favourites.map((student) => (
            <div className="student-card" key={student.id}>
              <h2>{student.name}</h2>
              <p className="roll">Roll No: {student.id}</p>
              <p className="course">{student.course}</p>
              <button
                className="btn btn-remove"
                onClick={() => removeFavourite(student.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Favourites;
