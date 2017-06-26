import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Pagination, Spin} from 'antd'
import {fetchMovieCat} from '../redux-actions/index.js'
import './MovieHot.css'

class MovieCat extends Component {
	constructor(props) {
	  	super(props);
	}

	componentDidMount() {
		const {dispatch, match, page} = this.props 
		dispatch(fetchMovieCat({id: match.params.id, page}))
	}

	componentWillReceiveProps(nextProps) {
		const {dispatch, match, page} = nextProps
		if(nextProps.match.params.id != this.props.match.params.id){
			dispatch(fetchMovieCat({id: match.params.id, page}))
		}
	}

	onChange = (page) => {
		const {dispatch, match} = this.props 
		dispatch(fetchMovieCat({id: match.params.id, page}))
	}

	render() {
		const {status, movieCat, cat, match, page} = this.props
		let arr = cat.filter(item => item.id == Number(match.params.id))
		let title = arr[0] && arr[0].name

		return (
			<div className="hot-wrap">
				<div className="hot-wrap-title">{title}</div>
				<div className="hot-body-wrap">
					{status == 'success' && movieCat.map(item =>
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
					{status == 'loading' &&
						<div className="loading"><Spin size="large" /></div>
					}
					{status == 'fail' &&
						<div>请求出错</div>
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
	const {movieCat, page, status} = state.get('movieCat')
	const {cat} = state.get('home')
	return {
		movieCat,
		cat,
		page,
		status
	}
}

export default connect(mapState)(MovieCat)
