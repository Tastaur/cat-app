import React from 'react'
import './App.module.css'
import {connect, Provider} from 'react-redux'
import store, {getCatUrl} from './store/store'
import Preloader from './component/Preloader/Preloader'
import StartPage from './component/StartPage/StartPage'
import KittyPage from './component/KittyPage/KittyPage'
import s from './App.module.css'

const App = (props) => (
    <div>
      {props.cat.waiting && <Preloader/>}
      <div className={s.mainContainer}>
        <span className={s.title}>No politics,no Covid, no war, only Kiitty</span>
        {props.cat.firstChange
            ? <StartPage {...props}/>
            : <KittyPage {...props}/>}
      </div>
    </div>
)

const mapStateToProps = (state) => {
  return {cat: state.cat}
}
const AppContainer = connect(mapStateToProps, {getCatUrl})(App)

const CatApp = (props) => {
  return <Provider store={store}>
    <AppContainer/>
  </Provider>
}
export default CatApp
