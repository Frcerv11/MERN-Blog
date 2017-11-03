import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import configurePosts from './configurePosts';

const rootReducers = combineReducers ({
	//because posts object exist in initial state, it also must be a reducer.
	routing:routerReducer,
	configurePosts
})

export default rootReducers;