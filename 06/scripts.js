const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
];


function encontrarDono(pet) {
    let encontrouODono = false;
    for (let i = 0; i < usuarios.length; i++) {
        for (let j = 0; j < usuarios[i].pets.length; j++) {
            if (pet === usuarios[i].pets[j]) {
                encontrouODono = true
                console.log(`O dono(a) do(a) ${usuarios[i].pets[j]} é o ${usuarios[i].nome}`);
                break
            } 
        }
    }

    if (!encontrouODono) {
        console.log(`Que pena ${pet}, não encontramos seu dono(a)`)
    }
}

const pet = "Salsicha";

encontrarDono(pet);
