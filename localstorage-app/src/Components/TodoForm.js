import React, { useState } from "react";
import {
  FormGroup,
  Input,
  InputGroup,
  Button,
  Form,
  Container,
} from "reactstrap";
import { v4 } from "uuid";

const TodoForm = ({addtodo}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") return alert("Empty Todo");

    const newTodo = {
      todoString,
      id: v4(),
    };
    addtodo(newTodo);
    setTodoString("");
  };

  const [todoString, setTodoString] = useState("");
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Enter a Todo.."
            value={todoString}
            onChange={(e) => setTodoString(e.target.value.trimLeft())}
          />
          <Button className="success">Add Todo</Button>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
