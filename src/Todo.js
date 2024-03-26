import React, { useEffect, useRef, useState } from "react";
import "./Todo.css";
import Todoitem from "./Todoitem";

function Todo() {
  const inputref = useRef("");
  const [data, setdata] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("todo"));
    return storedData || []; // Provide a default value of [] if storedData is null
  });
  const [count, setCount] = useState(0);

  const submit = () => {
    if (inputref.current.value !== "") {
      console.log(inputref.current.value);
      const newdata = { text: inputref.current.value, display: "", no: count };
      setCount(count + 1);
      setdata(prevdata => [...prevdata, newdata]);
      inputref.current.value = "";
    }
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(data));
  }, [data]);

  return (
    <div className="todo-main">
      <div className="todo-header">
        <h1>To Do List</h1>
      </div>
      <div className="todo-add-task">
        <input type="text" ref={inputref} placeholder="Enter the task" className="todo-input" />
        <div className="todo-add-buttton" onClick={submit}>ADD</div>
      </div>
      <div className="todo-list">
        {data.map((item, index) => (
          <Todoitem key={index} text={item.text} no={item.no} display={item.display} setdata={setdata} />
        ))}
      </div>
    </div>
  );
}

export default Todo;
