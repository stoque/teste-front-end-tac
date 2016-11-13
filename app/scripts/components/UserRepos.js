import React, { Component } from 'react';

class UserRepos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      reposCount: 0
    }
  }

  componentWillReceiveProps(props) {
    this.setState({reposCount: props.repos.length});
  }

  render() {
    let repos = this.props.repos.map(function (repo, key) {
      return (     
        <div key={key} className="repo-item">
          <h3 className="name"><a href={repo.html_url}>{repo.name}</a></h3>
          <p className="description">{repo.description}</p>
          <span className="stars">
            {repo.stargazers_count} Stars
          </span>
          <a href={repo.html_url + '/issues'} className="button" role="button">Issues</a>
        </div>
      );
    });
    return (
      <div>
        {repos}
      </div>
    );
  }
};

export default UserRepos;
