let citaAgendada = [];
const agendar = document.querySelectorAll('button');
const manicurista = document.querySelector('.manicurista');
const hora = document.querySelector('.hora');
const fecha = document.querySelector('.fecha');
const nombre = document.querySelector('.nombreCliente');

agendar.forEach(clic => clic.addEventListener('click',(e) =>{
    let ingresar = `${nombre.value + " // " + manicurista.value + " // " + hora.value + " // " + fecha.value}`;
    agregar(citaAgendada, ingresar);
}));

const agregar = (arreglo, valor) => {
    
    try {
        arreglo.push(valor);
        alert("Cita agendada");
    } catch {
        alert("Error al agendar la cita");
    }
}