const initState = {
	movieYear: [],
	page: 1,
	status: 'loading'
}

const movieYear = (state = initState, action = {}) => {
	switch(action.type) {
		case 'FETCHMOVIEYEARSTART':
			return {...state, status: 'loading'}
		break;
		case 'FETCHMOVIEYEAR':
			return {...state, movieYear: action.movieYear, status: 'success'}
		break;
		case 'UPDATEMOVIEYEARPAGE':
			return {...state, page: action.page}
		break;
		case 'FETCHMOVIECATERR':
			return {...state, status: 'fail'}
		break;
		default: 
			return state
	}
}

export default movieYear