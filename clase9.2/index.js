let misDatos = {
    nombre: "Matias",
    apellido: "Barbero",
    dni: 47490040,
    edad: 18,
    comidasFavoritas: ["guari", "nono", "blanco"],
    saludar: function(){
        return "Hola mi nombre es" + this.nombre + " " + this.apellido + " y tengo " + this.edad + " años." + " Mi primer comida favorita es " + this.comidasFavoritas[0]
    }
}
console.log(misDatos.saludar())

let auto = {
    marca: "honda",
    modelo: "CRV",
    año: 1998,
    color: "negra",
    posicion: 0,
    avanzar: function(n){
        return this.posicion = this.posicion + n
    },
    retroceder: function(n){
        return this.posicion = this.posicion - n
    }
}
auto.avanzar(5)
auto.retroceder(4)
console.log(auto.posicion)

let nuevoAuto = {
    marca: "honda",
    modelo: "CRV",
    año: 1998,
    color: "negra",
    posicion: 0,
    moverse: function(n){
        return this.posicion = this.posicion + n
    }
}

nuevoAuto.moverse(5)
nuevoAuto.moverse(-3)
console.log(nuevoAuto.posicion)


let ironMan = {
    nombre: "iron man",
    equipo: "avangers",
    poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
    energia: 100,
    getPoder: function(n){
         this.energia = this.energia - 10 
        return "Poder elegido de " + this.nombre + ": " + this.poderes[n] + ". Energia restante: " + this.energia
    }
}

let hulk ={
    nombre: "Hulk",
    equipo: "Avengers",
    poderes: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder: function(n){
         this.energia = this.energia - 10 
        return "Poder elegido de " + this.nombre + ": " + this.poderes[n] + ". Energia restante: " + this.energia
    }
}

console.log(ironMan.getPoder(0))
console.log(hulk.getPoder(1))
console.log(ironMan.getPoder(2))
console.log(hulk.getPoder(0))
console.log(ironMan.getPoder(1))
console.log(hulk.getPoder(2))
