import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history'
import rootReducers from './reducers/index';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { fetchData } from './actions/actionCreators';
import { Provider } from 'react-redux'; 

export const history = createBrowserHistory();

const store = createStore(
	connectRouter(history)(rootReducers), 
	{},
	compose(
	    applyMiddleware(routerMiddleware(history),thunk),
	    window.devToolsExtension ? window.devToolsExtension() : f => f,
	)
);

store.dispatch(fetchData('http://localhost:4200/posts'));


export default store;