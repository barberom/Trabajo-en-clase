alert('bienvenidos a mi sitio')

if (confirm('seguro que quieres avanzar?')){
    document.querySelector(".saludo").innerText = "Qué alegría que quieras continuar tu visita"

    let nombre = prompt('cual es tu nombre')
    document.querySelector('h1').innerText = "bienvenido " + nombre

    let edad = prompt('cuantos anos tenes?')

    if(edad>17){
        let gustaP = confirm('te gusta programar')
        if(gustaP){
            document.querySelector(".background-img").innerHTML = "<img src='./img/programmer.jpeg'/>"
        }

        else{
            document.querySelector(".background-img").innerHTML = "<img src='./img/gatito.jpeg'/>"
        }

        let imagen = document.querySelector('.avatar')
        console.log(imagen)

        let imagenU = prompt('ingrese el link a su img')
        imagen.src = imagenU 

        console.log(imagen)


        nombreU = prompt('nombre peli')
        directorU = prompt('director')
        duracionU = prompt('duracion')
        actorU = prompt('actor')
        let pelicula ={
            nombre: nombreU,
            director: directorU,
            duracion: duracionU,
            actor: actorU,
        }

        document.querySelector("#nombre").innerHTML = pelicula.nombre
        document.querySelector("#director").innerHTML = pelicula.director
        document.querySelector("#duracion").innerHTML = pelicula.duracion
        document.querySelector("#actor").innerHTML = pelicula.actor

        document.querySelector("#pelicula").style.display = "block"

    }


    else{
        document.querySelector('.container-general').style.display = "none"
        document.querySelector('#accesoDenegado').style.display = "block"
    }
}

else{
    document.querySelector('.saludo') = "Lamentamos que no quieras continuar tu visita"
}