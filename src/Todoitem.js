import React from "react";
import "./Todoitem.css";
import tick from "./Assets/tick.png";
import NotTick from "./Assets/not_tick.png";
import cross from "./Assets/cross.png";

function Todoitem({ text, index, display, no, setdata }) {
  const handleClick = () => {
    setdata(prevData => {
      const newData = prevData.map(item => {
        if (item.no === no) {
          return { ...item, display: item.display === "" ? "line" : "" };
        }
        return item;
      });
      localStorage.setItem("todo", JSON.stringify(newData));
      return newData;
    });
  };
  const deleteHandle = (no) => {
    setdata(prevData => {
      const newData = prevData.filter(item => item.no === no);
      localStorage.setItem("todo", JSON.stringify(newData));
      return newData;
    });
  };
  
  return (
    <div className="todoitem">
      <div className="todo-item-container" onClick={handleClick}>
        {display === "" ? <img src={NotTick} alt="" /> : <img src={tick} alt="" />}
        <div className={`todo-item-text ${display}`}>{text}</div>
      </div>
      <img className="cross" src={cross} onClick={()=>{deleteHandle(no)}} alt="" />
    </div>
  );
}

export default Todoitem;
