import React, { Component } from 'react';
import Room from './containers/RoomView.js';


class App extends Component {
    render() {
        return (
            <div className="ui container">
              <Room />
            </div>
        );
    }
}

export default App;
