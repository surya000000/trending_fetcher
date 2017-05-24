import React from 'react';

function Languages(props){
  const programmingLanguages = ['All', 'C', 'Ruby', 'Javascript', 'Python', 'Java', 'C++',
                     'Swift'];

  return(<ul className='programming-languages'>
         {programmingLanguages.map(function (language) {
         return(<li key = {language}
                    onClick = {() => { props.updateLanguage(language) }}
                    className = { language == props.selected && 'active' }>
                    {language}
                </li>)
       })}
     </ul>
   )
}
export default Languages;
