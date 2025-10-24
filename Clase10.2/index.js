let nombre = prompt('como te llamas?')
console.log(nombre)

let edad = prompt('edad')
console.log(edad)

let fanDeportes = confirm('te gustan los deportes?')
console.log(fanDeportes)

alert('muchas gracias ' +  nombre + 'por responder')

let usuario = {
    nombreU: nombre,
    edadU: edad,
    deportesU: fanDeportes,
    deportistaProfesional: function(){
        if (this.deportesU){
            return 'soy fan de los deportes'
        }
        else{
            return 'No soy tan fan aún de los deportes'
        }
    }
}

console.log(usuario.deportistaProfesional())