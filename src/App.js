import ToDoList from "./todo";
import CreateToDo from "./create";
import { useState } from "react";


function App() {
  let [todos, setToDos] = useState([]);
  // merging needs to happen explicitly
  const addTodo = (text) => {
    setToDos(todos => (
      [
        ...todos,
        {
          id: todos.length,
          text: `${text}`,
          isComplete: false
        }
      ]
    ));
  }

  const clearCompleted = () => {
    setToDos(
      todos.filter(todo => !todo.isComplete)
    );
  }

  const markDone = (id) => {
    let updated = todos.map(todo => {
      if (todo.id == id){
        return {
          ...todo,
          isComplete : true
        }
      } else {
        return todo
      }
    });
    setToDos(updated);
  }
  let clearButton;
  if (todos.length == 0) {
    clearButton = <button className="button is-primary is-light is-pulled-right" onClick={clearCompleted} disabled>
      Clear Completed
    </button>;
  } else {
    clearButton = <button className="button is-primary is-light is-pulled-right" onClick={clearCompleted}>
      Clear Completed
    </button>;         
  }
  return (
    <div className="container mt-6">
      <section className="hero">
        <div class="hero-body">
          <p class="title">
          TODO App Using ReactJS
          </p>
        <p class="subtitle">
          Created for understanding hooks and state
        </p>
      </div>
      </section>    
        <section className="mt-6 mb-6">
          <CreateToDo adder={addTodo}></CreateToDo>
        </section>        
        <section>
          <ToDoList data={todos} onComplete={markDone}></ToDoList>
          <section>
            {clearButton}
          </section>
      </section>
    </div>
  );
}

export default App;
