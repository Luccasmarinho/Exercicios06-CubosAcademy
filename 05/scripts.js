const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
const nomePaciente = "Ana"


function agendarPaciente(listaDePacientes, nomeDoPaciente) {
    for (let i = 0; i < listaDePacientes.length; i++) {
        if (nomeDoPaciente === listaDePacientes[i]) {
            listaDePacientes.splice(i, 1)
            listaDePacientes.splice(listaDePacientes.length, 0, nomeDoPaciente) //poderia usar .push       
        } 
    }
    const listaPacientesString = listaDePacientes.join(", ");
        console.log(listaPacientesString); 
}
agendarPaciente(pacientes, nomePaciente);



function atenderPaciente(listaDePacientes) {
    listaDePacientes.splice(0, 1)
    const listaPacientesString = listaDePacientes.join(", ");
    console.log(listaPacientesString); 
}
atenderPaciente(pacientes);



function cancelarAtendimento (listaDePacientes, nomeDoPaciente) {
    for (let i = 0; i < listaDePacientes.length; i++) {
        if (listaDePacientes[i] === nomeDoPaciente) {
            listaDePacientes.splice(i, 1);
        }
    }
    const listaPacientesString = listaDePacientes.join(", ");
    console.log(listaPacientesString); 
}
cancelarAtendimento(pacientes, nomePaciente)

