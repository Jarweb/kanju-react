import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Link} from 'react-router-dom'

import './HomePanel.css'
const base_url = 'http://51kanmeiju.com'


const HomePanel = ({movieHot, movieRecent, movieRecomment}) => {
	const panelItem = (title, data = []) => {
		return (
			<div className="home-panel-wrap">
				<div className="home-panel-head">
				{title}
				<span className="home-panel-head-tip">共{data.length}</span>
				</div>
				<div className="home-panel-body">
					<div 
						style={{width: (data.length + 1) * 100 + 'px'}}
						className="home-panel-body-inner">
						{data.map(item =>
							<div
								className="home-panel-item"
								key={item.id}>
								<Link to={`/movieDetail/${item.id}`}>
									<img src={`${base_url}${item.poster}`} />
								</Link>
								<div className="home-panel-item-title ellipse">{item.name}</div>
								<div className="home-panel-item-time">{item.from_year}</div>
							</div>
						)}
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className="home-wrap">
			{panelItem('热门美剧', movieHot)}
			{panelItem('本周最新', movieRecent)}
			{panelItem('推荐', movieRecomment)}
		</div>
	)
}


export default HomePanel