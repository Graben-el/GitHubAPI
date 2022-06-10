import { user } from '/src/scripts/objects/user.js'

const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser({ avatarUrl: avatar, name, bio, followers, following }) {
        this.userProfile.innerHTML = `<div class="info">
                        <img src="${avatar ?? "Não possui imagem cadastrado 😢"}" alt="Imagem Usuario">
                        <div class="data">
                            <h1>${name ?? "Não possui nome cadastrado 😢"}</h1>
                            <p>${bio ?? "Não possui bio cadastrada 😢"}</p>
                        </div>
                        <div class="follow-container">
                        <div class="followers">
                                <h3>👥Seguidores</h3>   
                                <p>${followers}</p>
                            </div>
                            <div class="following">
                                    <h3>👥Seguindo</h3>
                                    <p>${following}</p>
                            </div>
                        </div>
                        </div>`

        let repositoriesItems = ''
        user.repositories.forEach(({ html_url: url, name, forks, stargazers_count: stars, watchers_count: watchers, language }) => repositoriesItems += 
        `<li>
            <a href="${url}" target='_blank'>
            ${name}
                <p>
                    <span>🍴${forks}</span>
                    <span>⭐${stars}</span>
                    <span>👀${watchers}</span>
                    <span>👨‍💻${language ?? 'Sem linguagem'}</span>
                </p>
            </a>
        </li>`);

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += 
            `<div class='repositories section'>
                <h2>Repositórios</h2>
                <ul>${repositoriesItems}</ul>
            </div>`
        };

        let commit = []
        user.commits.forEach((element, index) => commit[index] = element)

        let activityRepoName = ''
        user.activitiesName.forEach((element, index) => activityRepoName += `<li>📖 ${element}<span>: ${commit[index]} </span> </li>`);
        
        this.userProfile.innerHTML += `<div class='activities'>
                                        <h2>Atividades</h2>
                                        <ul>${activityRepoName}</ul>
                                        </div>`
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }