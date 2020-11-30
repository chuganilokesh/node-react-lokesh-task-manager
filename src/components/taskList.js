import React from 'react';
import Task from '../components/task'

const TaskList=({array})=>{

    if(array.length===0){
        return (<h3>empty</h3>);
    }
   
    else{
        const taskComponent= JSON.parse(localStorage.getItem('tasks')).map((element,i) => {
            return (<Task
                description={element.description[i]}
                completed={element.completed[i]}/>); 
        });
      return(
          <div>
              {taskComponent}
          </div>
      );
    }
   
}
export default TaskList;