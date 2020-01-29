import React from "react";
import { TodosList } from "../TodosList/TodosList";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./todos.css";

export const Todos = ({ data, deleteTask }) => {
  return (
    <TransitionGroup component="ul" className="todo">
      {data.map(task => (
        <CSSTransition key={task.id} timeout={1000} classNames="item">
          <TodosList key={task.id} task={task} deleteTask={deleteTask} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
