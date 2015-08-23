import React from 'react';
import {RouteHandler} from 'react-router';
import Navbar from './Navbar';

class App extends React.Component {
  render() {
    return (
      <html>
      <head>
        <meta charSet='utf-8'/>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge'/>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
        <title>Masters of Code 2015</title>
        <link rel='stylesheet' href='http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css'/>
        <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Montserrat:400,700'/>
        <link rel='stylesheet' href='/css/bootstrap.min.css'/>
        <link rel='stylesheet' href='/css/main.css'/>
      </head>
      <body>
      <Navbar />
      <RouteHandler />
      <script src='/js/jquery.min.js'></script>
      <script src='/js/bootstrap.min.js'></script>
      <script src='/js/bundle.js'></script>
      </body>
      </html>
    );
  }
}

export default App;