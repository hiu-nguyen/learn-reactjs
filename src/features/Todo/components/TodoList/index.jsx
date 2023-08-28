import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./styles.scss";

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};

function TodoList({ todoList, onTodoClick }) {
  const handletodoClick = (todo, index) => {
    if (!onTodoClick) {
      return;
    } else {
      onTodoClick(todo, index);
    }
  };

  return (
    <ul className="todo-list">
      {todoList.map((todo, index) => (
        <li
          key={todo.id}
          className={classNames({
            "todo-item": true,
            Completed: todo.status === "Completed",
          })}
          onClick={() => handletodoClick(todo, index)}
        >
          {todo.title}{" "}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
