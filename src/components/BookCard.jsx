import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

export function BookCard(props) {
  const books = props.result;
  const coverImageLink = "https://covers.openlibrary.org/b/id/";
  const coverImage = coverImageLink + books.cover_i + "-M.jpg";
  return (
    <Col>
      <Card className="book-card" bg="light" onClick={props.viewBook}>
        <Card.Body>
          <Card.Img variant="top" src={coverImage} className="card-img" />
          <Card.Title>{books.title}</Card.Title>
          {books.author_name.length === 1 ? (
            <Card.Text>{books.author_name}</Card.Text>
          ) : (
            <Card.Text>
              {books.author_name[0]}
              {" et al."}
            </Card.Text>
          )}
          <Card.Text>{books.first_publish_year}</Card.Text>
          <Button
            className="card-btn"
            variant="primary"
            onClick={props.viewBook}
          >
            View Book
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
