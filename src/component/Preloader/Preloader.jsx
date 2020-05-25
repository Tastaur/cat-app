import React from 'react'
import kitty from './364.gif'
import s from './Preloader.module.css'

const Preloader = (props) =>{
  return <div className={s.preloader}>
    <img src={kitty} alt='' className={s.img}/>
  </div>
}

export default Preloader
