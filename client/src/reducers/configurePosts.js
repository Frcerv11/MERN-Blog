let uniqueKey = 0;
function configurePosts(state = {},action){
	switch(action.type){
		case 'ADD_POST':
			return {
					...state,
					posts:[action.post.data,...state.posts]
			}
			break;
		case 'LOAD_DATA_SUCCESS':
			return{
				posts:action.post,    
            };
            break;
		default:
			return state;
	}
}

export default configurePosts;





