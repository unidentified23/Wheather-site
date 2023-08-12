import "./App.css";
import axios from "axios";
import { useState } from "react";
import image1 from './Images/search_icon.png'

function App() {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=570883eaff68c3b6bec1a0ed25d64ae4`;

  const SearchLocation = (event) => {
  
    event.preventDefault();
    if (location !== null) {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
    setLocation("");
    }
    else setLocation("");
  };
  const ONchange = (e) => {
    const value = e.target.value;
    setLocation(value);
  };


  if (data === null) {
    return (
      <div className="Search1">
        <h1>Search</h1>
        <form onSubmit={SearchLocation}>
          <input
            value={location}
            onChange={ONchange}
            placeholder="Enter Location"
            type="search"
            className="search2"
          />
          <button className="searchbutt2"><img src={image1} alt="but1icon" height={20} width={30}  /></button>
        </form>
      </div>
    );
  }
  return (
    <div className="App">
      <div className="Search">
        <form onSubmit={SearchLocation}>
          <input
            value={location}
            onChange={ONchange}
            placeholder="Enter Location"
            type="search"
            className="searchinput"
          />
          <button className="searchbutt" ><img src={image1} alt="but1icon" height={20} width={30}  /></button>
        </form>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}°F</h1> : null}
          </div>
          <div className="descpription">
            {data.weather ? <p>{data.weather[0].description}</p> : null}
            
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            {data.main ? (
              <p className="bold">{data.main.feels_like}°F</p>
            ) : null}
            <p>feels like</p>
          </div>
          <div className="humidity">
          {data.main ? <p className="bold">{data.main.humidity}°F</p> : null}
            <p>humidity</p>
          </div>
          <div className="Wind">
          {data.wind ? <p>{data.wind.speed}MPH</p> :null}

            <p className="Wind">wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
