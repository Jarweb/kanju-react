import React from 'react'
import {Link} from 'react-router-dom'

const Year = ({year}) => {

	const timeItem = year.map((item, index) => 
		<Link to={`/year/${item.year}`} className="nav-time" key={index}>{item.year}</Link>
	)

	return (
		<div className="nav-time-wrap">
			<div className="nav-time-title">发布年份</div>
			<div className="nav-time-inner">
				{timeItem}
			</div>
		</div>
	)
}

export default Year