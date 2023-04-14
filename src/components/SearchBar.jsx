import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";

// Komponenten SearchBar innehåller sökfunktionen med sin tillhörande knapp.
export function SearchBar(props) {
  const [btnClicked, setBtnClicked] = useState(null);
  // Props används för att kunna invokera funktioner och hantera värden från App.js.

  function submitBtn() {
    props.search();
    setBtnClicked(true);

    if (props.books.length === 0) {
      setTimeout(() => {
        setBtnClicked(false);
      }, 40000);
    }
  }

  return (
    <div className="search-bar">
      <h2>Open Library API</h2>
      <Form>
        <InputGroup
          className="d-flex"
          value={props.query}
          onChange={props.handleQuery}
        >
          <Form.Control
            placeholder="Search book title"
            aria-describedby="basic-addon2"
          />
          <Button
            className="sumbit-btn"
            variant="outline-secondary"
            id="button-addon2"
            onClick={submitBtn}
          >
            {btnClicked === true && props.books.length === 0 ? (
              <Spinner animation="border" size="sm" className="spinner" />
            ) : null}
            Search
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
}
