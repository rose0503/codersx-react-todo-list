import React from 'react';
import logo from './logo.svg';
import './App.css';

const todos = ["Go to market", "Buy food", "Make dinner"];
// const items = []

// for (let a of todos ){
//   items.push(<li>{a}</li>)
// }
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          App ToDoList
        </p>      
        <ul>
          {/* {items} */}
          {todos.map((value) => {
            return <li>{value}</li>
          })}
        </ul>         
          
      </header>
    </div>
  );
}

export default App;
