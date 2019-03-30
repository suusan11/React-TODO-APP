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
          <input type="text"/>
          <input type="button" value="add"/>
      </div>
    );
  }
}

export default App;
