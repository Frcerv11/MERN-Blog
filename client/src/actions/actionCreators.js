import axios from 'axios';

export function addPost(post){
	return{
		type: 'ADD_POST',
		post
	}
}

export function addPostService(data) {
	return dispatch =>{
		axios.post('http://localhost:4200/add',data,{
    	   headers: { 'content-type': 'multipart/form-data' }
	    })
	    .then((response) => {
	      dispatch(addPost(response))
	    })
	    .catch(err => console.log(err))
	} 
}

function requestData() {
	return {type: 'REQ_DATA'}
};

function loadDataSuccess(json) {
	return{
		type: 'LOAD_DATA_SUCCESS',
		post: json
	}
};

function receiveError(json) {
	return {
		type: 'RECV_ERROR',
		data: json
	}
};

export function fetchData(url) {
	return function(dispatch) {
		dispatch(requestData());
		return axios({
			url: url,
			timeout: 20000,
			method: 'get',
			responseType: 'json'
		})
		.then(function(response) {
			const streams = response.data.map(function(stream) {
		    	return stream;
		    });
		    dispatch(loadDataSuccess(streams));
		})
		.catch(function(response){
			dispatch(receiveError(response.data));
		})
	}
};