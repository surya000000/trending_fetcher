// Importing react and react-dom modules
import React from 'react';
import Trending from './Trending';
// class component App
export default class App extends React.Component {
 render(){
   return(
          <div className='container'>
            <Trending />
          </div>
         )
 }
}
