// Importing react and react-dom modules
import React from 'react';
import ReactDOM from 'react-dom';
// Importing index css inside app folder
import './index.css';


// class component App
class App extends React.Component {
 render(){
   return <h1> hello world</h1>;
 }
}

ReactDOM.render(<App />, document.getElementById('app'));
