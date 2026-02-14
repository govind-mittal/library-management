import { useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "Clean Code", author: "Robert C. Martin" },
    { id: 2, title: "Atomic Habits", author: "James Clear" }
  ]);

  const [search, setSearch] = useState("");

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>📚 Library Management System</h1>
      <SearchBar setSearch={setSearch} />
      <BookForm addBook={addBook} />
      <BookList books={filteredBooks} removeBook={removeBook} />
    </div>
  );
}

export default App;
