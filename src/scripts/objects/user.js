const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    following: '',
    repositories: [],
    activitiesName: [],
    commits: [],
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepositories(repositories) {
        this.repositories = repositories
    },
    setRepoActivities(userName) {
        this.activitiesName = userName.map(element => element.repo.name)
    },
    setCommits(userName) {
        userName.map((element, index) => {
            try {
                this.commits[index] = element.payload.commits[0].message
            } catch {
                this.commits[index] = 'Sem commit'
            }
        })
    }
}

export { user }