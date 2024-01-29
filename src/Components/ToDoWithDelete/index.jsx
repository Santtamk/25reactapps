import React, { useState } from "react";

const TODoList = () => {
  const [addingToList, setAddingToList] = useState("");
  const [toDoLists, setToDoLists] = useState([]);

  const list = () => {
    if (addingToList !== "") {
      setToDoLists((prevToDoLists) => [...prevToDoLists, addingToList]);
      setAddingToList("");
    } else {
      alert("cannot add an empty task");
    }
  };

  const deleteFromList = (index) => {
    const updateTasks = toDoLists.filter((_, i) => i !== index);
    setToDoLists(updateTasks);
  };
  return (
    <>
      <div>To do List</div>
      <input
        type="text"
        value={addingToList}
        placeholder="Enter a new task"
        onChange={(e) => setAddingToList(e.target.value)}
      />
      <button onClick={list}>Add</button>
      <div>
        <ul>
          {toDoLists.map((toDoList, index) => (
            <li key={index}>
              {toDoList}
              <button onClick={() => deleteFromList(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TODoList;
