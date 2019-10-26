import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tweets from './components/Tweets.js'
import PushNotification from './components/PushNotification.js'

function App() {
  return (
    <div className="App">
      <PushNotification/>
    </div>
  );
}

export default App;
