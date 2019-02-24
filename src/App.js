import React, { Component } from 'react';
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

  handleDragStart=(e,task)=>{
    // console.log("Drag start");
    e.dataTransfer.setData("id",task.name);
    // e.target.style.opacity = "0.4";
  }


  handleOnDragOver=(e)=>{
    //This makes item droppable
    e.preventDefault();
    // console.log("Drag over");
    
  } 
  
  handleOnDrop=(e,category)=>{
    e.preventDefault();
    let taskName= e.dataTransfer.getData("id");
    let tasks= this.state.tasks.filter(task=>{
      if(task.name===taskName)
      task.category=category;
      return task;
    });
    // console.log(taskName);
    // console.log(category);
    // console.log(e.target.className);
    // console.log("Dropped");
    // console.log(tasks);
    // update state

    this.setState({...this.state, tasks });
    
  }
  handleAdd=(e,category)=>{
    let newItem= prompt("haha","tata");
    // console.log(newItem);
    let newTasks= [...this.state.tasks,{name:newItem,category:category}];
    // console.log(newTasks);
    this.setState({
      tasks: newTasks
    });
  }

  render() {
    let tasks={
      todo:[],
      doing:[],
      done: []
    }

    this.state.tasks.forEach(task => {
      tasks[task.category].push(
        <div className="task" key={task.name} draggable onDragStart={e=>this.handleDragStart(e,task)}>
          <p className="task-text">{task.name}</p>
          <div className="task-controls">
            {/* Add delete functionality */}
          </div>
        </div>
      );  
    });

    return (
      <div className="App">
        <div className="credit">
          <div className="social">
          <a href="https://linkedin.com/in/ishubhamprakash/" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://github.com/i-shubhamprakash" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-github"></i>
          </a>
          <a href="https://twitter.com/iSuvm" rel="noopener noreferrer" target="_blank">
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
              <Todo 
              tasks={tasks} 
              handleOnDragOver={e=>this.handleOnDragOver(e)} 
              handleOnDrop={e=>this.handleOnDrop(e,"todo")}
              handleAdd={e=>this.handleAdd(e,"todo")}/>
            </div>
            <div className="col col-12 col-md-4">
              <Doing 
              tasks={tasks} 
              handleOnDragOver={e=>this.handleOnDragOver(e)} 
              handleOnDrop={e=>this.handleOnDrop(e,"doing")}
              handleAdd={e=>this.handleAdd(e,"doing")}/>
            </div>
            <div className="col col-12 col-md-4">
              <Done 
              tasks={tasks} 
              handleOnDragOver={e=>this.handleOnDragOver(e)} 
              handleOnDrop={e=>this.handleOnDrop(e,"done")}
              handleAdd={e=>this.handleAdd(e,"done")}/>
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
      <div className="task-container"
        onDragOver={e=> this.props.handleOnDragOver(e)}
        onDrop={e=>this.props.handleOnDrop(e)}>
          <p>TODO</p><hr/>
          <div className="todo-container task-holder">
            {this.props.tasks.todo}
          </div>
          <div className="add-task" onClick={e=>{this.props.handleAdd(e)}}>
            <i className="fa fa-plus"></i>
          </div>
      </div>
    );
  }
}
class Doing extends Component {
  render(){
    return(
      <div className="task-container"
        onDragOver={e=> this.props.handleOnDragOver(e)}
        onDrop={e=>this.props.handleOnDrop(e)}>
          <p>DOING</p><hr/>
          <div className="doing-container task-holder">
            {this.props.tasks.doing}
          </div>
          <div className="add-task" onClick={e=>{this.props.handleAdd(e)}}>
            <i className="fa fa-plus"></i>
          </div>
      </div>
    );
  }
}
class Done extends Component {
  render(){
    return(
      <div className="task-container"
        onDragOver={e=> this.props.handleOnDragOver(e)}
        onDrop={e=>this.props.handleOnDrop(e)}>
          <p>DONE</p><hr/>
          <div className="done-container task-holder">
              {this.props.tasks.done}
          </div>
          <div className="add-task" onClick={e=>{this.props.handleAdd(e)}}>
            <i className="fa fa-plus"></i>
          </div>
      </div>
    );
  }
}