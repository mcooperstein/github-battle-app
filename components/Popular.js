import React from 'react';
import PropTypes from 'prop-types';
import api from '../utils/api';

const SelectLanguage = (props) => {
    return (
      <ul className="languages">
        {props.languages.map((lang)=>{
          return (
            <li style={lang===props.selectedLanguage ? {color: '#d0021b'}:null}
                key={lang}
                onClick={props.onSelect.bind(null,lang)
            }>
              {lang}
            </li>
            )
        })}
      </ul>
    )
  }

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  languages: PropTypes.array.isRequired
}

const RepoGrid = (props) => {
  return(
    <ul className="popular-list">
        {props.repos.map((repo,index)=>{
          return(
          <li key={repo.name} className="popular-item">
            <div className="popular-rank">
              #{index + 1}
            </div>
            <ul className="space-list-items">
              <li>
                <img className="avatar" src={repo.owner.avatar_url} alt={`Avatar for ${repo.owner.login}`}/>
              </li>
              <li><a target="_blank" href={repo.html_url}>{repo.name}</a></li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count}</li>
            </ul>
          </li>
          )
        })}
    </ul>
  )
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired
}

class Popular extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedLanguage: 'All',
      repos: null
    };
    this.updateLanguage = this.updateLanguage.bind(this)
  }
  componentDidMount(){
    // AJAX
    this.updateLanguage(this.state.selectedLanguage);
  }
  updateLanguage(lang){
    this.setState(function(){
      return {
        selectedLanguage: lang,
        repos: null
      }
    });

    api.fetchPopularRepos(lang).then((repos)=>{
      //console.log(repos)
      this.setState({repos})
    })
    console.log(this.state.repos)
  }
  render(){
    let languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
    return (
      <div>
        <SelectLanguage languages={languages} selectedLanguage={this.state.selectedLanguage} onSelect={this.updateLanguage}/>
        {this.state.repos===null?
          <p>Loading...</p>:
          <RepoGrid repos={this.state.repos} />
        }
      </div>
    )
  }
}

export default Popular;
