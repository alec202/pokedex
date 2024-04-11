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


function run(){
    showMenu()
    rl.question("What is your choice? ", (choice) => {
        console.log("your choice was:" + choice);
        let parts = choice.split(" "); // Split the string by space
        let pokemonName = parts.slice(1)
        if (choice[0] == 1){
            // console.log("choice: " + choice[0])
            // console.log("pokemon name: " + pokemonName)

        }
    })
        console.log("end of question")
}

run()