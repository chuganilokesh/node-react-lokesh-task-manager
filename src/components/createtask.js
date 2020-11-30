import React from 'react'
import { Form ,Button} from 'react-bootstrap';
import 'tachyons';

const Create =()=>{
   
    return(
        <Form className=" text-muted tc bg-light-green dib br5 pa3 ma5 grow bw2 shadow-5  mw5 vh-10  center  pa3  outline ">
        <Form.Group >
     <Form.Label>Description</Form.Label>
     <Form.Control type="text" placeholder="Enter description"  />
   </Form.Group>
   <Button variant="light" type="submit" className="ma2"  >
              Submit
            </Button>
            <Button variant="light" type="submit" className="ma2" >
              Update
            </Button>
            <Button variant="light" type="submit" className="ma2" >
              Remove
            </Button>
            

   </Form>

    );
}

export default Create;