  import React, {Component} from 'react';
  import '../App.css';
  import {details} from '../details.json';
  import FormTask from './FormTask';
  import Navigation from './Navigation';


  class Logic extends Component{

  constructor(){

    super();
    this.state={
      details,
    };
    this.handleAddDetail = this.handleAddDetail.bind(this);

}

handleAddDetail(detail) {
  this.setState({
    details: [...this.state.details, detail]
  })
}


removeDetail(index){
if(window.confirm('¿Are you sure to remove?'))
{
  this.setState({
    details: this.state.details.filter((e,i)=>{
  return i !== index
  })
  })
}
}

toggle(index) {
  console.log(this.state.details[index]);

  var show = document.getElementById("card" + index);

  if (this.state.details[index].estado) {
    show.style.display = "none";
    this.state.details[index].estado = false;
  } else {
    show.style.display = "";
    this.state.details[index].estado = true;
  }
}

    render() {


      const details = this.state.details.map((detail, i) => {

          return (
            <div className="col-md-4" key={i}>
            <div className="mt-4">

              <div className="card">
              <div className="card-header">
              <h3>  {detail.title} </h3>
              </div>
              <div  className="card-body" id={"card" + i} style={{display: 'none'}}>
                <p style={{textAlign: 'justify'}}>{detail.description}</p>
                <p><b>{detail.dateCreated}</b></p>
                </div>
                <div className="card-footer">

                <button className="btn btn-danger mr-2" onClick={this.toggle.bind(this, i)}>Show</button>

                <button className="btn btn-danger"
                onClick={this.removeDetail.bind(this, i)}>
               Delete
               </button>
                </div>
              </div>
            </div>
            </div>


          )
        })

        return (
      <div className="App">

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-12">
              <div className="row">
              {details}
              </div>
              <div className="col-md-4 mt-4" style={{marginLeft: 370,}}>
              <FormTask onAddDetail={this.handleAddDetail}>
              </FormTask>
            </div>
            </div>
          </div>
          </div>
        </div>


    );


      }
    }

    const mountNode = document.getElementById('app');
    export default Logic;
