// completar las variables para que el programa funcione

window.addEventListener('load', function() {

    //capturar HTML 
    let titulo = document.querySelector('#titulo');

    titulo.addEventListener('mouseover',function(){
        let nombre = prompt('cual es tu nombre')
        let parrafo = document.querySelector('#saludo')
        if(nombre == undefined){
            parrafo.innerText = 'Bienvenido usuario'
        }
        else{
            parrafo.innerText = 'Bienvenido ' + nombre
            parrafo.style.textTransform = 'uppercase'
        }
        titulo.style.display = "none"
        selector_personajes = document.querySelector('#selPersonajes')
        selector_personajes.style.display = 'block'

        selector_personajes.addEventListener('click', function(){
            document.querySelector('.bienvenida').style.display = 'none'
            document.querySelector('.personajes').style.display = 'flex'
        })

        let bart = document.querySelector('#bart')
        let lisa = document.querySelector('#lisa')
        let homero = document.querySelector('#homero')
        let marge = document.querySelector('#marge')
        let maggie = document.querySelector('#maggie')
        let milhouse = document.querySelector('#milhouse')
        let burns = document.querySelector('#burns')
        let bobPatinio = document.querySelector('#bobPatinio')
        let flanders = document.querySelector('#flanders')
        let duffman = document.querySelector('#duffman')
        let gorgory = document.querySelector('#gorgory')
        let nelson = document.querySelector('#nelson')


        bart.addEventListener('click', function(){
            this.style.backgroundColor = "yellow"
        })
        lisa.addEventListener('dblclick', function(){
            this.style.backgroundColor = "yellow"
        })
        homero.addEventListener('click', function(){
            this.style.backgroundColor = "yellow"
        })
        marge.addEventListener('mouseover', function(){
            this.style.backgroundColor = "yellow"
        })
        maggie.addEventListener('mouseout', function(){
            this.style.backgroundColor = "yellow"
        })
        milhouse.addEventListener('click', function(){
            this.style.backgroundColor = "yellow"
        })
        burns.addEventListener('mouseover', function(){
            this.style.backgroundColor = "yellow"
        })
        bobPatinio.addEventListener('dblclick', function(){
            this.style.backgroundColor = "yellow"
        })
        flanders.addEventListener('mouseover', function(){
            this.style.backgroundColor = "yellow"
        })
        duffman.addEventListener('dblclick', function(){
            this.style.backgroundColor = "yellow"
        })
        gorgory.addEventListener('mouseover', function(){
            this.style.backgroundColor = "yellow"
        })
        nelson.addEventListener('click', function(){
            this.style.backgroundColor = "yellow"
        })
        
    })
 
    
    /* Capturar pesonajes + Asignarles a cada uno su evento correspondiente, 
    así como también su funcionalidad */
    

    /* Asignarle evento a la variable boton */
   /* let boton = ;*/
 
 


 }) 