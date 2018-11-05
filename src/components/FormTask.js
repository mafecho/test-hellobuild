import React, { Component } from 'react';

class FormTask extends Component {

constructor(){
  super();
  this.state={
    title: '',
    description: '',
    dateCreated: '',
    estado: false
  };
  this.handleInput = this.handleInput.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleInput(e){
const {value, name} = e.target;
  this.setState(
    {
      [name] : value
    }
  )
console.log(this.state);
}

handleSubmit (e){
e.preventDefault();
this.props.onAddDetail(this.state);
console.log("sending the data...");
}

render (){

return(

  <div className="card">
  <form className="card-body" onSubmit={this.handleSubmit}>
  <h3>Add New Card</h3>
  <div className="form-group">
  <input
    type="text"
    name="title"
    onChange={this.handleInput}
    className="form-control"
    placeholder="title"
    />
  </div>
  <div className="form-group">
  <input
    type="text"
    name="description"
    onChange={this.handleInput}
    className="form-control"
    placeholder="description"
    />
  </div>
  <div className="form-group">
  <input
    type="date"
    name="dateCreated"
    onChange={this.handleInput}
    className="form-control"
    placeholder="dateCreated"
    />
  </div>
  < button type = " submit " className = " btn btn-primary " >
             save
  < / button >

  </form>
  </div>
)}
}
export default FormTask;
