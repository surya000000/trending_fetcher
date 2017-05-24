// Importing react and react-dom modules
import React from 'react';
import Languages from './Languages';
import Api from '../http_services/Api';

export default class Trending extends React.Component{
  constructor(props){
    super(props);
    this.state = { selected: 'All', repos: null };
  }

  componentDidMount(){
    this.updateState(this.state.selected);
  }

  updateState(language){
    this.setState(function(){
      return { selected: language, repos: null }
    });
    Api.trendingRepos(language).then(function(repos){
      this.setState(() => {
        return { repos: repos }
      })
    }.bind(this));
  }

  render(){
    return(<div>
            <Languages selected={this.state.selected}
                       updateLanguage={this.updateState.bind(this)} />
           </div>)
  }
}
