// Variables y arreglos globales
listadoEmpleados = []
listadoEmpresas = []

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
                let cantidad = parseInt(prompt(`¿Cuantos registros deseas realizar?`))
                for (let i = 1; i <= cantidad; i++) {
                    listadoEmpresas.push({
                        nit: parseInt(prompt("NIT")),
                        razonSocial: prompt("Razón social"),
                        direccion: prompt("Dirección")
                    })
                }
                break;
            case 2:
                alert("Listadio de empresas")
                for (let i = 0; i < listadoEmpresas.length; i++) {
                     alert(`INFORMACIÓN DE LA EMPRESA:
                        NIT: ${listadoEmpresas[i].nit}
                        Razon social: ${listadoEmpresas[i].razonSocial}
                        Dirección: ${listadoEmpresas[i].direccion}`)
                }
                break;
            case 3:
                break;
            default:
                alert("Opción invalida!")
                break;

        }
    } while (opcionEmpresa !== 3)
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
                break;
            case 2:
                alert("Listado de Empleados")
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