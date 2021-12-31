import React, { Component } from "react";
import './App.css';
import './components/style.css';
import ContainerClass from './components/ComponentClass.js';
import ContainerFunctional from './components/ComponentFunction.js';

class App extends Component{
  state={
    isClass:false,
    isFunctional:false
  }
change1=()=>{
 this.setState({isFunctional:!this.state.isFunctional})
}
change2=()=>{
  this.setState({isClass:!this.state.isClass})
}
render() {
  return (
    <div >
      
        <div>
            <h1 className='fontShadow'>Styling using functional and class component</h1>
            <div className='flex center'>
                <button className='btn'onClick={this.change1}>to see styling in functional component</button>
                <button className='btn'onClick={this.change2}>to see styling in class component</button>

            </div>
          
        </div>
    

     <div className='flex center'>
       {this.state.isFunctional?
     <ContainerFunctional/>:null}
      {this.state.isClass?
     <ContainerClass/>:null}
     
     </div>
     

    </div>
  );
}
}

export default App;