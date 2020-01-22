import React, { Component, Fragment } from "react";

export default class Todo extends Component {
  state = {
    element: "",
    items: [],
    proposition: {
      courseStatus: false,
      travailStatus: false,
      courses: ["Carottes", "Fromages", "Lait", "Eau"],
      travail: ["Préparer x pour x", "Rendre x pour x"]
    }
  };

  /*Lorsque L'input sera modifié , la propriété Name sera égale a la valeur de l'input actuel.*/
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  /* Lors du submit , on annule l'actualisation de la page avec e.preventDefault();
& on reset l'element grace à des infos Vides
& on insere les éléments dans dans items sans supprimer le reste grâce au spread operator : [...]
*/
  onSubmit = e => {
    e.preventDefault();
    this.setState({
      element: "",
      items: [...this.state.items, { element: this.state.element }]
    });
  };
  /* 
1. Dans le onClick nous avons mis le parametres index pour cibler la div
2. ici on retire la div ayant cette index
3. On renvoit le nouveau tableau dans la nouvel state
*/
  deleteItem = indexElement => {
    const arr = this.state.items;
    arr.splice(indexElement, 1);

    this.setState({
      items: arr
    });
  };

  displayCourses = () => {
    this.setState({
      proposition: {

        courseStatus: !this.state.proposition.courseStatus,
        // Utilisation du Spread Operator pour séparer CHAQUE bouton
        courses: [...this.state.proposition.courses],
        travailStatus: false,
        travail: [...this.state.proposition.travail]
      }
    });


 console.log(this.state.proposition.courseStatus)
  };
  displayTravail = () => {
    this.setState({
      proposition: {
        courseStatus: false,
        courses: [...this.state.proposition.courses],
        travailStatus: !this.state.proposition.travailStatus,
        travail: [...this.state.proposition.travail]
      }
    })

  }

  
  addInput = e => {
    this.setState({
      element: e
    });
  };


  /* 1. On parcours le param de la states : items 
  2. Comme on est en JSX on peut faire un return en balise HTML */
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
                onClick={() => this.deleteItem(index)}
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
          <h5>
            {/* {'\u00A0'} = &nbsp*/}
            Thème:{'\u00A0'}
            {/* Courses button */}
            <button onClick={() => this.displayCourses()}>Courses</button>{'\u00A0'}

            {/* Travail Button */}
            <button onClick={() => this.displayTravail()}>Travail</button>
          </h5>
          <div className="car-body">
            {/* Courses Propositions */}
            <Fragment>
              {this.state.proposition.courseStatus ? (
                <div>
                  {this.state.proposition.courses.map((el,index) => {
                    return (
                      <button key={index} onClick={() => this.addInput(el)}>{el}</button>
                    );
                  })}
                </div>
              ) : null}
            </Fragment>
            
            {/* Travail Propositions */}
            <Fragment>
              {this.state.proposition.travailStatus ? (
                <div>
                  {this.state.proposition.travail.map((el,index) => {
                    return (
                      <button key={index} onClick={() => this.addInput(el)}>{el}</button>
                    );
                  })}
                </div>
              ) : null}
            </Fragment>
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
        {/* Comme ils faut que tout soit englobé dans une balise on ajoute Fragment */}
        {this.renderTodo()}
      </Fragment>
    );
  }
}
