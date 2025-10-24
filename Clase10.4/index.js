let filosofoHipster = {
    nacionalidad: "argentina",
    profesion:  'musico',
    camina: 2,
}

let nacionalidadU = prompt('nacionalidad')
let profesionU = prompt('profesion')
let caminaU = prompt('cuanto kilometros caminas')

function sosFilosofoHipster(na, pro, cam){
    if (na == filosofoHipster.nacionalidad && pro == filosofoHipster.profesion && cam >= filosofoHipster.camina){
        return 'Soy filosofo hipster'
    }
    else{
        return 'Aún no soy filósofo hipster'
    }
}

console.log(sosFilosofoHipster(nacionalidadU, profesionU, caminaU))