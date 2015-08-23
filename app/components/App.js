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
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-xs-8 vcenter">
              <h2>MasterCard Masters of Code 2015: San Francisco</h2>
              <p>Powered by <strong>Node.js</strong>, <strong>Socket.IO</strong>, <strong>MongoDB</strong> and (Isomorphic) <strong>React</strong> with <strong>Flux</strong> architecture.</p>
              <p>APIs used: <strong>MasterCard</strong> and <strong>Twitter Digits</strong>.</p>
              <p>You may view the <a href='https://github.com/sahat/newedenfaces-react'>Source Code</a> behind this project on GitHub.</p>
              <p>© 2015 <a href="https://github.com/sahat">Sahat Yalkabov</a>, <a href="https://github.com/clarle">Clarence Leung</a>, <a href="https://github.com/michaelchum">Michael Ho Chum</a>.</p>
            </div>
            <div className="col-xs-4 text-center vcenter"><img className="mc-logo" src="/img/mastercard.png"/>
            </div>
          </div>
        </div>
      </footer>
      <script src='/js/jquery.min.js'></script>
      <script src='/js/countUp.min.js'></script>
      <script src='/js/bootstrap.min.js'></script>
      <script src='/js/bundle.js'></script>
      </body>
      </html>
    );
  }
}

export default App;