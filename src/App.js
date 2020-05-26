import React from 'react'
import './App.module.css'
import {connect, Provider} from 'react-redux'
import store, {getCatUrl} from './store/store'
import StartPage from './component/StartPage/StartPage'
import s from './App.module.css'

const App = (props) => (
    <div>
      <div className={s.mainContainer}>
        <span className={s.title}>No politics,no CoVId-19, no war, only Kitty</span>
        <StartPage {...props}/>
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
