const initState = {
	movieCat: [],
	page: 1,
	status: 'loading'
}

const movieCat = (state = initState, action = {}) => {
	switch(action.type) {
		case 'FETCHMOVIECATSTART':
			return {...state, status: 'loading'}
		break;
		case 'FETCHMOVIECAT':
			return {...state, movieCat: action.movieCat, status: 'success'}
		break;
		case 'UPDATECATMOVIEPAGE':
			return {...state, page: action.page}
		break;
		case 'FETCHMOVIECATERR':
			return {...state, status: 'fail'}
		break;
		default: 
			return state
	}
}

export default movieCat