import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from './imports/App';
import store from './imports/store';

// TESTING REDUX START
import { userSongs } from './imports/fakeData';
import { setUserSongs } from './imports/action';
store.dispatch( setUserSongs(userSongs) );
// TESTING REDUX ENDS




const Main = () => {
    return (
        <Provider store={store}>
          <Router history={browserHistory}>
            <Route path="/" component={App} />
          </Router>
        </Provider>
    );
};

Meteor.startup(() => {
    render(<Main />, document.getElementById('app'));
});
