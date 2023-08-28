import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoList from "../components/TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const inittodoList = [
    {
      id: 1,
      title: "Eat",
      status: "New",
    },
    {
      id: 2,
      title: "Sleep",
      status: "Completed",
    },
    {
      id: 3,
      title: "Code",
      status: "New",
    },
  ];

  const [todoList, setTodoList] = useState(inittodoList);
  const [filterStatus, setfilterStatus] = useState("all");
  const handletodoClick = (todo, index) => {
    // clone current array to the new one
    const newTodoList = [...todoList];
    // console.log(todo, index);

    // toggle state
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === "New" ? "Completed" : "New",
    };
    // newTodoList[index] = newTodo;

    // update state
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setfilterStatus("all");
  };

  const handleShowCompletedClick = () => {
    setfilterStatus("Completed");
  };

  const handleShowNewClick = () => {
    setfilterStatus("New");
  };

  const renderTodoList = todoList.filter(
    (todo) => filterStatus === "all" || filterStatus === todo.status
  );
  // console.log(renderTodoList);

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={renderTodoList} onTodoClick={handletodoClick} />
      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default TodoFeature;
