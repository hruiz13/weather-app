import React from 'react'
import { useParams } from 'react-router-dom';
import styles from './Ciudad.module.css'
import { FaTemperatureLow, FaWind, FaCloudversify } from 'react-icons/fa'
import { WiNightCloudy } from "react-icons/wi";
import { IoMdLocate } from 'react-icons/io'
import { useSelector } from 'react-redux';


export const Ciudad = () => {

    const { cities, grados } = useSelector(state => state.wh);

    const { id } = useParams();
    const city = cities.find(city => city.id === Number.parseInt(id))
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
        longitud: city.coord.lon
    };

    const convert = (grados, temp) => {
        if (!grados) {
            return Math.floor(temp) + "°C"
        } else {
            const formula = Math.floor((temp * 9 / 5) + 32);
            return formula + "°F"
        }
    }
    //const city = {}
    return (
        <div className={styles.ciudad}>
            <div className={styles.container}>
                <div className={styles.df}>
                    <span className={styles.card__title}>{ciudad.name}</span>
                    <img className={styles.card__bandera} src={`https://www.countryflags.io/${ciudad.pais}/shiny/64.png`} alt="{ciudad.name}" />
                </div>
                <div className={styles.card__info}>
                    <div><FaTemperatureLow /> Temperatura: {convert(grados, ciudad.temp)}</div>
                    <div><FaCloudversify /> Clima: {ciudad.weather}</div>
                    <div><FaWind /> Viento: {ciudad.wind} km/h</div>
                    <div><WiNightCloudy /> Cantidad de nubes: {ciudad.clouds}</div>
                    <div><IoMdLocate /> Latitud: {ciudad.latitud}º</div>
                    <div><IoMdLocate /> Longitud: {ciudad.longitud}º</div>
                </div>
            </div>
        </div>
    )
}
