//import logo from './logo.svg';
import React,{Component} from 'react';
//import './App.css';
import TaskHead from './components/taskhead'
import Sign from './components/sign'
import {Switch,Route, BrowserRouter} from 'react-router-dom'
import Signup from './components/signup'
class App extends Component{

render(){
  return(
    <BrowserRouter>
     <Switch>
     <Route exact path='/' component={Sign}></Route>
     <Route  exact path='/tasks' component={TaskHead}></Route>
     <Route exact path='/signup' component={Signup}></Route>
     </Switch>
    </BrowserRouter>
   
  );
}
}

export  default App;
