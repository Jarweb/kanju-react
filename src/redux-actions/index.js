import * as api from '../utils/api.js'

function receiveCat(cat) {
	return {
		type: 'FETCHCAT',
		cat
	}
}
function receiveCatErr() {

	return {
		type: 'FETCHCATERR',

	}
}

function receiveYear(year) {
	return {
		type: 'FETCHYEAR',
		year
	}
}

function receiveYearErr() {

	return {
		type: 'FETCHYEARERR',

	}
}

function receiveMovieHot(movieHot) {
	return {
		type: 'FETCHMOVIEHOT',
		movieHot
	}
}

function receiveMovieHotErr() {
	return {
		type: 'FETCHMOVIEHOTERR'
	}
}

function receiveMovieRecent(movieRecent) {
	return {
		type: 'FETCHMOVIERECENT',
		movieRecent
	}
}

function receiveMovieRecentErr() {
	return {
		type: 'FETCHMOVIERECENTERR',
	}
}

function receiveMovieRecomment(movieRecomment) {
	return {
		type: 'FETCHMOVIERECOMMENT',
		movieRecomment
	}
} 

function receiveMoiveRecommentErr() {

	return {
		type: 'FETCHMOVIERECOMMENTERR'
	}
}

export const fetchIndex = (payload) => (dispatch) => {
	// dispatch(fetchStart())
	api.getCat()
		.then(res => dispatch(receiveCat(res.data.data)))
		.catch(err => dispatch(receiveCatErr(err)))
	api.getYear()
		.then(res => dispatch(receiveYear(res.data.data)))
		.catch(err => dispatch(receiveYearErr(err)))
	api.getMovieHot(payload.page)
		.then(res => dispatch(receiveMovieHot(res.data.data.list)))
		.catch(err => dispatch(receiveMovieHotErr(err)))
	api.getMovieRecent(payload.page)
		.then(res => dispatch(receiveMovieRecent(res.data.data.list)))
		.catch(err => dispatch(receiveMovieRecentErr(err)))
	api.getMovieRecomment()
		.then(res => dispatch(receiveMovieRecomment(res.data.data.list)))
		.catch(err => dispatch(receiveMoiveRecommentErr(err)))
}



function receiveMovieCatStart() {
	return {
		type: 'FETCHMOVIECATSTART'
	}
}

function receiveMovieCat (movieCat) {
	return {
		type: 'FETCHMOVIECAT',
		movieCat
	}
}

function receiveMovieCatErr(err) {

	return {
		type: 'FETCHMOVIECATERR',
		err
	}
}
function updateMovieCatPage(page) {
	return {
		type: 'UPDATECATMOVIEPAGE',
		page
	}
}
export const fetchMovieCat = (payload) => (dispatch) => {
	dispatch(updateMovieCatPage(payload.page))
	dispatch(receiveMovieCatStart())
	api.getCatMovie(payload.id, payload.page)
		.then(res => dispatch(receiveMovieCat(res.data.data.list)))
		.catch(err => dispatch(receiveMovieCatErr(err)))
}

function updateMovieYearPage(page) {
	console.log(page)
	return {
		type: 'UPDATEMOVIEYEARPAGE',
		page
	}
}

function receiveMovieYear(movieYear) {
	return {
		type: 'FETCHMOVIEYEAR',
		movieYear 
	}
}
function receiveMovieYearStart() {
	return {
		type: 'FETCHMOVIEYEARSTART'
	}
}
function receiveMovieYearErr(err) {
	return {
		type: 'FETCHMOVIEYEARERR',
		err
	}
}
export const fetchMovieYear = (payload) => (dispatch) => {
	console.log(payload)
	dispatch(updateMovieYearPage(payload.page))
	dispatch(receiveMovieYearStart())
	api.getYearMovie(payload.year, payload.page)
		.then(res => dispatch(receiveMovieYear(res.data.data.list)))
		.catch(err => dispatch(receiveMovieYearErr(err)))
}

function updateMovieHotPage(page) {
	return {
		type: 'UPDATEMOVIEHOTPAGE',
		page
	}
}
export const fetchMovieHot = (payload) => (dispatch) => {
	let page = payload.page
	dispatch(updateMovieHotPage(page))
	api.getMovieHot(page)
		.then(res => dispatch(receiveMovieHot(res.data.data.list)))
		.catch(err => dispatch(receiveMovieHotErr(err)))
}

function updateMovieRecentPage(page) {
	return {
		type: 'UPDATEMOVIERECENTPAGE',
		page
	}
}

export const fetchMovieRecent = (payload) => (dispatch) => {
	console.log(payload)
	let page = payload.page
	dispatch(updateMovieHotPage(page))
	api.getMovieRecent(page)
		.then(res => dispatch(receiveMovieRecent(res.data.data.list)))
		.catch(err => dispatch(receiveMovieRecentErr(err)))
}


function receiveMovieStart() {
	return {
		type: 'FETCHMOVIESTART'
	}
}
function receiveMovie(movie){
	return {
		type: 'FETCHMOVIE',
		movie
	}
}
function receiveMovieErr(err) {
	return {
		type: 'FETCHMOVIEERR',
		err
	}
}
function receiveMovieRelated(movieRelated){
	return {
		type: 'FETCHMOVIERELATED',
		movieRelated
	}
}
function receiveMovieRelatedErr(err) {
	return {
		type: 'FETCHMOVIERELATEDERR',
		err
	}
}
function receiveMovieComments(comments) {
	return {
		type: 'FETCHCOMMENTS',
		comments
	}
}
function receiveMovieCommentsErr(err) {
	return {
		type: 'FETCHCOMMENTSERR',
		err
	}
}
function receiveMovieHotComments(hotComments){
	return {
		type: 'FETCHHOTCOMMENTS',
		hotComments
	}
}
function receiveMovieHotCommentsErr(err){
	return {
		type: 'FETCHHOTCOMMENTSERR',
		err
	}
}
export const fetchMovieDetail = (payload) => dispatch => {
	dispatch(receiveMovieStart)
	api.getMovieDetail(payload.id)
		.then(res => dispatch(receiveMovie(res.data.data)))
		.catch(err => dispatch(receiveMovieErr(err)))

	api.getMovieRelated(payload.id, 1)
		.then(res => dispatch(receiveMovieRelated(res.data.data.list)))
		.catch(err => dispatch(receiveMovieRelatedErr(err)))

	api.getMovieComments(payload.id, 1)
		.then(res => dispatch(receiveMovieComments(res.data.data)))
		.catch(err => dispatch(receiveMovieCommentsErr(err)))

	api.getMovieHotComments(payload.id, 1)
		.then(res => dispatch(receiveMovieHotComments(res.data.data)))
		.catch(err => dispatch(receiveMovieHotCommentsErr(err)))
}	