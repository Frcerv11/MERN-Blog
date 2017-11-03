// let's go!
import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router'
import { history } from '../store';
import { connect } from 'react-redux'
//import css
import '../index.css';
// import App from './components/App';
import Header from './Header';
import Posts from './Posts';
import AddPost from './AddPost';
import Navigation from './Navigation';
import PostView from './PostView';



export default class App extends React.Component {

    render() {
        return (
        <ConnectedRouter history={history}>
            <div>
                <Header/>
                <Navigation />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Posts} />
                        <Route exact path="/add" component={AddPost} />
                        <Route path="/view" render={() => (<div>Miss</div>)} />
                        <Route path="/post/:id" component={PostView}/>
                    </Switch>
                </div>
            </div>
        </ConnectedRouter>
        );
    }
}

