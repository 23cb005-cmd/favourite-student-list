import { createContext, useState } from "react";

export const StudentContext = createContext(null);

export function StudentProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  const isFavourite = (id) => favourites.some((s) => s.id === id);

  const addFavourite = (student) => {
    setFavourites((prev) => {
      if (prev.some((s) => s.id === student.id)) return prev;
      return [...prev, student];
    });
  };

  const removeFavourite = (id) => {
    setFavourites((prev) => prev.filter((s) => s.id !== id));
  };

  const value = { favourites, isFavourite, addFavourite, removeFavourite };

  return (
    <StudentContext.Provider value={value}>
      {children}
    </StudentContext.Provider>
  );
}
