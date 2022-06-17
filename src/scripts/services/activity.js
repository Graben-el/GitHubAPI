import { baseUrl, repositoriesQuantity } from './src/scripts/variables.js'

async function getActivity(userName) {
    const response  = await fetch(`${baseUrl}/${userName}/events?per_page=${repositoriesQuantity}`)
    return await response.json()
}

export { getActivity }
