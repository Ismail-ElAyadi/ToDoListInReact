import React, { Component, Fragment } from "react";

export default class Todo extends Component {
  state = {
    element: "",
    items: [],
    proposition:{
        courseStatus:false,
        travailStatus:false,
        courses:["Carottes","Fromages","Lait","Eau"],
        travail:["Préparer remplacer pour date","Rendre remplacer pour date"]

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
  deleteItem = (indexElement) => {
    const arr = this.state.items
    arr.splice(indexElement, 1);

    this.setState({
        items: arr
    })
  }

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
                onClick ={()=>this.deleteItem(index)}
              ></i>
            </h4>
          </div>
        </div>
      );
    });
  };

  displayCourses =()=>{
    const crsStatus = this.state.proposition.courseStatus

      this.setState({
        proposition :{
          courseStatus: !this.state.proposition.courseStatus
        }
      })
      
      console.log(crsStatus)


}

  render() {
    return (
      <Fragment>
        <div className="card my-3">
          <div className="card-header">TodoList</div>
          <h5>Propositions<button onClick={()=>this.displayCourses()}>Courses</button></h5>
          <div className="car-body">
            {" "}
            <div>
              {this.state.proposition.courseStatus ? (<h1>True</h1>):(<h1>False</h1>)}
            </div>
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
