import React, { useState } from "react";
import { useEffect } from "react";
import TodoItem from "./TodoItem";

function Todolist() {
  const [todos, setTodos] = useState([
   
  ]);
  const [inputValue, setInputValue] = useState("");
  const [specialCharacters, setSpecialCharacters] = useState("/[^a-zA-Z0-9 ]/g");
  var regx = /[^a-zA-Z ]/g
  const [isCharacter, setisCharacter] = useState("");

  function addTodoFunction() {
    setTodos([
      ...todos,
      {
        name: inputValue,
        checked: false,
      },
    ]);
    setInputValue("");
  }

  function deleteFunction(name) {
    setTodos(todos.filter((todo) => todo.name !== name));
  }

  function checkFunction(name) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.name === name ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }

  useEffect(()=>{
    if(regx.test(inputValue)){
       alert("special chacter")
        setisCharacter(true)
    }else{
        setisCharacter (false)
    }
     console.log(regx.test(inputValue))
  }, [inputValue])


  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodoFunction} disabled={todos.length >= 5}>Add</button>
      {/* when i click the add button, the value inside the input will be displayed  */}

      {todos.map((todo) => {
        return (
        
          <TodoItem
            name={todo.name}
            onDelete={() => deleteFunction(todo.name)}
            onCheck={checkFunction}
            checked={todo.checked}
            key={todo.name}
          />
   
        );
      })}
    </div>
  );
}

export default Todolist;