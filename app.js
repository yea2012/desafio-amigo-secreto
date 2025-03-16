// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];        

//funcion para ingresar nombres de los amigos en un arreglo despues de utilizar boton añadir
function agregarAmigo() {
   let nombreAmigo = document.getElementById('amigo').value;
   console.log(nombreAmigo);
   //habilita boton para iniciar nuevo juego
   document.getElementById('reiniciar').removeAttribute('disabled');

   // alertas para conidiciones de borde
   if(nombreAmigo === ''){
        alert("El valor no puede estar vacío, por favor ingrese un nombre");
    }   else {
            //Si el numero generado está incluido en la lista 
            if (listaAmigos.includes(nombreAmigo)) {
                alert('El nombre ya existe, por favor ingrese otro nombre');
                limpiarCaja();
            } else {
                //funcion que verifica si input es numero
                if (isNaN (nombreAmigo)) {
                    // si el input es válido, se agrega nombre al arreglo, se imprime en pantalla valores añadidos
                    listaAmigos.push(nombreAmigo);
                    limpiarCaja();
                    console.log(listaAmigos);
                    document.getElementById('listaAmigos').innerHTML += `<li>${nombreAmigo}</li>`;
                    return ; 
                } else {
                    alert("Valor inválido, no se admiten numeros"); 
                    limpiarCaja(); 
                }
            } 
        }   
}

// limpia caja de texto
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

//funcion de boton nuevojuego, limpia caja de texto y valores de input impresos en pantalla (nombres amigos añadidos/nombre amigo secreto), se inicializan las variables.
function reiniciarJuego() {
    limpiarCaja();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    listaAmigos = [];
    console.log(listaAmigos);
}

// funcion que retorna valor de una posicion aleatoria 
function sortearAmigo(){
    document.getElementById('resultado').innerHTML = '';
    // validacion de ejecucion sorteo sin valores ingresados/input
    if(listaAmigos.length === 0){
        alert('Debe añadir al menos un nombre para sortear su amigo secreto');
    } else{
        let sorteoListAmigos= Math.floor(Math.random() * listaAmigos.length);
        let amigoSorteado = listaAmigos[sorteoListAmigos]; 
        console.log(amigoSorteado);
        document.getElementById('resultado').innerHTML += `<li> Tu amigo secreto es: ${amigoSorteado}</li>`;
        document.getElementById('listaAmigos').innerHTML = '';
        console.log(listaAmigos);
    }
}

