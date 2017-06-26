import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route,Switch, Link} from 'react-router-dom'

import {fetchIndex} from '../redux-actions/index.js'
import {Layout, Menu, Icon, Spin } from 'antd'
import './App.css'

import Cat from '../components/cat.js'
import Year from '../components/year.js'
import HomePanel from '../containers/HomePanel.js'
import MovieHot from '../containers/MovieHot.js'
import MovieRecent from '../containers/MovieRecent.js'
import MovieCat from '../containers/MovieCat.js'
import MovieYear from '../containers/MovieYear.js'
import MovieDetail from '../containers/MovieDetail.js'
const { Header, Footer, Sider, Content } = Layout

class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const {dispatch} = this.props
		dispatch(fetchIndex({page: 1}))
	}

	render() {
		const {cat, year, movieHot, movieRecent, movieRecomment, location, match} = this.props 
		let isMatch = location.pathname.split('/')[1] == 'movieDetail' ? true : false

		return (
			<div>
			    {isMatch 
			    ? <Route path="/movieDetail/:id" component={MovieDetail} /> 

			    : <Layout style={{ minHeight: '100vh' }}>
				    <Sider 
		    		    	trigger={null}
		    		    	collapsible={false}
		    		    	collapsedWidth="64">
		    		    	<Link to="/" className="logo">一起看美剧</Link>
		    	    		<Cat {...this.props} />
		    		    	<Year {...this.props} />
	    		    </Sider>
	    		    <Layout>
	    			    <Header className="header"></Header>
	    			    <Content style={{padding: 24, background: '#fff', minHeight: 280 }}>
	    			    	<Switch>
	    				    	<Route exact path="/" render={() => <HomePanel {...this.props}/>} />
	    				    	<Route path="/hot" render={() => <MovieHot {...this.props} />} />
	    				    	<Route path="/recent" render={() => <MovieRecent {...this.props} />} />
	    				    	<Route path="/cat/:id" component={MovieCat} />
	    				    	<Route path="/year/:id" component={MovieYear} />
	    				    </Switch>
	    			    </Content>
	    		    </Layout>
	    		   </Layout>
			    }
			   
			</div>
		)
	}
}

const mapState = state => {
	const {cat, year, movieHot, movieRecent, movieRecomment} = state.get('home')
	return {
		cat,
		year: year.filter(item => item.year > 1999),
		movieHot,
		movieRecent,
		movieRecomment
	}
}

export default connect(mapState)(App)