import React from 'react'
import {Link} from 'react-router-dom'
import {Menu, Icon} from 'antd'

const Cat = ({cat}) => {
	const catItem = cat.map(item =>
		<Menu.Item key={item.id}>
			<Icon type="user" />
			<Link to={`/cat/${item.id}`} className="nav-text">{item.name}</Link>
		</Menu.Item>
	)

	return (
		<Menu
			theme="dark"
			mode="inline"
			>
			<Menu.Item key="01">
				<Icon type="user" />
				<Link to='/' className="nav-text">首页</Link>
			</Menu.Item>
			<Menu.Item key="02">
				<Icon type="user" />
				<Link to="/hot" className="nav-text">热门美剧</Link>
			</Menu.Item>
			<Menu.Item key="03">
				<Icon type="user" />
				<Link to="/recent" className="nav-text">本周最新</Link>
			</Menu.Item>
			<Menu.ItemGroup title="美剧类目">
				{catItem}
			</Menu.ItemGroup>
		</Menu>
	)
}

export default Cat