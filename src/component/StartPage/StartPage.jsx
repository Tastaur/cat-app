import React from 'react'
import startImg from './images.jpg'
import s from './StartPage.module.css'
import Preloader from '../Preloader/Preloader'

const StartPage = (props) => {
  return <div>
    {props.cat.firstChange ? <img src={startImg} className={s.img}/> : <img src={props.cat.url} className={s.img}/>}
    {props.cat.waiting ? <Preloader/> : <button onClick={props.getCatUrl}
                                                className={s.btn}
    > {props.cat.firstChange ? 'Get kitty' : 'More kitty'}</button>}

  </div>
}

export default StartPage
