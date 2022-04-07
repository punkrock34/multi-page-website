import React, {useState,useEffect,useRef} from "react";
import './todos.css'

const LocalStorageKey = 'ToDoKey';

export default function Contact() {
  const [todos, setTodos] = useState([]);
  const text = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LocalStorageKey));
    if(storedTodos) setTodos(storedTodos);
  }, [])

  useEffect(() => {
    localStorage.setItem(LocalStorageKey, JSON.stringify(todos));
  }, [todos]);

  function addToDo()
  {
    const textData = text.current.value;
    if(text.current.value === '') return;
    setTodos(prevTodos => {
      return [...prevTodos, {id: Math.random().toString(), checked: false ,text: textData}];
    });
    text.current.value = '';
  }

  function handleToDo(e)
  {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === e.target.value);
    todo.checked = !todo.checked;
    setTodos(newTodos);
  }

  function removeToDo()
  {
    const newTodos = todos.filter(todo => !todo.checked);
    setTodos(newTodos);
  }

  return (
    <div className="contact">
      <div className="row">
        <input type = "text" ref={text}></input>
        <button type = "submit" name = "submit" onClick={addToDo}>Add ToDo</button>
        <button onClick={removeToDo}>Delete Completed Todos</button>
      </div>
      <div className = "row">
        <ul>
          {todos.map(
            todo => 
              <li key={todo.id}>{todo.text}
                <input style = {{float:"left", marginRight:"10px", marginTop:"5px"}} type = "checkbox" checked = {todo.checked} onChange={handleToDo} value = {todo.id}>
                </input>
              </li>)}
        </ul>
      </div>
    </div>
  );
}
