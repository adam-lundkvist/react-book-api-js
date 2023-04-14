import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";

import Container from "react-bootstrap/Container";

import { BookList } from "./components/BookList";
import { SearchBar } from "./components/SearchBar";
import { Book } from "./components/Book";
import { Footer } from "./Components/Footer";
import { Header } from "./components/Header";

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [activeBook, setActiveBook] = useState(null);

  function search() {
    setResults([]);
    const uri = "https://openlibrary.org/search.json?title=" + query;
    fetch(uri)
      .then((response) => response.json())
      .then((data) => setResults(data.docs));
  }

  function handleQuery(event) {
    const input = event.target.value;
    const handledInput = input.replace(/ /g, "+");
    setQuery(handledInput);
  }

  function displayBook(index) {
    setActiveBook(results[index]);
  }

  function closeSelectedBook() {
    setActiveBook(null);
  }

  return (
    <>
      <Header />
      <Container>
        <SearchBar
          query={query}
          handleQuery={handleQuery}
          search={search}
          books={results}
        />
        <Book book={activeBook} backToList={closeSelectedBook} />
        {activeBook === null ? (
          <BookList books={results} displayBook={displayBook} />
        ) : null}
      </Container>
      <Footer />
    </>
  );
}
