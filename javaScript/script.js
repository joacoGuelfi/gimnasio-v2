class Persona {
    constructor(nombre, apellido, documento, edad) {
        this.documento = documento
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
}

const personas = []

let documento, nombre, apellido, edad, validacion, continua
let accion, quitarDoc, quitarPos




const form = document.getElementById("form")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    let nombre = document.getElementById("idNombre").value
    let apellido = document.getElementById("idApellido").value
    let documento = document.getElementById("idDocumento").value
    let edad = document.getElementById("idEdad").value

    const cliente = new Persona(nombre, apellido, documento, edad)
    personas.push(cliente)
    console.log(personas)
    form.reset()
    alert("Cliente agregado")
    console.log(documento)
})

const btnQuitar = document.getElementById("btnQuitar")

btnQuitar.addEventListener("click", () => {
    quitarDoc = prompt("Ingrese el documento del cliente que desea eliminar:").toLocaleLowerCase()
    quitarDoc = personas.find((el) => el.documento === quitarDoc)
    quitarPos = personas.indexOf(quitarDoc)
    if (quitarPos >= 0) {
        personas.splice(quitarPos, 1)
        alert("Se elimino correctamente.")
    } else alert("No se ha encontrado la persona que desea eliminar.")
})


const btnMostrar = document.getElementById("btnMostrar")
const container = document.getElementById("container")
btnMostrar.addEventListener("click", () => {

    personas.forEach(persona => {
        container.innerHTML += ` 
        <div class="cards">
            <h3 class:"nombre">${persona.nombre} ${persona.apellido}</h3>
            <p>Docummento: ${persona.documento}</p>
            <p>Edad: ${persona.edad}</p>
        </div>
        `

    });


})

