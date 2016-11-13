import React from 'react';

import UserRepos from './UserRepos';

function UserInfo(props) {
  let userInfo = props.user ?
    (
      <div className="container">
        <div className="user-card">
          <img className="avatar" src={props.user.avatar_url} alt="avatar" />
          <h2 className="name">{props.user.name}</h2>
          <span className="user">{props.user.login}</span>
          <ul className="info-list">
            <li className="item"><a className="link" href={props.user.html_url + '/followers'}>{props.user.followers} <span>Followers</span></a></li>
            <li className="item"><a className="link" href={props.user.html_url + '/repositories'}>{props.user.public_repos} <span>Repositories</span></a></li>
            <li className="item"><a className="link" href={props.user.html_url + '/following'}>{props.user.following} <span>Following</span></a></li>
          </ul>
          <a className="button" href={props.user.html_url} role="button">View details</a>
        </div>
        <div className="repos-list">
          <UserRepos repos={props.repos} />
        </div>
      </div>
    ) : null;

  return userInfo;
}

UserInfo.propTypes = {
  user: React.PropTypes.object,
  repos: React.PropTypes.array,
};

export default UserInfo;
