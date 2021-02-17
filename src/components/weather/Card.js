import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { delCity } from '../../actions/weather';
import Styles from './Card.module.css'


const temperature = (tem = 0) => {
    if (tem <= 10) {
        return { backgroundImage: 'url("https://i.ibb.co/HCLCWrG/image.jpg")' };
    } else if (tem > 10 && tem <= 20) {
        return { backgroundImage: 'url("https://i.ibb.co/mDWbbBS/10.jpg")' };
    } else if (tem > 20 && tem <= 30) {
        return { backgroundImage: 'url("https://i.ibb.co/g98sgBx/20.jpg")' };
    } else {
        return { backgroundImage: 'url("https://i.ibb.co/pKj1HsT/30.jpg")' };
    }
}

export function Card({ city }) {
    const { grados } = useSelector(state => state.wh)

    const dispatch = useDispatch()

    const ciudad = {
        pais: city.sys.country,
        min: Math.round(city.main.temp_min),
        max: Math.round(city.main.temp_max),
        img: city.weather[0].icon,
        id: city.id,
        wind: city.wind.speed,
        temp: city.main.temp,
        name: city.name,
        weather: city.weather[0].main,
        clouds: city.clouds.all,
        latitud: city.coord.lat,
        longitud: city.coord.lon,
        time: city.date
    };


    const convert = (grados, temp) => {
        if (!grados) {
            return Math.floor(temp) + "°C"
        } else {
            const formula = Math.floor((temp * 9 / 5) + 32);
            return formula + "°F"
        }
    }

    const onClose = (id) => {

        dispatch(delCity(id))

    }




    // acá va tu código
    return <div className={Styles.card} style={temperature(ciudad.temp)}>
        <Link to={`/ciudad/${ciudad.id}`} className={Styles.card__title}>
            <span className={Styles.city}>{ciudad.name}</span>
        </Link>
        <div className={Styles.col2}>
            <button className={Styles.button} onClick={() => onClose(ciudad.id)}>X</button>
            <div className={Styles.card__data}>
                <div className={Styles.temp__number}>Temp:</div>
                <div>Min: {convert(grados, ciudad.min)}</div>
                <div>Max: {convert(grados, ciudad.max)}  </div>
                <div className={Styles.icon}>
                    <img className={Styles.icon__image} src={`http://openweathermap.org/img/wn/${ciudad.img}@2x.png`} alt={ciudad.name} />
                </div>
            </div>

            <div className={Styles.temp}>
                <div className={Styles.temp__temp}>
                    {convert(grados, ciudad.temp)}
                </div>
                <div className={Styles.temp__time}>
                    {ciudad.time}
                </div>
            </div>
        </div>

    </div>
};