import React from 'react';
import { Nav,NavItem } from 'react-bootstrap';

class Navigation extends React.Component {
	render(){
		return(
			<Nav bsStyle="pills">
                <NavItem eventKey={1} href="/">View All Posts</NavItem>
                <NavItem eventKey={2} href="/add">Add Post</NavItem>
            </Nav>
		)
	}
			
}


export default Navigation