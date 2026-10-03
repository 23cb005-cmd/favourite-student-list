import { HashRouter, Routes, Route, Link } from "react-router-dom";
import { StudentProvider } from "./context/StudentContext";
import StudentList from "./pages/StudentList";
import Favourites from "./pages/Favourites";
import "./App.css";

function App() {
  return (
    <StudentProvider>
      <HashRouter>
        <header className="nav">
          <h2 className="brand">Favourite Students</h2>
          <nav>
            <Link to="/">Student List</Link>
            <Link to="/favourites">Favourite Students</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<StudentList />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </main>
      </HashRouter>
    </StudentProvider>
  );
}

export default App;
