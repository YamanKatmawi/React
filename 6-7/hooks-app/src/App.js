import React, { Fragment, useState } from "react";

const BookInfo = ({ info }) => {
  return (
    <div>
      <h1>{info.title}</h1>
    </div>
  );
};

const AddBookFrom = ({ addNewBook }) => {
  const [userInput, setUserInput] = useState("");
  const submitHandle = (e) => {
    e.preventDefault();
    if (userInput) {
      addNewBook(userInput);
    }
    setUserInput("");
  };
  return (
    <from onSubmit={submitHandle}>
      <input
        type="text"
        onChange={(e) => setUserInput(e.target.value.trim())}
        value={userInput}
      />
    </from>
  );
};
const App = () => {
  const [counter, setCounter] = useState(0);
  const [books, setBooks] = useState([
    { title: "javaScript" },
    { title: "REact" },
    { title: "Redux" },
  ]);
  const addNewBook = (userText) => {
    const newArr = [...books, { title: userText }];
    setBooks(newArr);
  };
  return (
    <Fragment>
      <h1>Hey I am React Hooks </h1>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      {books.map((book, i) => (
        <BookInfo key={i} info={book} />
      ))}
      <AddBookFrom addNewBook={addNewBook} />
    </Fragment>
  );
};

export default App;
