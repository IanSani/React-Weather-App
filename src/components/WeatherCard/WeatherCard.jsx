import './WeatherCard.css';
import PropTypes from 'prop-types';  

const WeatherCard=({data})=>{
    
    return (
        <div className="weather">
            <div className="top">
                <div>
                <p className="city">{data.city}</p>
                <p className="weather-description">{data.weather[0].description}</p>
            </div>
            <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`}/>
            </div>
            <div className='bottom'>
                <p className='temperature'>{Math.round(data.main.temp)}°c</p>
                <div className='details'>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className='parameter-label'>It`s about</span>
                        <span className='parameter-value'>{Math.round(data.main.feels_like)}°c</span>
                    </div>
                    <div className="parameter-row">
                        <span className='parameter-label'>Wind</span>
                        <span className='parameter-value'>{data.wind.speed}m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className='parameter-label'>Humidity</span>
                        <span className='parameter-value'>{data.main.humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className='parameter-label'>Pressure</span>
                        <span className='parameter-value'>{data.main.pressure}%</span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

WeatherCard.propTypes = {
    data: PropTypes.shape({
        city: PropTypes.string.isRequired, // Expect 'city' to be a required string
        main: PropTypes.shape({
            temp: PropTypes.number.isRequired, // Expect 'temp' to be a required number
            humidity: PropTypes.number.isRequired, 
            feels_like:PropTypes.number.isRequired,
            pressure: PropTypes.number.isRequired,// Expect 'humidity' to be a required number
        }),
        weather: PropTypes.arrayOf(
            PropTypes.shape({
                description: PropTypes.string.isRequired, // Expect 'description' to be a required string
                icon: PropTypes.string.isRequired, // Expect 'icon' to be a required string
            })
        ),
        wind: PropTypes.shape({
            speed: PropTypes.number.isRequired, // Expect 'speed' to be a required number
        }),
    }),
};
export default WeatherCard;