// import { useState } from "react";
import TodoItem from "./TodoItem";

function ItemsList(props) {
  return (
    <ul>
      {props.todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            index={index}
            toggleTodo={props.onToggle}
          />
        );
      })}
    </ul>
  );
}

export default ItemsList;
