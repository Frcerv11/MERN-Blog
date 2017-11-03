import React from 'react';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { fetchData } from '../actions/actionCreators';
import { Panel, Image, Grid, Row, Col } from 'react-bootstrap'

class Posts extends React.Component {
	 constructor(props) {
        super(props);
        this.renderPost = this.renderPost.bind(this);
    }


	renderPost(i,post){
		const title = (
		  <Link to={"post/"  + post._id}><h3>{post.title}</h3></Link>
		);
		return(
			<Col key={i}>
			<Panel  header={title}>
				<p>By: {post.author} </p>
				<a href={"http://localhost:4200/uploads/"  + post.img}>
					<Image src={"http://localhost:4200/uploads/"  + post.img} width={200} height={200}  />
				</a>
				<p>Body: {post.description}</p>
			</Panel>
			</Col>
		)
	}
	render(){
		const posts = this.props.posts || {};
		console.log(posts)
		return(
			<Grid>
				<Row>
					{Object.keys(posts).map(i => {
						return this.renderPost(i,posts[i])
					})}
				</Row>
			</Grid>
		)
	}
} 

const mapStateToProps = state => ({
	...state.configurePosts
});



export default connect(mapStateToProps)(Posts);