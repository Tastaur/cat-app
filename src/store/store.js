import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import {catApi} from '../API/api'
import thunkMiddleware from 'redux-thunk'

const SET_CAT_URL = 'cat/SET_CAT_URL'
const IS_WAITING = 'cat/IS_WAITING'


const initialState = {
  url: null,
  firstChange: true,
  waiting: false,
}

const catReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CAT_URL: {
      return {
        ...state,
        url: action.url,
        firstChange: action.change,
      }
    }
    case IS_WAITING: {
      return {
        ...state,
        waiting: action.waiting,
      }
    }
    default:
      return state
  }
}

export const setCatUrl = (url, change) => ({type: SET_CAT_URL, url, change})
export const isWaiting = (waiting) => ({type: IS_WAITING, waiting})


export const getCatUrl = () => async (dispatch) => {
  dispatch(isWaiting(true))
  let data = await catApi.getCat()
  dispatch(setCatUrl(data['0'].url, false))
  dispatch(isWaiting(false))

}


const reducers = combineReducers({
      cat: catReducer,
    },
)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware),
))
export default store
