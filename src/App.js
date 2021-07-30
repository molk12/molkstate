import React from "react"
import "./App.css";
import Profil from "./profile";
//initialisation du state
class App extends React.Component {
 constructor (props){
   super (props) 
     this.state = {
     show:false
          }
   
 }
Toggle =() => {
  this.setState ({
  show :!this.state.show
  } )

}

  render() {
    return (
      <div className="descr" >
       <button onClick={this.Toggle}> SHOW ME PROFIL </button>
     {
       this.state.show && <Profil/> 
     }
  
     
      
      </div>
     
    )
  }
} 
export default App