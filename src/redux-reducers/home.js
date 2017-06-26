const initState = {
	cat: [],
	year: [],
	movieHot: [],
	movieHotPage: 1,
	movieRecent: [],
	movieRecentPage: 1,
	movieRecomment: []
}

const home = (state = initState, action = {}) => {
	switch(action.type){
		case 'FETCHCAT':
			return {...state, cat: action.cat}
		break;
		case 'FETCHYEAR':
			return {...state, year: action.year}
		case 'FETCHMOVIEHOT':
			return {...state, movieHot: action.movieHot}
		case 'UPDATEMOVIEHOTPAGE':
			return {...state, movieHotPage: action.page}
		case 'FETCHMOVIERECENT':
			return {...state, movieRecent: action.movieRecent}
		case 'UPDATEMOVIERECENTPAGE':
			return {...state, movieRecentPage: action.page}
		case 'FETCHMOVIERECOMMENT':
			return {...state, movieRecomment: action.movieRecomment}
		default:
			return state
	}
}

export default home