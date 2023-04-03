import { CircularProgress, Slide, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
import rainy from './images/rainy.jpg'
import clear from './images/clear.jpg'
import bg from './images/bg.jpg'
import spring from './images/spring.jpg'


const temp = {}
function App() {
  const [cityName, setCityName] = useState("London");
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [background, setBackground] = useState(`${clear}`);

  const back = [ rainy, clear, bg, spring ]; 

  // utilizing use effect.
  useEffect(() => {
    
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=189271b827844bff7388350c44848615&units=metric`
    )
      .then((res) => {
        if (res.status === 200) {
          error && setError(false);
    
          return res.json();
        } else {
          throw new Error("City not found");
        }
      })
      .then((data) => {
        setData(data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));

      //changeBackground(data.main.humidity, data.wind.speed, data.main.temp); 
      

  }, [cityName, error]);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setCityName(e.target.value);
      setInputText("");

    } 

  };

  const changeBackground = ( humid, wind, deg) => { 

    if  ( humid > 50 && wind  < 5 ) { 
      const newBack = back.map( ele => spring )
      setBackground ( newBack.filter ((ele) => ele === spring )); 

    } else if ( humid > 70 && deg  < 5) { 
      const newBack = back.map( ele => rainy )
      setBackground ( newBack.filter ((ele) => ele === rainy )); 

    } else { 
      const newBack = back.map( ele => clear )
      setBackground ( newBack.filter ((ele) => ele === clear )); 
    } 

    console.log (data.main.humidity )
    console.log( data.main.temp )
    console.log( data.wind.speed)

  }; 

  

  return (
    <div className="bg_img" style={{

      background: `url(${background}) no-repeat center center/cover`
    }}>
    
      {!loading ? (
        <>
          <TextField
            variant="filled"
            label="Enter Location"
            className="input"
            error={error}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleSearch}
          />
          <h1 className="city">{data.name}</h1>
          <div className="group">
            <img
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt=""
            />
            <h1>{data.weather[0].main}</h1>
          </div>

          <h1 className="temp">{data.main.temp.toFixed()} °C</h1>

          <Slide direction="right" timeout={800} in={!loading}>
            <div className="box_container">
              <div className="box">
                <p>Humidity</p>
                <h1>{data.main.humidity.toFixed()}%</h1>
              </div>

              <div className="box">
                <p>Wind</p>
                <h1>{data.wind.speed.toFixed()} km/h</h1>
              </div>

              <div className="box">
                <p> Real Feel</p>
                <h1>{data.main.feels_like.toFixed()} °C</h1>
              </div>
            </div>
          </Slide>
        </>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}

export const exportData = temp;

export default App ;
