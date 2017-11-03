import React from 'react';
import ReactDOM from 'react-dom';
import { addPostService } from '../actions/actionCreators';
import {connect} from 'react-redux'
import { FormGroup, FormControl, ControlLabel, Button, Input } from 'react-bootstrap';

class AddPost extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
            title:"",
            author:"",
            img:"",
            body:"",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    renderComment(comment,i){
        return(
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment" onClick={this.props.removeComment.bind(null,this.props.params.postId,i)}>&times;</button>
                </p>
            </div>
        )
    }

    handleChange(e) {
        var change = {};
        change[e.target.name] = e.target.value;
        this.setState(change)
    }

    handleSubmit(e){
        e.preventDefault();
        var data = new FormData();
        var fileUploadDom = ReactDOM.findDOMNode(this.fileUpload);
        var img = fileUploadDom.files[0];
        data.append('photo',img);
        data.append('title',this.state.title);
        data.append('author',this.state.author);
        data.append('body',this.state.body);
        this.props.addPostService(data);
        this.setState({title: '',author: '',body: ''});
    }

    render(){
        return(
            <div className="form-container">
                <h1>{this.state.title}</h1>
                <h3>{this.state.author}</h3>
                <p>{this.state.body}</p>
                <form encType='multipart/form-data' ref="postForm" className="post-form" onSubmit={ this.handleSubmit }>
                    <FormGroup controlId="formBasicText">
                      <ControlLabel>Title</ControlLabel>
                      <FormControl
                        type="text"
                        name="title"
                        value={this.state.title}
                        placeholder="Enter Title"
                        onChange={(e) => {this.handleChange(e)}}
                      />
                      <ControlLabel>Author</ControlLabel>
                      <FormControl
                        type="text"
                        name="author"
                        value={this.state.author}
                        placeholder="Enter Author"
                        onChange={(e) => {this.handleChange(e)}}
                      />
                      <ControlLabel>File</ControlLabel>
                      <FormControl
                        type="file"
                        name="file"
                        ref={(ref) => this.fileUpload = ref}
                      />
                    </FormGroup>
                    
                    <FormGroup controlId="formControlsTextarea">
                       <ControlLabel>Enter Body</ControlLabel>
                        <FormControl 
                            componentClass="textarea" 
                            placeholder="textarea" 
                            type="text" 
                            name="body" 
                            value={this.state.body} 
                            onChange={(e) => {this.handleChange(e)}}>
                        </FormControl>
                    </FormGroup>

                    <Button type="submit">
                      Submit
                    </Button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        fs:"fds"
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addPostService: (data) => dispatch(addPostService(data))
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(AddPost);
