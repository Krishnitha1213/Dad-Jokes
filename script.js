const jokeEL = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

//USING sync await
async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()

    jokeEL.innerHTML = data.joke
    
}

// USING .then
// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         },
//     }

//     fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//         jokeEL.innerHTML = data.joke
//     })      
    
// }
