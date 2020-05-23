import React from 'react'
import './App.css'
import {connect, Provider} from 'react-redux'
import store, {getCatUrl} from './store/store'

const App = (props) => (
    <div className="App">
      <img src={props.cat.url}/>
      {props.cat.firstChange ? <button onClick={props.getCatUrl}> Get kitty</button> :
          <button onClick={props.getCatUrl}> More kitty</button>}
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
