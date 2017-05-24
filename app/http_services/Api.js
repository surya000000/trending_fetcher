import Axios from 'axios';

module.exports = {
  trendingRepos: function (language){
    var encodeURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'
                                      + language + '&sort=stars&order=desc&type=Repositories')

   return Axios.get(encodeURI).then(function(response){
     return response.data.items;
   });
  }
}
