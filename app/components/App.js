// Importing react and react-dom modules
import React from 'react';
import Trending from './Trending';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
// class component App
export default class App extends React.Component {
 render(){
   return(<Router>
            <div className='container'>
              <Route path='/trending' component={Trending} />
            </div>
         </Router>)
 }
}
