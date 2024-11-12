import { Component } from "react";
import React from "react";
class RestaurantCreate extends Component{
    constructor(){
        super();
        this.state={
        name: null,
        address: null,
        rating: null,
        email: null,

        }
    }
    create(){
        fetch('http://localhost:3000/restaurant',{
            method: "Post",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
            alert('Restarant Data add Succesfully');
            })
        })
    }
    render(){
        return(
            <div>
            <h1>Restaurant Create</h1>
            <div>
                <input onChange={(event)=>{this.setState({name : event.target.value})}} placeholder='Restaurant Name'/>
               <br></br><br></br>
               <input onChange={(event)=>{this.setState({address: event.target.value})}} placeholder="Address"/>
               <br></br><br></br>
               <input onChange={(event)=>{this.setState({rating: event.target.value})}} placeholder="rating"/>
               <br></br><br></br>
               <input onChange={(event)=>{this.setState({email: event.target.value})}} placeholder="Email"/>
               <br></br><br></br>
                <button onClick={()=>{this.create()}}>Add Restaurant</button>
            </div>
        </div>

        )
    }
}
export default RestaurantCreate