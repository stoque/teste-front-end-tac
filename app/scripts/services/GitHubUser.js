import axios from 'axios';

const GitHubUser = {
  getUserInfo(username){
    return axios.get(`https://api.github.com/users/${username}`);
  },
  getUserRepos(username){
    return axios.get(`https://api.github.com/users/${username}/repos`);
  }
};

export default GitHubUser;