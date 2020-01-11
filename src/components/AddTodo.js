import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: ""
  };
  onSubmit = (e)=>{
      e.preventDefault();
      this.props.addTodo(this.state.title)
      this.setState({title: ''})
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit = {this.onSubmit}>
        <div className="input-field">
          <input
            type="text"
            name="title"
            required
            value={this.state.title}
            onChange={this.onChange}
            placeholder="Add an activity ...."
          />
          <input
            type="submit"
            className=" waves-green green btn-small"
            value="Add"
          />
        </div>
      </form>
    );
  }
}

export default AddTodo;
