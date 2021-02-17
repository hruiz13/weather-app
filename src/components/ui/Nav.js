import React from 'react'
import SearchBar from './SearchBar'
import styles from './Nav.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { grados as gr } from '../../actions/weather'

export const Nav = () => {

    const { grados } = useSelector(state => state.wh);
    const dispatch = useDispatch()


    const handleClick = () => {
        dispatch(gr())
    }
    return (
        <div className={styles.top}>
            <Link to='/' className={styles.top__title}><img className={styles.top__img} src="https://i.pinimg.com/originals/ba/66/18/ba6618ac635ea544ce59862296674d3b.png" alt="clima" />Henry - Weather app
            </Link>
            <div className={styles.top__rigth}>
                <Link className={styles.top__links} to='/about'>About</Link>
                <div onClick={handleClick} className={styles.top__grados} >
                    Ver en °{grados ? "C" : "F"}
                </div>
                <SearchBar />
            </div>
        </div >
    )
}
