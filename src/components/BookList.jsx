import React from "react";
import { BookCard } from "./BookCard";
import Row from "react-bootstrap/Row";
// Komponenten som listar böckerna.
export function BookList(props) {
  const bookList = props.books;
  const slicedBookList = bookList.slice(0, 30);
  return (
    <div className="book-section">
      <h2>Results</h2>
      <Row xs={1} md={2} lg={4} className="g-4">
        {slicedBookList.length > 0 ? (
          slicedBookList.map((result, index) => (
            <BookCard
              result={result}
              key={index}
              className="book-card"
              viewBook={() => props.displayBook(index)}
            ></BookCard>
          ))
        ) : (
          <>
            <h3>No result</h3>
          </>
        )}
      </Row>
    </div>
  );
}
