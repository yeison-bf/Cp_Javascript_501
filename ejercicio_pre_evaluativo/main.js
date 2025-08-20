// Variables y arreglos globales
listadoEmpleados = []
listadoEmpresas = [
    {
        nit: 1051891891,
        razonSocial: "SENA",
        direccion: "Medellin"
    },
    {
        nit: 1051892892,
        razonSocial: "Bfunieles",
        direccion: "Medellin"
    }
]

const InicioDesdeAqui = () => {
    let opcion = 0;
    do {
        opcion = parseInt(prompt("CONTROL BFUNIELES\n1. Empresas\n2. Empleados\n3. Salir"))
        switch (opcion) {
            case 1:
                MenuEmpresa()
                break;
            case 2:
                MenuEmpleados()
                break;
            case 3:
                alert("Adios...")
                break;
            default:
                alert("Opcion invalida!")
                break;
        }
    } while (opcion !== 3)
}


// Opciones del modulo de empresa

// Funcion para cargar el menu de la empresa 
const MenuEmpresa = () => {
    let opcionEmpresa = 0;
    do {
        opcionEmpresa = parseInt(prompt("GESTIÓN DE EMPRESAS\n1. Registro\n2.Listado\n3. Atras"))
        switch (opcionEmpresa) {
            case 1:
                registroEmpresas()
                break;
            case 2:
                listadoDatosEmpresas()
                break;
            case 3:
                break;
            default:
                alert("Opción invalida!")
                break;

        }
    } while (opcionEmpresa !== 3)
}

// Función para registrar una empresa
const registroEmpresas = () => {
    let cantidad = parseInt(prompt(`¿Cuantos registros deseas realizar?`))
    for (let i = 1; i <= cantidad; i++) {
        listadoEmpresas.push({
            nit: parseInt(prompt("NIT")),
            razonSocial: prompt("Razón social"),
            direccion: prompt("Dirección")
        })
    }
}

// Función para listar las empresas
const listadoDatosEmpresas = () => {
    
    // alert("Listadio de empresas")
    // for (let i = 0; i < listadoEmpresas.length; i++) {
    //     alert(`INFORMACIÓN DE LA EMPRESA:
    //                     NIT: ${listadoEmpresas[i].nit}
    //                     Razon social: ${listadoEmpresas[i].razonSocial}
    //                     Dirección: ${listadoEmpresas[i].direccion}`)
    // }

    let dataEmpresa = ""
    listadoEmpresas.forEach((element, index)=>{
        dataEmpresa += `
        Empresa No. ${(index+1)}
        Nit: ${element.nit}
        Nombre: ${element.razonSocial}
        Dirección: ${element.direccion}\n`
    })

    alert(dataEmpresa)
}

// Función para listar empresas en el formulario de empleados
const datosEmpresaParaEmpleados = () => {
    let DataEmpresa = "";
    for (let i = 0; i < listadoEmpresas.length; i++) {
        DataEmpresa += `${i} : NIT: ${listadoEmpresas[i].nit} - Razon social: ${listadoEmpresas[i].razonSocial}\n`
    }
    return DataEmpresa
}



// Opciones del modulo de Empleados

// Funcion para cargar el menu de Empleados 
const MenuEmpleados = () => {
    let opcionEmpleados = 0;
    do {
        opcionEmpleados = parseInt(prompt("GESTIÓN DE EMPLEADOS\n1. Registro\n2.Listado\n3. Atras"))
        switch (opcionEmpleados) {
            case 1:
                alert("Registro de Empleados")
                cantidad = parseInt(prompt("¿Cuantos registros deseas hacer?"))
                for (let i = 0; i < cantidad; i++) {

                    let documento = parseInt(prompt("Documento"))
                    let nombre = prompt("Nombre")
                    let apellidos = prompt("Apellidos")
                    let direccion = prompt("Direccion")
                    let usuario = prompt("Usuario de acceso")
                    let password = prompt("Password")
                    let idEmpresa = parseInt(prompt(`Seleccione la empresa\n ${datosEmpresaParaEmpleados()}`))

                    listadoEmpleados.push({
                        documento, nombre, apellidos, direccion, usuario, password, idEmpresa
                    })
                }
                break;
            case 2:
                alert("Listado de Empleados")
                let dataEmpleados = "";
                for (let i = 0; i < listadoEmpleados.length; i++) {
                    dataEmpleados += `
                        Nombre: ${listadoEmpleados[i].nombre}
                        Apellidos: ${listadoEmpleados[i].apellidos}
                        Direccion: ${listadoEmpleados[i].direccion}
                        Empresa : ${listadoEmpresas[listadoEmpleados[i].idEmpresa].razonSocial}\n`
                }

                alert(dataEmpleados)
                break;
            case 3:
                break;
            default:
                alert("Opción invalida!")
                break;

        }
    } while (opcionEmpleados !== 3)
}














InicioDesdeAqui()