import React from 'react';
import 'tachyons'


const Task=({description,completed})=>{
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <h3>Description</h3>
             <p>{description}</p>
            <h3>Status</h3>
              <p>{completed}</p>   
        </div>
    );
}
export default Task;