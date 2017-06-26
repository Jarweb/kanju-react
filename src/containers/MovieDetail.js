import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchMovieDetail} from '../redux-actions/index.js'
import {Layout, Tabs, Spin} from 'antd'
import './MovieDetail.css'
const { Header,Content} = Layout


class MovieDetail extends Component {
	componentDidMount() {
		const {dispatch, match} = this.props 
		console.log(match)
		dispatch(fetchMovieDetail({id: match.params.id}))
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.match.params.id != this.props.match.params.id) {
			this.props.dispatch(fetchMovieDetail({id: nextProps.match.params.id}))
		}
	}

	render() {
		const {status, movie, comments, hotComments, movieRelated} = this.props 

		let obj = movie.download_links && JSON.stringify(movie.download_links.join(' '))
		

		return (
			<Layout style={{minHeight: '100vh', background: '#404040'}}>
				<Header><Link to="/" className="logo">一起看美剧</Link></Header>
				{status === 'success' &&
					<div className="movie-head">
						{movie.poster && <img src={'http://51kanmeiju.com' + movie.poster}/>}
						<div className="movie-desc">
							<div className="movie-title">{movie.name}</div>
							<div className="movie-tip">{movie.enname}</div>
							<div className="movie-tip">
								{movie.categories && movie.categories.map(item =>
									<span key={'cat' + item.id}>{item.name}</span>
								)}
							</div>
						</div>
					</div>
				}
				{status == 'success' &&
					<div className="movie-tab-wrap">
						<Tabs tabBarStyle={{background: '#404040'}} type="card">
						    <Tabs.TabPane tab="影剧资料" key="1">
						    	<div className="movie-detail">{movie.content}</div>
						    </Tabs.TabPane>
						    <Tabs.TabPane tab="热门评论" key="2">
						    	<div className="movie-comment">
						    		<div className="comment-title">用户评论</div>
						    		<div>
						    			{comments.map(item =>
						    				<div
						    					className="comment-item" 
						    					key={'com' +item.id}>
						    					<span className="comment-text">{item.nickname}:</span>
						    					<span className="comment-text">{item.comment}</span>
						    					<span className="comment-time">{item.create}</span>
						    				</div>
						    			)}
						    		</div>
						    		{hotComments.length > 0 &&
						    			<div className="comment-title">用户评论</div>
						    		}
						    		{hotComments.map(item =>
						    			<div 	
						    				className="comment-item"
						    				key={'hotcom' + item.id}>
						    				<span className="comment-text">{item.nickname}:</span>
						    				<span className="comment-text">{item.comment}</span>
						    				<span className="comment-time">{item.create}</span>
						    			</div>
						    		)}
						    	</div>
						    </Tabs.TabPane>
						    <Tabs.TabPane tab="下载链接" key="3">
						    	<div className="movie-downlink">

						    	</div>
						    </Tabs.TabPane>
						</Tabs>
					</div>
				}
				{status == 'success' &&
					<div className="movie-related">
						相关推荐:
						<div 
							style={{width: movieRelated.length* 100 + 100}}
							className="movie-related-inner">
							{movieRelated.map((item,index) =>
								<div 
									key={'related' + item.id + index}
									className="movie-related-inner-item">
									<Link to={`/movieDetail/${item.id}`}>
										<img src={'http://51kanmeiju.com' + item.poster} />
									</Link>
									<div className="related-title ellipse">{item.name}</div>
								</div>
							)}
						</div>
					</div>
				}
				{status == 'loading' &&
					<div className="loading"><Spin size="large" /></div>
				}
			</Layout>
		)
	}
}

const mapState = state => {
	const {status, movie, movieRelated, comments, hotComments} = state.get('movie')
	return {
		status,
		movie,
		movieRelated,
		comments,
		hotComments
	}
}

export default connect(mapState)(MovieDetail)