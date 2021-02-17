import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Cards.module.css'
import { Card } from './Card'

export default function Cards() {

  const { cities, grados } = useSelector(state => state.wh)

  return <div className={styles.cards}>
    {
      cities?.map((city) => {
        return (
          <Card key={city.id} city={city} />
        )
      })
    }
  </div>
};