// import fetch from 'node-fetch';
import fetch from "node-fetch";
import readline from 'readline';
// let apiConnect = fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//     .then((response) => response.json())
//     .then(
//     data => console.log(data)
// )


let apiConnect2 = fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// Load the readline library
// Setup readline to listen on the stdin stream
const rl = readline.createInterface(process.stdin, process.stdout);
// get the input
//     rl.question("What is your choice? ", (choice) => {
//         console.log("your choice was:" + choice + "!");
//     });


function showMenu(){
    console.log("Menu options are:")
    console.log()
    console.log("1 pokemonName: will search and display info on the specific pokemon you typed")
    console.log("2 itemName: will search and display info on specific item you typed in")
    console.log("3 moveName: will search and display info on move typed in")
}

function prompt(cb){
    rl.question("What do you want to search? ", (thing) => {
        cb(thing)
    })
}

function searchPoke(pokemon){
    let apiConnect = fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
        .then(response => response.json())
        .then(data => printPoke(data))
        .catch(error => console.error('Error:', error));


}

function printPoke(data){
    console.log()
    console.log("Pokemon's name: " + data.name)
    console.log("Pokemon's weight: " + data.weight)
    console.log("Pokemon's height: " + data.height)
    console.log("Pokemon's base experience: " + data.base_experience)
    console.log("The moves this pokemon can do are:")
    data.moves.forEach( (moveObject) => {
        console.log("\t" + moveObject.move.name)
    })
    console.log()
    run()

}
function run(){
    showMenu()
    rl.question("What is your choice? ", (choice) => {
        console.log("your choice was: " + choice);
        if (choice[0] == 1){
            // console.log("choice: " + choice[0])
            // console.log("pokemon name: " + pokemonName)
            prompt(searchPoke)

        }
    })
}


run()