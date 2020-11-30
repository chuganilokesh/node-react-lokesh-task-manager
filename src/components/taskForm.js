import React from 'react';
import 'tachyons'
import {Button} from 'react-bootstrap';


const TaskForm=({ronbuttonclick})=>{
 
    return(
        <div>
           
           <Button variant="light" type="submit" className="ma2 pa3 ba b--green bg-lightest-blue " onClick={ronbuttonclick} >
              Read Tasks
            </Button>
        </div>
    );
}
export default TaskForm;