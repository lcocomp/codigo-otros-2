var formulario = document.querySelector("#form");

formulario.onsubmit = function (e) {
  e.preventDefault(); // e.preventDefault()

  var n = formulario.elements[0];
  var edadInput = formulario.elements[1]; 

  //se realiza el cambio de nombre
  var na = formulario.elements[2];

  var nombre = n.value.trim();
  var edad = parseInt(edadInput.value.trim(), 10);

  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;

  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error");
  } else {
    n.classList.remove("error");
  }

  if (isNaN(edad) || edad < 18 || edad > 120) {
    edadInput.classList.add("error");
  } else {
    edadInput.classList.remove("error");
  }

  if (nombre.length > 0 && edad >= 18 && edad <= 120) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
};

function agregarInvitado(nombre, edad, nacionalidad) {
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  } else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  } else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  } else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  var lista = document.getElementById("lista-de-invitados");

  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista"); 
  //es classList.add
  lista.appendChild(elementoLista);

  function crearElemento(descripcion, valor) {
    var spanDescripcion = document.createElement("span");
    var inputValor = document.createElement("input");
    var espacio = document.createElement("br");

    spanDescripcion.textContent = descripcion + ": ";
    inputValor.value = valor;
    inputValor.readOnly = true; // hacemos que el imput no se edite

    elementoLista.appendChild(spanDescripcion);
    elementoLista.appendChild(inputValor);
    elementoLista.appendChild(espacio);
  }

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    elementoLista.remove();
  };
}
