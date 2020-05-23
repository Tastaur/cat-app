import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import {catApi} from '../API/api'
import thunkMiddleware from 'redux-thunk'

const SET_CAT_URL = 'cat/SET_CAT_URL'
const initialState = {
  url: null,
  firstChange: true,
}

const catReducer = (state = initialState, action)=>{
  switch (action.type) {
    case SET_CAT_URL:{
      return {
        ...state,
        url: action.url,
        firstChange: action.change,
      }
    }
    default: return state
  }
}

export const setCatUrl = (url,change) => ({type: SET_CAT_URL, url, change})

export const getCatUrl = () => async (dispatch) => {
  let data = await catApi.getCat()
    dispatch(setCatUrl(data['0'].url, false))
}






const reducers = combineReducers({
    cat: catReducer,
    }
)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));
export default store
