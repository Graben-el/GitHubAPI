import { getUser } from "/src/scripts/services/user.js"
import { getActivity } from '/src/scripts/services/activity.js'
import { getRepositories } from "/src/scripts/services/repository.js"
import { user } from "/src/scripts/objects/user.js"
import { screen } from "/src/scripts/objects/screen.js"

document.querySelector('#btn-search').addEventListener('click', () => {
    const userName = document.querySelector('#input-search').value
    if (validateEmptyInput(userName)) return
    getUserData(userName)
}
)

document.querySelector('#input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed) {
        if (validateEmptyInput(userName)) return
        getUserData(userName)
    }

})

function validateEmptyInput(userName) {
    if (userName.length === 0) {
        alert('Preencha o campo com o nome do usuário do GitHub')
        return true
    }
}

async function getUserData(userName) {
    const userResponse = await getUser(userName)

    if (userResponse.message === 'Not Found') {
        screen.renderNotFound()
        return
    }

    const repositoriesResponse = await getRepositories(userName)
    const activitiesResponse = await getActivity(userName)

    user.setInfo(userResponse);
    user.setRepositories(repositoriesResponse);
    user.setRepoActivities(activitiesResponse);
    user.setCommits(activitiesResponse);

    screen.renderUser(user);
}