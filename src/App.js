import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks:[
        {name:"Go market", category:"todo"},
        {name:"Buy food", category:"todo"},
        {name:"Eat dinner", category:"todo"},
        {name:"code", category:"doing"},
        {name:"Learn React", category:"done"},
        {name:"Do Project", category:"doing"},
        {name:"Go to sleep", category:"todo"}
      ]
    };
    // This line is important!
    // this.handleClick = this.handleClick.bind(this);
  }
  render() {
    let tasks={
      todo:[],
      doing:[],
      done: []
    }

    this.state.tasks.forEach(task => {
      tasks[task.category].push(
        <div className="task" key="task.name" draggable>
          <p className="task-text">{task.name}</p>
        </div>
      );  
    });

    console.log(tasks);

    return (
      <div className="App">
        <div className="credit">
          <div className="social">
          <a href="https://linkedin.com/in/ishubhamprakash/" target="_blank">
          <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://github.com/i-shubhamprakash" target="_blank">
          <i className="fa fa-github"></i>
          </a>
          <a href="https://twitter.com/iSuvm" target="_blank">
          <i className="fa fa-twitter"></i>
          </a>
          </div>
        </div>
      <div className="header">
        <h1 className="h5"><i className="fa fa-tasks"> </i> Tasky</h1>
      </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col col-12 col-md-4">
              <Todo tasks={tasks}/>
            </div>
            <div className="col col-12 col-md-4">
              <Doing tasks={tasks}/>
            </div>
            <div className="col col-12 col-md-4">
              <Done tasks={tasks}/>
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
        <p>TODO</p><hr/>
        <div className="todo-container task-holder">
        {this.props.tasks.todo}
        </div>
      </div>
    );
  }
}
class Doing extends Component {
  render(){
    return(
      <div className="task-container">
        <p>DOING</p><hr/>
        <div className="doing-container task-holder">
          {this.props.tasks.doing}
        </div>
      </div>
    );
  }
}
class Done extends Component {
  render(){
    return(
      <div className="task-container">
      <p>DONE</p><hr/>
      <div className="done-container task-holder">
          {this.props.tasks.done}
      </div>
      </div>
    );
  }
}