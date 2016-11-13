import React, { Component } from 'react';
import GitHubUser from '../services/GitHubUser';

class SearchUser extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
		e.preventDefault();

		GitHubUser.getUserInfo(this.refs.username.value).then(function(response) {
      this.props.updateUser(response.data);
    }.bind(this));

		GitHubUser.getUserRepos(this.refs.username.value).then(function(response) {
      this.props.updateRepos(response.data);
    }.bind(this));
	}

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="search-form">
          <input className="input" type="text" ref="username" placeholder="Digite o usuário + Enter" />
        </form>
      </div>
    )
  }
};

SearchUser.propTypes = {
  updateUser: React.PropTypes.func.isRequired,
  updateRepos: React.PropTypes.func.isRequired,
}

export default SearchUser;
