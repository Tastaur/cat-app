import React from 'react'
import startImg from './images.jpg'
import s from './StartPage.module.css'

const StartPage = (props) => {
  return <div>
       <img src={startImg} className={s.img}/>
    <button onClick={props.getCatUrl} disabled={props.cat.waiting} className={s.btn}> Get kitty</button>
  </div>
}

export default StartPage
