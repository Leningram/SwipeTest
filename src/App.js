import "./index.css";
import AddTodo from "./Todo/AddTodo";
import ItemsList from "./Todo/ItemList";
import { useState } from "react";
import Context from "./context";
import ReactSwipe from 'react-swipe';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, completed: false, title: "Купить хлеб" },
    { id: 2, completed: false, title: "Купить масло" },
    { id: 3, completed: false, title: "Купить молоко" }
  ]);

  const Carousel = () => {
    let reactSwipeEl;
  
    return (
      <div>
        <ReactSwipe
          className="carousel"
          swipeOptions={{ continuous: false }}
          ref={el => (reactSwipeEl = el)}
        >
          <div> <h1 id="todos-label">Первый экран</h1>
        <AddTodo onCreate={TodoAdd} />
        {todos.length ? (
          <ItemsList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>Добавьте текст!</p>
        )}</div>
          <div>PANE 2</div>
          <div>PANE 3</div>
        </ReactSwipe>
        <button onClick={() => reactSwipeEl.prev()}>Previous</button>
        <button onClick={() => reactSwipeEl.next()}>Next</button>
      </div>
    );
  };

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function TodoAdd(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false
        }
      ])
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <Context.Provider value={{ removeTodo: removeTodo }}>
      <section aria-labelledby="todos-label" className="App wrapper">
        <Carousel />
        
      </section>
    </Context.Provider>
  );
}

export default App;