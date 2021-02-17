import React from 'react'
import styles from './About.module.css'

export const About = () => {
    return (
        <div className={styles.cont}>
            <div className={styles.container}>
                <div className={styles.df}>
                    <span className={styles.card__title}>About:</span>
                </div>
                <div className={styles.card__info}>
                    <div>Bienvenidos a esta app, realizada con la tecnologia de React.</div>
                    <div>Ahora que estoy estudiando react he visto la facilidad que es realizar una pagina con lo ultimo en tecnologia. Por ello, aprovechando al maximo esta libreria, y con la ayuda de Henry, se hizo esta App que nos muestra la temperatura y algunos datos del clima de una ciudad a vuestra eleccion.</div>

                </div>
            </div>
        </div>
    )
}
