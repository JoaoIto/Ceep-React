import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
    };
  }
  newNote(titulo, texto) {
    const newNote = {
      titulo,
      texto,
    };
    const newNotesArray = [...this.state.notas, newNote];
    const newState = {
      notas: newNotesArray,
    };
    this.setState(newState);
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro newNote={this.newNote.bind(this)} />{" "}
        <ListaDeNotas notas={this.state.notas} />{" "}
      </section>
    );
  }
}

export default App;
