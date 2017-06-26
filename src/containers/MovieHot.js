import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Pagination} from 'antd'
import {fetchMovieHot} from '../redux-actions/index.js'
import './MovieHot.css'

class MovieHot extends Component{
	onChange = (page) => {
		const {dispatch} = this.props 
		dispatch(fetchMovieHot({page}))
	}
	
	render() {
		const {movieHot} = this.props

		return (
			<div className="hot-wrap">
				<div className="hot-wrap-title">热门美剧</div>
				<div className="hot-body-wrap">
					{movieHot.map(item =>
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
	const {movieHot, page} = state.get('home')
	return {
		movieHot,
		page
	}
}

export default connect(mapState)(MovieHot)