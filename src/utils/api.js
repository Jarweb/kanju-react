import axios from 'axios'

const api = 'https://hijarlite.leanapp.cn'

export const getYear = () => {
	return axios.get(`${api}/meiju/year`)
}

export const getCat = () => {
	return axios.get(`${api}/meiju/cat`)
}

export const getYearMovie = (year, page, limit = 24) => {
	return axios.get(`${api}/meiju/yearMovie?year=${year}&limit=${limit}&page=${page}`)
}

export const getCatMovie = (id, page, limit = 24 ) => {
	return axios.get(`${api}/meiju/catMovie?id=${id}&limit=${limit}&page=${page}`)
}

export const getMovieDetail = (id) => {
	return axios.get(`${api}/meiju/movieDetail?id=${id}`)
}

export const getMovieHot = (page, limit = 24) => {
	return axios.get(`${api}/meiju/movieHot?limit=${limit}&page=${page}`)
}

export const getMovieRecent = (page, limit = 24 ) => {
	return axios.get(`${api}/meiju/movieRecent?limit=${limit}&page=${page}`)
}

export const getMovieRecomment = () => {
	return axios.get(`${api}/meiju/movieRecomment`)
}

export const getMovieRelated = (mid, page = 1, limit = 10 ) => {
	return axios.get(`${api}/meiju/movieRelated?limit=${limit}&page=${page}&mid=${mid}`)
}

export const getMovieComments = (mid, page, limit = 30 ) => {
	return axios.get(`${api}/meiju/movieComments?limit=${limit}&page=${page}&mid=${mid}`)
}

export const getMovieHotComments = (mid, page, limit = 30) => {
	return axios.get(`${api}/meiju/movieHotComments?limit=${limit}&page=${page}&mid=${mid}`)
}