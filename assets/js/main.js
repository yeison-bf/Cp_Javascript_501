
let nombre = ""
nombre = "Cristina Miguel Contreras"
console.log(`Un gusro, me llamo ${nombre}`)

// Operadores aritmeticos
// suma +
// resta  -
// multiplicacion * 
// division /
// modulo %

// Operadores de asignacion 
// igual =
edad = 55



// Operadores de comparación
// igual == o === 
// mayor >
// menor <
// mayor o igual >=
// menor o igual <=

console.log(typeof(edad))
console.log(edad === "55")
let puntaje = 4
// Condició simple
if(puntaje == 5) {
    console.log("Excelente has ganado con 5")
}


// Condición doble
if(puntaje> 3){
    console.log("Has APROBADO")
}else{
    console.log("Has REPROBADO")
}


// Condiciones multiples o anidadas
if(puntaje == 5){
    console.log("APROBADO")
}else if(puntaje == 4){
    console.log("OK, BIEN")
}else if(puntaje<=3){
    console.log("Has REPROBADO")
}else{
    console.log("No te puedo calificar, por estar fuera de rango")
}


// Operador ternario
// Condicion doble de una sola linea
if(puntaje> 3){
    console.log("Has APROBADO")
}else{
    console.log("Has REPROBADO")
}

let data = []
let estado = true
// Oeprador ternario = condicion doble 
estado ? console.log("true") : console.log("false")
// Operador ternario = condicion simple
data && console.log("Hola")
