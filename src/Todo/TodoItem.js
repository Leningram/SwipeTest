import { useContext } from "react";
import Context from "../context";

const styles = {
  input: {
    marginRight: "1rem"
  }
};

function TodoItem({ todo, index, toggleTodo }) {
  const { removeTodo } = useContext(Context);
  const classes = [];

  if (todo.completed) {
    classes.push("done");
  }

  return (
    <li>
      <span className={classes.join(" ")}>
        <input
          className="point"
          style={styles.input}
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
      </span>
      <button className="remove point" onClick={removeTodo.bind(null, todo.id)}>
        &times;
      </button>
    </li>
  );
}

export default TodoItem;
