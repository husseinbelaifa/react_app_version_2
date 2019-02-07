import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person'
class App extends Component {
  state={
    persons:[
      { id:'aze',name:'max',age:28},
      {id:'hyt',name:'mamu',age:29}  
    ],
    showPerson:false
  } 
  
  // switchNameHandler=(newname)=>{
  //   // console.log('was Clicked')
  //   // this.state.persons[0].name='maximulum' 
  //   this.setState({ 
  //     persons:[
  //       { name:newname,age:28},
  //       {name:'mamu',age:29}  
  //     ] 
  //   })
  // }
  nameChangerHandler=(event,id)=>{
    const person=this.state.persons.find(p=>{
      return p.id===id;
    });
    person.name=event.target.value;

    console.log(person);
    const persons=[...this.state.persons];
    persons[id]=person;
    this.setState({
      persons:persons
    }
 
    )
  }
  togglePersonshandler=()=>{
   
    const doesshow=this.state.showPerson;
    console.log(doesshow);
    this.setState({showPerson:!doesshow});
  

  }

  deletePersonHandler=(PersonIndex)=>{
  const Persons=[...this.state.persons];
  Persons.splice(PersonIndex,1);
  this.setState({persons:Persons});

  }

  
  render() {
    const style={
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };
    let persons=null;
    if(this.state.showPerson){
       persons=(
        <div>
          {this.state.persons.map((person,index)=>{
             return  <Person
             click={()=>this.deletePersonHandler(index)} 
             name={person.name} 
             age={person.age}
             key={person.id}
             changed={(event)=>this.nameChangerHandler(event,person.id)}/>
            
             
          })}
        
  
        </div> 

       )

  
         
       
    }
    return (
      <div className="App">
      <h1>Hello,this my first react app</h1>
      <h2>this subtitle</h2>
      <button style={style}
      onClick={this.togglePersonshandler} 
      type="">
      Switch Name</button>
    
      {persons}
      
    
      
      </div>
    );

    // return (React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello,this my first react app')));
  }
}

export default App;
