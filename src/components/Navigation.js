import React, {Component} from 'react';
import {details} from '../details.json';
import Logic from './Logic';
import FormTask from './FormTask';


class Navigation extends Component{

constructor(){

super();
this.state={

 details

}

}

render(){

    return(

        <div className="Navigation">

        <nav className="navbar">
          <a className="navbar-brand" href="/">
            <b style={{color: 'white'}}>Cards - Test</b>
          </a>
        </nav>

        </div>


    )}
}

export default Navigation;
