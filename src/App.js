import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Radium,{StyleRoot} from 'radium';

import Person from './Person/Person'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
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
      backgroundColor:'green',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',
      color:'white',
      // ':hover':{
      //   backgroundColor:'lightgreen',
      //   color:'black'
      // }
    };
    let persons=null;
    if(this.state.showPerson){
       persons=(
        <div>
          {this.state.persons.map((person,index)=>{
             return  <ErrorBoundary 
             key={person.id}>
               <Person
             click={()=>this.deletePersonHandler(index)} 
             name={person.name} 
             age={person.age}
          
             changed={(event)=>this.nameChangerHandler(event,person.id)}/>
             </ErrorBoundary>
            
             
          })}
        
  
        </div> 

       )

  
       style.backgroundColor='red'  
      //  style[':hover']= {
      //   backgroundColor:'salmon', 
      //   color:'black'
      // }
       
    }

    let classes=[];
    if(this.state.persons.length<=2)
      classes.push('red');
    if(this.state.persons.length<=1)
      classes.push('bold');
    

    return (
      // <StyleRoot>
      <div className="App">
      <h1 >Hello,this my first react app</h1>
      <p className={classes.join(' ')}> This is Working </p>
      <h2>this subtitle</h2>
      <button style={style}
      onClick={this.togglePersonshandler} 
      type="">
      Switch Name</button>
    
      {persons}
      
    
      
      </div>
      // </StyleRoot>
    );

    // return (React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello,this my first react app')));
  }
}

// export default App;
export default App;
