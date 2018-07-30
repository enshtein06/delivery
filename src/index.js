import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

// redux thungs 
import rootReducer from './reducers';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

//Components
import HomePage from './components/Home';
import PointPage from './components/points/point';

//Layout
import Header from './layout/Header';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App>
				<Header />
				<Switch>
					<Route path="/points/:code" component={PointPage} />
					<Route path="/" component={HomePage} />
				</Switch>
			</App>
		</BrowserRouter>
		
	</Provider>, 
	document.getElementById('root')
);