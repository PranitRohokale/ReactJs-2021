import React from "react";
import { FaCheckDouble } from "react-icons/fa";
import { ListGroup, ListGroupItem } from "reactstrap";

const Todos = ({ todos, markComplete }) => {
  return (
    <ListGroup className="mt-5 mb-3 items">
      {todos.map((t) => (
        <ListGroupItem key={t.id}>
          {t.todoString}
          <span className="float-right mx-5" onClick={() => markComplete(t.id)}>
            <FaCheckDouble />
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};
export default Todos;
