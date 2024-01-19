import styles from "./style.module.css";
import { useState } from "react";
import TodoItem from "./TodoItem";
import Form from "./Form";
import Footer from "./Footer";
export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const completedTodos = todoList.filter((todo) => todo.done).length;
  const totalTodos = todoList.length;

  return (
    <div>
      <Form todoList={todoList} setTodoList={setTodoList} />
      {/* {todoList.map((todoItem) => (
        <h3>{todoItem}</h3>
      ))} */}
      <TodoItem todoList={todoList} setTodoList={setTodoList} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
}
