import React from 'react'
import styles from './Home.module.scss'

type IProps = {}

const Home: React.FC<IProps> = (props) => {
  return (
    <div className={styles.Home}>
      {"<insert something awesome here>"}
    </div>
  )
}

export default Home
