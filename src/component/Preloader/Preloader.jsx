import React from 'react'
import preloader from './Bars-1s-200px.gif'
import s from './Preloader.module.css'

const Preloader = (props) =>{
  return <div className={s.preloader}>
    <img src={preloader} alt='' className={s.img}/>
  </div>
}

export default Preloader
