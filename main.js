String.prototype.replaceAt=function(index, character)
{
return this.substring(0, index) + character + this.substring(index+character.length);
}

const grupo_palabras = ["colina","mariposa","perro","libro","peruano","clases",
"laptop","lenguaje","aprender","bailar","cantar","divertido","banco","pelota",
"luces","ventana","televisor","colores","anime","sorpresa","ahorcado","celular",
"panda","peluche","montaña","cielo","nuevo","viejo","viajar","felicidad","tristeza"];

const palabra = grupo_palabras[Math.floor(Math.random()*grupo_palabras.length)];

let palabra_guiones = palabra.replace(/./g,"_ ");

let contadorFallos=0;

document.querySelector('#output').innerHTML = palabra_guiones;
var boton = document.getElementById("#calcular");
document.querySelector('#calcular').addEventListener('click',()=>{
    
const letra = document.querySelector('#letra').value;
let haFallado = true;

for(const i in palabra){
if(letra == palabra[i]){
    palabra_guiones = palabra_guiones.replaceAt(i*2,letra);
    haFallado = false;
    document.querySelector('#error').style.display = 'none';
    document.querySelector('#correcto').style.display = 'flex';
}}
if(haFallado){
    contadorFallos++;
    document.querySelector('#imagen').style.backgroundPosition=-(205*contadorFallos)+'px 0'; 
    document.querySelector('#correcto').style.display = 'none';
    document.querySelector('#error').style.display = 'flex';
}
if(contadorFallos===4){
    document.querySelector('#perdiste').style.display = 'flex';
}else{
if(palabra_guiones.indexOf('_')==-1){
    document.querySelector('#ganaste').style.display = 'flex';
}
}

document.querySelector('#output').innerHTML = palabra_guiones;
document.querySelector('#letra').value ='';
document.querySelector('#letra').focus();
    });