import React from 'react'
import s from '../StartPage/StartPage.module.css'

const KittyPage = (props) => {
  return <div>
    <img src={props.cat.url} className={s.img}/>
    <button onClick={props.getCatUrl} disabled={props.cat.waiting} className={s.btn}> More kitty</button>
  </div>
}

export default KittyPage
