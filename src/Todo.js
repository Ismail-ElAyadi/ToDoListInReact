import React, { Component } from "react";

export default class Todo extends Component {
    state = {
        element:''
    }
  render() {
    return (
      <div className="card my-3">
        <div className="card-header">TodoList</div>
        <div className="car-body">
          {" "}
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="element">Chose à faire</label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="element"
                onChange={this.onChange}
                value={this.state.element}
              />
              <button className="btn btn-primary btn-block">
                Ajouter à la liste
              </button>
            </div>
          </form>{" "}
        </div>
      </div>
    );
  }
}
