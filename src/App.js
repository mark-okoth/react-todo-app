import React, { Component } from "react";
import Header from './components/layout/Header';
import Todos from "./components/Todos";
import AddTodo from './components/AddTodo';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "make some movements",
        completed: false
      },
      {
        id: 2,
        title: "watch united",
        completed: true
      },
      {
        id: 3,
        title: "buy some airtime",
        completed: false
      }
    ]
  };

  //check if its complete
  markComplete = id => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id===id){
        todo.completed = !todo.completed
      }
      return todo
    }) });
  };
  //deleting

  delTodo = (id)=>{
   
    this.setState({todos:[...this.state.todos.filter(todo => 
      todo.id !==id)]})
  }
//add todo
  addTodo =(title)=>{
    const newTodo = { 
      id: 4,
      title,
      completed: false
    }
     this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render() {
    return (
      <div className="App">
       <Header/>
      
       <div className="container">
       <AddTodo addTodo = {this.addTodo} />
       </div>
        <Todos todos={this.state.todos} markComplete={this.markComplete} 
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
