import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    if (this.props.todo.completed) {
      return {
        textDecoration: "line-through"
      };
    } else {
      return {
        textDecoration: "none"
      };
    }
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div className="container">
        <div style={this.getStyle()} className="light-blue">
          <p>
            <label>
              <input
                type="checkbox"
                onChange={this.props.markComplete.bind(this, id)}
              />
              <span></span>
            </label>{" "}
            {title}
            <button
              onClick={this.props.delTodo.bind(this, id)}
              className=" waves-effect btn-small red right"
            >
              delete
            </button>
          </p>
        </div>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
