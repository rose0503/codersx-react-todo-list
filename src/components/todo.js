import React , {Component} from 'react';

class Todo extends Component {
  render(){
    return (
        <div className="todo">      
            <ul>
                {/* {items} */}
                {this.props.todos.map((value) => {
                return <li>{value}</li>
                })}
            </ul>                        
          </div>
      );  
  }
    
}

export default Todo;
