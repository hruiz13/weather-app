import { types } from "../types/types";


const initialState = {
    cities: [],
    grados: false
}

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.saveCity:
            return {
                ...state,
                cities: [...state.cities, action.payload]
            }
        case types.deleteCity:
            return {
                ...state,
                cities: state.cities.filter(city => city.id !== action.payload)
            }
        case types.grados:
            return {
                ...state,
                grados: !state.grados
            }
        default:
            return state;
    }
}