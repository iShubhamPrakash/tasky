import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="header">
        <h1 className="h5"><i className="fa fa-tasks"> </i> Tasky</h1>
      </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col col-12 col-md-4">
              <Todo/>
            </div>
            <div className="col col-12 col-md-4">
              <Doing/>
            </div>
            <div className="col col-12 col-md-4">
              <Done/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Todo extends Component {
  render(){
    return(
      <div className="task-container">
        <p>TODO</p>
        <div className="todo-container">

        </div>
      </div>
    );
  }
}
class Doing extends Component {
  render(){
    return(
      <div className="task-container">
        <p>DOING</p>
        <div className="doing-container">

        </div>
      </div>
    );
  }
}
class Done extends Component {
  render(){
    return(
      <div className="task-container">
      <p>DONE</p>
      <div className="done-container">

      </div>
      </div>
    );
  }
}