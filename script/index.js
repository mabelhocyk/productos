
let id = 1;

const listaDeProductos = [{
    nombre: "Galletitas",
    precio: 100
}, {
    nombre: "Coca-Cola",
    precio: 350
}, {
    nombre: "Polenta",
    precio: 200
}]

let productos = [];

listaDeProductos.forEach((producto) => {
    productos.push({ ...producto, id })
    id++
})

let opcionSeleccionada = '';

function iniciarPrograma() {

    opcionSeleccionada = prompt(`
    Seleccione una de las siguientes opciones: 
    ▬ Ver
    ▬ Crear
    ▬ Eliminar
    ▬ Salir`);

}

function verificacionDeOpcionSeleccionada(opcionSeleccionada) {
    if (opcionSeleccionada.toLowerCase() !== 'ver' &&
        opcionSeleccionada.toLowerCase() !== 'crear' &&
        opcionSeleccionada.toLowerCase() !== 'eliminar' &&
        opcionSeleccionada.toLowerCase() !== 'salir') {
        alert('Opcion inválida')
    }
}

function verProductos() {

    let productosParaMostrar = ``;
    productos.forEach(producto => {
        productosParaMostrar += `ID: ${producto.id}     ${producto.nombre}      Precio: $${producto.precio} \n\n`
    })
    alert(`LISTA DE PRODUCTOS\n\n${productosParaMostrar}`);

}

function crearProducto() {
    
    let nombre = prompt(`Ingrese el nombre del prducto`);
    let precio = prompt(`Ingrese el precio del producto`);

    if (!nombre || !precio) {
        alert('Alguno o ambos Datos no fueron ingresados. Vuelva a intentar');
    } else {
        productos.push({ id, nombre, precio })
        id++;
        alert(`Producto Creado exitosamente`);
    }

}

function eliminarProducto() {
    let productosParaMostrar = '';
    productos.forEach(producto => {
        productosParaMostrar += `ID: ${producto.id}     ${producto.nombre}      Precio: $${producto.precio} \n\n`
    })

    let idIngresado = Number(prompt(`SELECCIONE EL ID DEL PRODUCTO\n\nLISTA DE PRODUCTOS\n\n${productosParaMostrar}`));
    let listaDeProductosFiltrada = productos.filter(producto => producto.id !== idIngresado);

    if (productos.length === listaDeProductosFiltrada.length) {
        alert('No hay un producto con ese ID');
    } else {
        productos = listaDeProductosFiltrada;
        alert('Producto eliminado exitosamente')
    }
}

while (opcionSeleccionada.toLowerCase() !== 'salir') {

    iniciarPrograma();
    verificacionDeOpcionSeleccionada(opcionSeleccionada);

    if (opcionSeleccionada.toLowerCase() === `ver`) {
        verProductos();
    } else if (opcionSeleccionada.toLowerCase() === `crear`) {
        crearProducto()
    } else if (opcionSeleccionada.toLowerCase() === 'eliminar') {
        eliminarProducto();
    }

}

alert('Gracias por visitar nuestra tienda virtual, Vuelva pronto!')