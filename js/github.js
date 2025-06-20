class Github {
  constructor() {
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  // Get user
  async getUser(user) {
    let profileUrl = `https://api.github.com/users/${user}`;
    let reposUrl = `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`;

    if (typeof GITHUB_CLIENT_ID !== 'undefined' && GITHUB_CLIENT_ID && typeof GITHUB_CLIENT_SECRET !== 'undefined' && GITHUB_CLIENT_SECRET) {
      profileUrl += `?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}`;
      reposUrl += `&client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}`;
    }

    const profileResponse = await fetch(profileUrl);
    const repoResponse = await fetch(reposUrl);

    if (profileResponse.status === 404 || repoResponse.status === 404) {
      return {
        profile: { message: 'Not Found' },
        repos: []
      };
    }

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    };
  }
} 