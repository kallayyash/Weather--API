import React from "react";
import Button from './button'
export default class Form extends React.Component{
  btnClick() {
      alert("button clicked");
  }
     
    render(){
        return(
            <form onSubmit = {this.props.getWeather}>
          <input type="text" name="city" placeholder="city.."/>
          <input type="text" name="country" placeholder="country.."/>
          {/* <button>Weather </button> */}
         <Button buttons="submit" onClick = {this.btnClick}> </Button> 
         <Nav />
          </form>
        );
    }

}

class Nav extends React.Component{
    render(){
        return(
            <h1>i am</h1>
        );
    }
}