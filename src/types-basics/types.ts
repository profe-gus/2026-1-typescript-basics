// Variables y Constantes
export const nombre:string = "Gus";
const edad:number=34;
console.log("🚀 ~ :4 ~ edad:", edad)
const cedula:string="1144150239";
console.log("🚀 ~ :6 ~ cedula:", cedula)
const celular:string="3150000000"
console.log("🚀 ~ :8 ~ celular:", celular)
const isValid:boolean=true//false
console.log("🚀 ~ :10 ~ isValid:", isValid)


//Template string
const mensaje:string = `Esto es un string
permite un salto de linea
Permite usar " y ' 
permite concatenar ${nombre}
permite realizar operaciones ${1+1}`;
console.log("🚀 ~ :17 ~ mensaje:", mensaje)


//Ciclo de vida de js - Event loop - callstack

// La tareas comunes, macro tareas, micro tareas

console.log("1")
setTimeout(()=> console.log("2"),100)
Promise.resolve().then(()=>console.log("3"))
console.log("4")

/*Prioridades 
Primero se ejecutaran las tareas comunes(callback de metodos, if, for, console log, etc)
Segundo las microtareas (Callback de promesas)
por ultimo las macrotareas (timeouts e intervals)  

Y todo se ejecutara como una pila.
*/