import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "reactstrap";

import Todos from "./Components/Todos";
import TodoForm from "./Components/TodoForm";
import UseEffectExample from "./useEffect";

const App = () => {
  const [todos, setTodos] = useState([]);

  //get all todos from local storage before app load
  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    console.log({ localTodos });
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  const addTodo = (t) => {
    setTodos([...todos, t]);
  };

  const markComplete = (tid) => {
    setTodos(todos.filter((t) => t.id !== tid));
  };

  //update the localstorage todos based on state change
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  return (
    <Container fluid>
      <h1>Todos with local storage</h1>
      {/* <Todos todos={todos} markComplete={markComplete} />
      <TodoForm addtodo={addTodo} /> */}
      <UseEffectExample/>
    </Container>
  );
};

export default App;
