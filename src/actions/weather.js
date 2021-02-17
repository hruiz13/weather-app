import Swal from "sweetalert2";
import { yaExiste } from "../helpers/yaExiste";
import { types } from '../types/types'

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

export const findCity = (city, cities) => {
    return async (dispatch) => {
        try {
            const resp = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            const body = await resp.json();
            if (body.cod === 200) {
                body.date = new Date().toLocaleTimeString('en-US');
                if (yaExiste(body.id, cities)) {
                    Swal.fire('La ciudad ya esta guardada', '', 'success')
                } else {
                    dispatch(saveCity(body))
                    Swal.fire('Ciudad encontrada!', '', 'success')
                }
            } else {
                Swal.fire('Ciudad no encontrada', body.msg, 'error');
            }
        } catch (error) {
            console.log(error)
        }

    }
}

export const delCity = (id) => ({
    type: types.deleteCity,
    payload: id
})

export const grados = () => ({
    type: types.grados
})



const saveCity = (city) => ({
    type: types.saveCity,
    payload: city

})