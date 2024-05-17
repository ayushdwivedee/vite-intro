import { useState } from "react";

import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);

  return <>
  <input type="text" placeholder="add your task" onChange={(e)=>setTodo(e.target.value)} />
  <div>
    Your task : { todo}
  </div>
  </>;
}

export default App;
