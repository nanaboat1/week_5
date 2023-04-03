import React, { Component, useEffect, useState} from 'react'; 
import { useParams } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import moment from 'moment';
import './WeatherDetails.css'
import { exportData } from './App'


const WeatherDetail= () => { 

    const params = useParams(); 
    const [fullDetails, setFullDetails] = useState(null); 
    const [data, setData] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const cityName = "Paris";
    console.log(cityName)

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
          
    
      }, [])

    return (  // TODO : fix the state and dependency issue.

        <div> 
            <Card>
             <Card.Content>
                <Card.Header className="header">City Name: {`Paris`}</Card.Header>
                <p>Temprature: {`10 `} &deg;C</p>
                <p>Sunrise: {`7:25AM`}</p>
                <p>Sunset: {`8:25PM`}</p>
                <p>Description: {`Clear`}</p>
                <p>Humidity: {`51 `} %</p>
                <p>Day: {moment().format('dddd')}</p>
                <p>Date: {moment().format('LL')}</p>
             </Card.Content>
            </Card>

    </div>

    ); 

};

export default WeatherDetail; 



