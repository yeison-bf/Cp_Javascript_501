// Variables globales
let empleados = [];

const start = () => {
    let opcion = 0
    do {

        opcion = parseInt(prompt("MENU\n1. Registro\n2. Listado\n3. Busqueda\n4. Salir"))

        switch (opcion) {
            case 1:
                RegistroEmpleado()
                break;
            case 2:
                ListarEmpleados()
                break;
            case 3:
                alert("Opcion 3")
                BusquedaEmpleado()
                break;
            case 4:
                alert("Gracias ...")
                break;
            default:
                alert("Lo sentimos! opcion invalida")
                break;
        }

    } while (opcion !== 4)
}

// Función para Registro
const RegistroEmpleado = () =>{

    let otroEmpleado = false
    do{
        empleados.push({
            documento: parseInt(prompt("Documento de empleado")),
            nombre: prompt("Nombre de empleado"),
            apellidos: prompt("Apellidos de empleado"),
            edad: prompt("Edad de empleado"),
            hijos: prompt("Número de Hijos?"),
            horas_laboradas: parseInt(prompt("Horas laboardas por el empleado")),
        })

        respuesta = prompt("¿Desea registrar otro empleado? 1: Si / 2:No")

        if(respuesta == 1){
            otroEmpleado = true
        }else{
            otroEmpleado = false
        }

    }while(otroEmpleado)
}

// Función para listar empleados
const ListarEmpleados = () =>{

    if(empleados.length < 1){
        alert("Lo sentimos! no tiene registro de empleados")
    }

    for (let i = 0; i < empleados.length; i++) {
        alert(`Listado de empleados\n
                Documento: ${empleados[i].documento}
                Nombre: ${empleados[i].nombre}
                Apellidos: ${empleados[i].apellidos}
                Edad: ${empleados[i].edad}
            `)        
    }
}


// Función de busqueda
function BusquedaEmpleado(){
    usuarioEncontrado = false;
    let documento = parseInt(prompt("Documento a buscar"))
    for (let i = 0; i < empleados.length; i++) {
        if(documento == empleados[i].documento) {
            usuarioEncontrado=true
            alert(`Datos del empleado\n
                Documento: ${empleados[i].documento}
                Nombre: ${empleados[i].nombre}
                Apellidos: ${empleados[i].apellidos}
                Edad: ${empleados[i].edad}
            `)
             break;
        }
    }

    if(!usuarioEncontrado){
        alert("Lo sentimos! no se tiene registro del empleado")
    }
}



































start()