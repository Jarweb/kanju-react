const initState = {
	movie: {},
	status: 'loading',
	comments: [],
	hotComments: [],
	movieRelated: []
}

const movie = (state = initState, action = {}) => {
	switch(action.type) {
		case 'FETCHMOVIESTART':
			return {...state, status: 'loading'}
		break;
		case 'FETCHMOVIE':
			return {...state, movie: action.movie, status: 'success'}
		break;
		case 'FETCHMOVIEERR':
			return {...state, status: 'fail'}
		break;
		case 'FETCHMOVIERELATED':
			return {...state, movieRelated: action.movieRelated}
		break;
		case 'FETCHCOMMENTS':
			return {...state, comments: action.comments}
		case 'FETCHHOTCOMMENTS':
			return {...state, hotComments: action.hotComments}
		default: 
			return state 
	}
}

export default movie