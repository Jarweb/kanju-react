import {createStore, applyMiddleware} from 'redux'
import {combineReducers} from 'redux-immutable'
import thunk from 'redux-thunk'

import home from '../redux-reducers/home.js'
import movieCat from '../redux-reducers/movieCat.js'
import movieYear from '../redux-reducers/movieYear.js'
import movie from '../redux-reducers/movie.js'

const reducer = combineReducers({
	home,
	movieCat,
	movieYear,
	movie
})

const middleware = [thunk]
const store = createStore(reducer, applyMiddleware(...middleware))

export default store