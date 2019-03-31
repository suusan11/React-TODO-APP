import React, { Component } from 'react';

import './App.css';

import List from './List';
import Input from './Input';

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
  addTodo = (value) => {

    //add
    this.state.todo.push({
        title: value
    });

    //save
    this.setState({ todo: this.state.todo });

    //initialization
    // this.refs.newText.value = '';

  }
  /*********************************/


  //add list event
  /*********************************/
    deleteTodo(i) {
      //delete
      this.state.todo.splice(i, 1);

      //save
      this.setState({ todo: this.state.todo });
    }
  /*********************************/


    render() {
    return (
      <div>
        <h1>ToDo APP</h1>
        <List todo={this.state.todo} deleteTodo={this.deleteTodo}/>
        <Input addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
