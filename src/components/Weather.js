import React from "react";

export default class Weather extends React.Component{

    render(){
        return(
            <div>
            Humidity : {this.props.humidity}
            City: {this.props.city}
            Tempereture : {this.props.temp}
            </div>
        );
    }

}