import React , { useState } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const Add = ({addItem}) => {
    const [item, setItem] = useState("");

    const handelChange=(event)=>{
        setItem(event.target.value);
    };

  return (
    <div>
         <Form.Control size="lg" type="text" value={item} onChange={handelChange}
         style={{ height: '200px',width:'50%',marginLeft:'25%' ,marginTop:'2%',
         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.9)',textAlign:'center'}}
          placeholder=" TYPE HERE... " />
          

<Button  className="butt" variant="primary"   onClick={(e)=>{e.preventDefault();
addItem(item);setItem("");
}}
          style={{backgroundColor:' rgba(137, 43, 226, 0.61)',color:'white',borderColor:'black', boxShadow: ' 4px 4px rgba(0, 0, 0, 0.5)',marginTop:'1%',}}>
            Save Changes
          </Button>

    </div>
  )
}

export default Add