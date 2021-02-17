import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findCity } from '../../actions/weather';
import Styles from './SearchBar.module.css'

export default function SearchBar() {

  const [city, setCity] = useState("")
  const { cities } = useSelector(state => state.wh)

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(findCity(city, cities))
    setCity("")
  }

  const handleChange = (e) => {
    setCity(e.target.value);
  }

  return (<div className={Styles.search}>
    <form onSubmit={handleSubmit}>
      <input className={Styles.search__input} type="text" id="ciudad" placeholder="Ciudad..." onChange={handleChange} value={city} />
      <button className={Styles.search__button} type="submit">Agregar</button>
    </form>
  </div>)
};