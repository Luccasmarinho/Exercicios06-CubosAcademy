const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 3;

let grupoUm = [];
let grupoDois = [];



function divisaoGrupos(nomes, tamanhoDoGrupo) {
    const nomeFiltrado = nomes.slice(0, tamanhoDoGrupo);
    const nomeFiltradoDOIS = nomes.slice(tamanhoDoGrupo);
    grupoUm.push(nomeFiltrado)
    grupoDois.push(nomeFiltradoDOIS) 

    if (tamanhoDoGrupo === 0) {
        console.log("Digite um número maior que 0")
    } else {
        console.log(`Grupo 1: ${grupoUm}`);
        console.log(`Grupo 2: ${grupoDois}`);
    }
}

divisaoGrupos(nomes, tamanhoDoGrupo);



