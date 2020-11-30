import React,{Component} from 'react';
import TaskForm from './taskForm'
import TaskList from './taskList'
import 'tachyons'
import Create from '../components/createtask'
class TaskHead extends Component{
constructor(){
    super()
    this.state={
        tasksarray:[]
    }
}
  myGFG=(JS_Obj)=> { 

    var obj = JSON.parse(JS_Obj); 

    var res = []; 

      

    for(var i in obj) 

        res.push(obj[i]); 

        return res;

}

ronbuttonclick= ()=>{
        fetch(`https://lokesh26-task-manager.herokuapp.com/tasks`,{
           mehtod:"GET",
           headers:{
             'Content-Type':'application/json;charset=utf-8',
             'Authorization':'Bearer '+localStorage.getItem('jwt')}
           
         }).then(response=>{
           return response.json();
         }).then(task=>{this.setState({tasksarray:this.res(task)})});
         }



         //task=>localStorage.setItem('tasks',JSON.stringify(task))

         render(){
 return <div className="tc" >
      <h2 className="tc ma-10  br5 pa3 ">TASK-MANAGER</h2>
     <TaskForm ronbuttonclick={this.ronbuttonclick}/>
     <Create/>
     {/* <TaskList array={this.state.tasksarray}/> */}
     
 </div>
 }
}
export default TaskHead;