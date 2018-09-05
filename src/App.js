import React from 'react';

import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "359341bb1703eb57e40f231e8591f90a";
class App extends React.Component {

  state={
  
   humidity : undefined,
  temp : undefined,
   name : undefined,
   city: undefined, 

  
  }
  

  getWeather = async (e) =>{
    e.preventDefault();
    
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;  
    const call_api = await fetch('https://samples.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}');
    const data = await call_api.json();

    this.setState({
     humidity:data.main.temp,
     temp:data.main.temp,
     city : data.name,
    });

    console.log(data);
  }

render(){
  return(

   <div>
     <Titles />
     <Form  getWeather={this.getWeather}/> <br/>
     <Weather city={this.state.city}
     temp={this.state.temp}
     humidity={this.state.temp}
     />
   </div>



  );
}

}
export default App;