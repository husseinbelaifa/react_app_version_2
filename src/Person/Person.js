 import React from 'react';
 import'./Person.css';
//  import Radium from 'radium';

 const Person=(props)=>{
  // //  const style={
  // //     '@media(min-width:500px':{
  // //       width:'450px'
  // //     }
  //  }

  const rnd=Math.random();
  if(rnd>0.7) {
    throw new Error('something went wrong');
  }
  
     return (
     
    <div className="Person" >
       <p onClick={props.click}> 
         i'm {props.name} and  i 'm 
         {props.age} years old

      </p> 
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
     )
 };
 export default Person;