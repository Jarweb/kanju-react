import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Pagination} from 'antd'
import {fetchMovieRecent} from '../redux-actions/index.js'
import './MovieHot.css'

class MovieRecent extends Component{

	onChange = (page) => {
		const {dispatch} = this.props
		dispatch(fetchMovieRecent({page}))
	}

	render() {
		const {movieRecent} = this.props 

		return (
			<div className="hot-wrap">
				<div className="hot-wrap-title">本周最新</div>
				<div className="hot-body-wrap">
					{movieRecent.map(item =>
						<div
							className="hot-body-item"
							key={item.id}>
							<Link to={`/movieDetail/${item.id}`}>
								<img src={'http://51kanmeiju.com' + item.poster} />
							</Link>
							<div className="hot-body-item-title ellipse">{item.name}</div>
							<div className="hot-body-item-year">{item.from_year}</div>
						</div>
					)}
				</div>
				<Pagination showQuickJumper defaultCurrent={1} total={500} onChange={this.onChange} />
			</div>
		)
	}
}


const mapState = state => {
	const {movieRecent, page} = state.get('home')

	return {
		movieRecent,
		page
	}
}

export default MovieRecent