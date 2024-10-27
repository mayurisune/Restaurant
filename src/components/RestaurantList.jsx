import React, { Component } from 'react'

class RestaurantList extends Component{
  constructor(){
    super();
    this.state={
      list:null,
    }
  }
  componentDidMount()
  {
    fetch("http://localhost:3000/restaurant").then((response) =>{
      response.json().then((result)=>{
        console.warn(result);
        this.setState({list: result})
      })
    })
  }
render(){
  return (
    <div>

      <h1>RestaurantList</h1>
    
        {
         this.state.list?
         <div>
           {
            this.state.list.map((item, i)=>
              <div>
              <span>{item.id}</span>
              <span>{item.address}</span>
              <span>{item.rating}</span>
              <span>{item.email
                }</span>
              </div>)
           }
          </div>
             : 
             <p>Please wait....</p>
          
        }
         </div>
  )
}
}
export default RestaurantList