// Importing react and react-dom modules
import React from 'react';
import Languages from './Languages'

export default class Trending extends React.Component{
  constructor(props){
    super(props);
    this.state = { selected: 'All' };
  }

  updateState(language){
    this.setState(function(){
      return { selected: language }
    });
  }

  render(){
    return(<div>
            <Languages selected={this.state.selected}
                       updateLanguage={this.updateState.bind(this)} />
           </div>)
  }
}
