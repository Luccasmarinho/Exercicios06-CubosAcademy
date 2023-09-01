function encontrarCarro(nomes, posicao) {
    for (let i = 0; i < nomes.length; i++) {
        if(i === posicao) {
            const carroEncontrado = nomes.slice(i, i + 3);
            const nomesString = carroEncontrado.join(" - ");
            console.log(nomesString);
        }
    }
} 
const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia', 'Versa', 'Onix', 'March'];
const posicao = 5;

encontrarCarro(nomes, posicao)