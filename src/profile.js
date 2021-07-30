import React from 'react'
class Profil extends React.Component {
    constructor (props){
      super (props) 
        this.state = {
           fullname: "Molk Naddari" ,
            bio: "Hi , i'm a devlopper full stack" ,
             profession:"devlopper" ,
              image:"http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQUIaqU4ZvlJ6XPwJ_NH7-W3ijDJW1Y3PD8rDNzD5Ppczd26piRojK6PWydndSG" ,
               count : 0
             }
      
    }
  
   componentDidMount(){
    setInterval(() => {
        this.setState ({
            count: this.state.count +1
        })},1000)
   }
  

         
   
   
   
     render() {
       return (
          <div>
              <span className="countt">{this.state.count}</span>
               <h1 style={{color: "pink"}}> {this.state.fullname}</h1>
          <p style={{color: "purple"}}> {this.state.bio} </p>
          <h1 style={{color: "pink"}}> {this.state.profession} </h1>
          <img src={this.state.image}/>
          
           </div>
    
        
       )
     }
   } 
   export default Profil