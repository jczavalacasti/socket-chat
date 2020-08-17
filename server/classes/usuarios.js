// id
// nombre
// sala

// Clase para todos los usuarios conectados
class Usuarios {

    constructor() {
        this.personas = [];
    }

    agregarPersona(id, nombre, sala) {

        let persona = { id, nombre, sala };

        this.personas.push(persona);

        return this.personas;
    }

    getPersona(id) {
        let persona = this.personas.filter(persona => persona.id === id)[0]; // [0] porque solo queremos un registro, en caso de haber más

        return persona;
    }

    getPersonas() {
        return this.personas;
    }

    getPersonasPorSala(sala) {
        let personasEnSala = this.personas.filter(persona => persona.sala === sala);
        return personasEnSala;
    }

    borrarPersona(id) {

        let personaBorrada = this.getPersona(id); // Obtenemos la persona a borrar

        this.personas = this.personas.filter(persona => persona.id != id); // Retorna un nuevo arreglo sin el id indicado

        return personaBorrada;
    }

}


module.exports = {
    Usuarios
}