import './App.css';
import React, { useState }  from 'react';
import Tlist from './Tlist/Tlist';
import Add from './Add/Add';


const App=() =>{

const [list,setList]=useState(["item1","item2"]);
const addItem=(item)=>{
  setList([item, ...list]);
};
const deleteItem=(index) =>{
  setList(list.filter((el,i)=>i !== index));
};

  return (
    <div className="App">
      <Add addItem={addItem}/>
      <Tlist list={list} deleteItem={deleteItem}/>
    </div>
  );
}

export default App;
