import WeatherDetail from "../WeatherDetails";

const DetailView = ({data}) => { 

    return ( 
        <div>
            <WeatherDetail  weatherData={data}/>
        </div>
    ); 
}; 

export default DetailView; 