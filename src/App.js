import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ColorBox from "./components/ColorBox";
import Counter from "./components/Counter";
import TodoFeature from "./features/Todo/pages";
import TodoList from "./features/Todo/components/TodoList";
import { Link, NavLink, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      Home Page
      <p>
        <NavLink to="/">Home</NavLink>
      </p>
      <p>
        <NavLink to="/todos">Todos</NavLink>
      </p>
      <p>
        <NavLink to="/change">Change</NavLink>
      </p>
      <p>
        <NavLink to="/counter">Counter</NavLink>
      </p>
      <Routes>
        <Route path="/" />
        <Route path="/todos" Component={TodoFeature} />
        <Route path="/change" Component={ColorBox} />
        <Route path="/counter" Component={Counter} />
      </Routes>
    </div>
  );
}

export default App;
