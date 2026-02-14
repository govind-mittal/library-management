function BookList({ books, removeBook }) {
  return (
    <div className="book-list">
      {books.length === 0 ? (
        <p>No books found</p>
      ) : (
        books.map((book) => (
          <div className="book-card" key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <button onClick={() => removeBook(book.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

export default BookList;
