const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
const tipoDeOperacao = "agendar" //ou atender
const nomePaciente = "Maria"

function filaDeAtendimento(listaDePacientes, tipoDeOperacao, nomeDoPaciente) {
    for (let i = 0; i < listaDePacientes.length; i++) {
        if (nomeDoPaciente === listaDePacientes[i] && tipoDeOperacao === "agendar") {
            listaDePacientes.splice(i, 1)
            listaDePacientes.splice(listaDePacientes.length, 0, nomeDoPaciente) //poderia usar .push       
        } 
            
    }
            if(tipoDeOperacao === "atender") {
                listaDePacientes.splice(0, 1); //poderia usar .shift
            }
            const listaPacientesString = listaDePacientes.join(", ");
            console.log(listaPacientesString);
}

filaDeAtendimento(pacientes, tipoDeOperacao, nomePaciente);
