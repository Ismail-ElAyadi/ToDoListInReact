import React, { Component, Fragment } from "react";

export default class Todo extends Component {
  state = {
    element: "",
    items: []
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      element: "",
      items: [...this.state.items, { element: this.state.element }]
    });
  };

  renderTodo = () => {
    return this.state.items.map((item, index) => {
      return (
        <div className="card mb-3" key={index}>
          <div className="card-body">
            <h4>
              {item.element}
              <i
                className="fas fa-times"
                style={{
                  color: "red",
                  float: "right",
                  cursor: "pointer"
                }}
              ></i>
            </h4>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <Fragment>
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
        {this.renderTodo()}
      </Fragment>
    );
  }
}
