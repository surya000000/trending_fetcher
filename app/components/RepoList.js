import React from 'react';

function RepoList(props){
  if(props.repos){
    return(<ul className='repo-list'>
            {props.repos.map(function(repo, index){
             return(<div className='row'>
                      <li key={repo.name} className='trending-repos'>
                        <a href={repo.html_url} target='_blank'>
                          <li key={index}> {"#"+(index+1)+" "+repo.name}</li>
                          <li key={repo.owner.avatar_url}>
                            <img src={repo.owner.avatar_url} className='repo-owner-img'/>
                          </li>
                          <li key={repo.stargazers_count} className='owner-details'>
                            {"Star: "+repo.stargazers_count}
                          </li>
                          <li key={repo.owner.login}className='owner-details'>
                            {"Github : " + repo.owner.login}
                          </li>
                        </a>
                      </li>
                    </div>)})}
          </ul>)
  }
  else{
    return <div className='loading'><h2 className='loading-text'>Loading.......</h2></div>
  }
}

export default RepoList;
