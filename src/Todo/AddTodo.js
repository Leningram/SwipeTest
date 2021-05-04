import React, { useState } from "react";

function AddTodo({ onCreate }) {
  const [value, setValue] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="Введите текст"
        className="textField"
        aria-label="Добавить текст"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        type="text"
      />
      <button className="addTodo point" type="submit">
        Добавить
      </button>
    </form>
  
  )}

export default AddTodo;
