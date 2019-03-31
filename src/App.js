import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
          {title: "Go to school until 9am"},
          {title: "Buy tomatoes"},
          {title: "Pick up delivery"},
          {title: "Call Jenny"}
      ]
    };
  }

  //add list event
  /*********************************/
  addTodo = () => {

    //add
    this.state.todo.push({
        title: this.refs.newText.value
    });

    //save
    this.setState({ todo: this.state.todo });

    //initialization
    this.refs.newText.value = '';

  }
  /*********************************/


    render() {
    return (
      <div>
        <h1>ToDo APP</h1>
          <ul>
              {this.state.todo.map((todo, index) => {
                return <li key={index}>
                          <input type="button" value="x"/>{todo.title}
                       </li>
              })}

          </ul>
          <input type="text" ref="newText"/>
          <input type="button" value="add" onClick={this.addTodo}/>
      </div>
    );
  }
}

export default App;
