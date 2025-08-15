
let nombres = []

cantidad =parseInt(prompt("¿Cantidad de aprendices que asistieron a la formación?"))
for(let i = 0; i<cantidad; i++){
    let aprendiz = {
        "nombre":prompt("Ingrese el nombre: "),
        "apellidos":prompt("Ingrese el apellido"),
        "edad": parseInt(prompt("Ingrese la edad: ")),
        "programa": "ADSO"
    }
    nombres.push(aprendiz)
}

console.log(nombres)



console.log("-----------------------------");
for(let i =0; i<= nombres.length; i++){
    console.log("Datos del aprendiz")
    console.log(`Nombre: ${nombres[i].nombre}\nApellidos: ${nombres[i].apellidos}`)
    console.log("\n")
}