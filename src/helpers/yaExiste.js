//Este helper ayuda a chequear si una ciudad (primer parametro) ya se encuentra en un array

export const yaExiste = (ciudad, cities) => {

    const element = cities.find(city => city.id === ciudad)

    if (element) {
        return true;
    } else {
        return false;
    }
}