import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Pagination, Spin} from 'antd'
import {fetchMovieYear} from '../redux-actions/index.js'
import './MovieHot.css'

class MovieYear extends Component {

	componentDidMount() {
		const {dispatch, match, page} = this.props
		console.log(match)
		dispatch(fetchMovieYear({year: match.params.id, page: 1}))
	}

	componentWillReceiveProps(nextProps) {
		const {dispatch, match, page} = nextProps
		if(nextProps.match.params.id != this.props.match.params.id){
			dispatch(fetchMovieYear({year: match.params.id, page: 1}))
		}
	}

	onChange = (page) => {
		const {dispatch, match} = this.props 
		dispatch(fetchMovieYear({year: match.params.id, page}))
	}

	render() {
		const {status, movieYear, match, page} = this.props
		console.log(page)
		
		return (
			<div className="hot-wrap">
				<div className="hot-wrap-title">{match.params.id}年</div>
				<div className="hot-body-wrap">
					{status == 'success' && movieYear.map(item =>
						<div
							className="hot-body-item"
							key={item.id}>
							<Link to={`/movieDetail/${item.id}`}>
								<img src={'http://51kanmeiju.com' + item.poster} />
							</Link>
							<div className="hot-body-item-title ellipse">{item.name}</div>
						</div>
					)}
					{status == 'loading' &&
						<div className="loading"><Spin size="large" /></div>
					}
					{status == 'fail' &&
						<div>err</div>
					}
				</div>

				{status == 'success' &&
					<Pagination showQuickJumper defaultCurrent={page} total={500} onChange={this.onChange} />
				}
			</div>
		)
	}	
}

const mapState = state => {
	const {movieYear, page, status} = state.get('movieYear')
	return {
		movieYear,
		page,
		status
	}
}

export default connect(mapState)(MovieYear)