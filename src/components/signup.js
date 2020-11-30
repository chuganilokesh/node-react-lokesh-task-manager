import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form} from 'react-bootstrap'
import queryString from'query-string'
import 'tachyons'
//import '../App.css'

class Signup extends Component{

    onchange=()=>{
        localStorage.clear()
        const params=queryString.parse(this.props.location.search);
        console.log(params.email)
        let user={
            name:params.name,
          email:params.email,
          password:params.password
    
        }
        
        fetch(`https://lokesh26-task-manager.herokuapp.com/users`,{
          method:"POST",
          headers:{
            'Content-Type':'application/json;charset=utf-8'},
          body: JSON.stringify(user)
        }).then(response=>{
          return response.json();
        }).then(user=>{localStorage.setItem('jwt',user.token).then(()=>{<link to='/tasks'></link>})
        
       }).catch(error=>{console.log(error)});
       
    }


render(){
        return(
          <div >
            <h2 className="tc ma-10  br5 pa3 ">TASK-MANAGER</h2>
         
            <div className="flex items-center tc text-muted">
              
            <Form className="tc bg-light-green dib br5 pa3 ma5  bw2 shadow-5  mw5 vh-10  center  pa3  outline ">
                 <Form.Group >
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
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
            <Button variant="light" type="submit"  className="ma2" onClick={this.onchange}>
              SignUp
            </Button>
            </Link>
            <Link to='/'>
            <Button variant="light" type="submit" className="ma2" >
              Login
            </Button>
            </Link>
           
          </Form>
          </div>
          </div>
        );
          }  
}

    


export default withRouter(Signup);