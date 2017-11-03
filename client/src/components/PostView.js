import React from 'react';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { fetchData } from '../actions/actionCreators';

class PostView extends React.Component {
	 constructor(props) {
        super(props);
    }

	render(){

		return(
			<div>
				fds
				{this.props.match.params.id}
			</div>
		)
	}
} 

const mapStateToProps = state => ({
	...state.configurePosts
});



export default connect(mapStateToProps)(PostView);