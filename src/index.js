import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { BrowserRouter  as Router, Route } from "react-router-dom"

import store from './redux-store/store.js'
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
	<Router>
		<Provider store={store}>
			<Route component={App} />
		</Provider>
	</Router>
	, document.getElementById('root'));
registerServiceWorker();
