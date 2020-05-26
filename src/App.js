import React, {Component} from 'react';
import './App.css';
import Todo from './components/todo.js'

class App extends Component {
  constructor(){
    super();
    this.todos = ["Go to market", "Buy food", "Make dinner"];
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h2>
            App ToDoList
          </h2>      
          <Todo todos={this.todos} />       
        </header>
      </div>
    );
  }
  
}

export default App;
