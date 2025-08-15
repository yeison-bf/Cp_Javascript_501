// tipos de funciones

// 1. Declaradas
// 2. Anonimas
// 3. De flecha

function Calculos(nota1, nota2, nota3){
    let promedio = (nota1+nota2+nota3) / 3
    return promedio
}

console.log(prompt("Nombre"))
nota1 = parseInt(prompt("Nota 1"))
nota2 = parseInt(prompt("Nota 2"))
nota3 = parseInt(prompt("Nota 3"))
console.log("Impresión directa ", Calculos(nota1, nota2, nota3))
let respuesta = Calculos(nota1, nota2, nota3)
console.log("Con la variable ", respuesta)
