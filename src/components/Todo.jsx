import React, { useEffect, useState } from "react";

const Todo = () => {
  useEffect(()=>{
    localStorage.getItem(items)
  });
  const [inputData, setInputData] = useState("");

  //items are stored in array form
  const [items, setItems] = useState([]);
  const addItem = () => {
    if (!inputData) {
      alert("Please write something.")
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([allInputData, ...items]);
      setInputData("");
      localStorage.setItem(allInputData.id,items);
    }
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((element) => {
      return index !== element.id;
      localStorage.setItem(element.id,items);
    });
    setItems(updatedItems);
  };
  const deleteAll = () => {
    setItems([]);
    localStorage.getItem(items);
  };
  return (
    <div className="body">
      <div className="card-body">
        <div className="heading">
          <img
            src="https://images.pexels.com/photos/5705953/pexels-photo-5705953.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="image"
          />
          <div>Add Your Item Here..</div>
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="Add Items..."
            className="input"
            value={inputData}
            onChange={(event) => {
              setInputData(event.target.value);
            }}
            onKeyDown={(e) => {
              if (e.code === "Enter") {
                addItem();
              }
            }}
          />
          <div className="plus" onClick={addItem}>
            <i className="fa-solid fa-plus " />
          </div>
        </div>
        <div className="todo">
          {items.map((element) => {
            return (
              <div className="todos" key={element.id}>
                <div>{element.name}</div>
                <div className="flex gap-3">
                  <i
                    className="fa-solid fa-pen-to-square"
                    onClick={() => {
                      setInputData(element.name);
                      deleteItem(element.id);
                    }}
                  />
                  <i
                    className="fa-solid fa-trash-can"
                    onClick={() => {
                      deleteItem(element.id);
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="button" onClick={deleteAll}>
          Delete All
        </div>
      </div>
    </div>
  );
};

export default Todo;
