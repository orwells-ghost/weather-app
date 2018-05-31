import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "32e3d4474d07771e549b172d48c217ee";

class App extends React.Component {
    getWeather = async () => {
        const api_call = await fetch(`http://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${API_KEY}`);
        const data = await api_call.json();
        console.log(data);
    }
    render() {
        return (
            <div>

                <Titles />
                <Form getWeather={this.getWEather}/>
                <Weather />

            </div>
        );
    }
};

export default App;
