import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form} from 'react-bootstrap'
import queryString from'query-string'
import 'tachyons'
import request from 'request'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Sign extends Component{
constructor(){
  super()
  this.state={
    email:'',
    password:''
  }
}

 

  componentDidMount(){
 
    const params=queryString.parse(this.props.location.search);
    console.log(params.email)

     this.setState({
      email:params.email,
      password:params.password
     })
  }
  onchange=async()=>{

    let user={
      email:this.state.email,
      password:this.state.password
    }
   const url=`https://lokesh26-task-manager.herokuapp.com/users/login`
    request({url,json:true,method:'POST',body:JSON.stringify(user),headers:{ 'Content-Type':'application/json;charset=utf-8'}},(error,body)=>{
       if(error){

       }
       if(body){
         if(body.token)
        localStorage.setItem('jwt',body.token)
       }
    })
  

     
    
  } 
  
    

render(){
  
        return(
          <div >
           <h2 className="tc ma-10  br5 pa3 ">TASK-MANAGER</h2>
           <div className="flex items-center text-muted"  >
                 <div className="pa20" ></div>
            <Form className="tc bg-light-green dib br5 pa3 ma5  bw2 shadow-5  mw5 vh-10  center  pa3   "> 
                  <Form.Group controlId="formBasicEmail" >
              <Form.Label>Email address</Form.Label>
              <Form.Control name='email' type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>
            <Link to="/tasks">
            <Button variant="light" type="submit" className="ma2" onClick={this.onchange} >
              Login
            </Button>
           </Link>
            <Link to='/signup'>
            <Button variant="light"className="ma2" type="submit" >
              SignUp
            </Button>
            </Link>
           
          </Form>
          </div>
          </div>
        );
          }  
}

    


export default withRouter(Sign);