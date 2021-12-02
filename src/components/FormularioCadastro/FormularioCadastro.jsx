import React, { Component } from "react";
import "./style.css";
class FormularioCadastro extends Component {
  constructor(props){
    super(props)
    this.titulo="";
    this.texto="";
  }
  _handleChangeTitle(event){
    event.stopPropagation();
    this.titulo = event.target.value;
  }

  _handleChangeText(event){
    event.stopPropagation();
    this.texto = event.target.value;
  }_
  _newNote(event){
    event.preventDefault();
    event.stopPropagation();
    this.props.newNote(this.titulo, this.texto);
  }
  render() {
    return (
      <form 
      className="form-cadastro "
      onSubmit={this._newNote.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleChangeTitle.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleChangeText.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;