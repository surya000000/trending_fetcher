import React from 'react';

function RepoList(props){
  if(props.repos){
    return (<ul className='repo-list'>
            {props.repos.map(function(repo, index){
              return <li key={repo.name} className='trending-repos'>
                      <div>#{index+1}</div>
                      {repo.owner.name}
                    </li>
            })}
           </ul>)
  }
  else{
    return <div className='loading'><h2 className='loading-text'>Loading.......</h2></div>
  }
}

export default RepoList;
// {repo.owner.login}
// {repo.name}
// {repo.owner.login}
// {repo.stargazers}
