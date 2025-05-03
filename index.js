// Declaracion de variables 
let carrito = []; 
let total = 0;

// Arreglo de productos
const productos = [
    { nombre: 'Camisa', descripcion: 'Camisa manga larga', precio: 255.50, imagen: 'imagenes/camisa.jpg', talla: 'S, M, L, XL' },
    { nombre: 'Camisa', descripcion: 'Camisa de alta calidad', precio: 159.9, imagen: 'imagenes/camisa2.jpg', talla: 'S, M, L, XL' },
    { nombre: 'Camisa', descripcion: 'Camisa de alta calidad', precio: 150.0, imagen: 'imagenes/camisa3.jpg', talla: 'S, M, L, XL' },
    { nombre: 'Camisa', descripcion: 'Camisa azul', precio: 170.45, imagen: 'imagenes/camisa4.jpg', talla: 'S, M, L, XL' },
    { nombre: 'Chamarra', descripcion: 'Chamarra blanca', precio: 439.99, imagen: 'imagenes/chamarra.jpg', talla: '28, 30, 32, 34' },
    { nombre: 'Chamarra', descripcion: 'Chamarra negra', precio: 400, imagen: 'imagenes/chamarra2.jpg', talla: 'M, L, X' },
    { nombre: 'Chamarra', descripcion: 'Chamarra cafe', precio: 350.34, imagen: 'imagenes/chamarra3.jpg', talla: 'M, L, X' },
    { nombre: 'Chamarra', descripcion: 'Chamarra roja', precio: 299, imagen: 'imagenes/chamarra4.jpg', talla: 'M, L, X' },
    { nombre: 'Chamarra', descripcion: 'Chamarra negra', precio: 500.50, imagen: 'imagenes/chamarra5.jpg', talla: 'M, L, X' },
    { nombre: 'Chamarra', descripcion: 'Chamarra azul', precio: 620.89, imagen: 'imagenes/chamarra6.jpg', talla: 'M, L, XS' },
    { nombre: 'Chamarra', descripcion: 'Chamarra roja', precio: 499, imagen: 'imagenes/chamarra7.jpg', talla: 'M, L, x, XS' },
    { nombre: 'Chamarra', descripcion: 'Chamarra mostasa', precio: 400.50, imagen: 'imagenes/chamarra8.jpg', talla: 'M, L, X, XS' },
    { nombre: 'Chamarra', descripcion: 'Chamarra combinada', precio: 700.99, imagen: 'imagenes/chamarra9.jpg', talla: 'M, L, Xl' },
    { nombre: 'Short', descripcion: 'Short claro', precio: 130.99, imagen: 'imagenes/short.jpg', talla: 'M, L, XL' },
    { nombre: 'Short', descripcion: 'Short blanco', precio: 199.99, imagen: 'imagenes/short2.jpg', talla: 'M, L, X' },
    { nombre: 'Short', descripcion: 'Short verde', precio: 200.99, imagen: 'imagenes/short3.jpg', talla: 'M, L, Xs, XL' },
    { nombre: 'Short', descripcion: 'Short combinado', precio: 150, imagen: 'imagenes/short4.jpg', talla: 'M, L, XL' },
    { nombre: 'Short', descripcion: 'Short azul', precio: 170.45, imagen: 'imagenes/short5.jpg', talla: 'M, L, X' },
    { nombre: 'Short', descripcion: 'Short azul/negro', precio: 199.99, imagen: 'imagenes/short6.jpg', talla: 'M, L, XS' },
    { nombre: 'Sudadera', descripcion: 'Sudadera rosa', precio: 249.99, imagen: 'imagenes/sudadera.jpg', talla: 'M, L, XL' },
    { nombre: 'Sudadera', descripcion: 'Sudadera',      precio: 349.99, imagen: 'imagenes/sudadera2.jpg', talla: 'M, L, Xs' },
    { nombre: 'Sudadera', descripcion: 'Sudadera azul', precio: 229.99, imagen: 'imagenes/sudadera3.jpg', talla: 'M, L, X, XL' },
    { nombre: 'Sudadera', descripcion: 'Sudadera azul/blanco', precio: 549.99, imagen: 'imagenes/sudadera4.jpg', talla: 'M, L, Xs' },
    { nombre: 'Sudadera', descripcion: 'Sudadera azul/naranja', precio: 449.99, imagen: 'imagenes/sudadera5.jpg', talla: 'M, L, XL, XS' },
    { nombre: 'Sudadera', descripcion: 'Sudadera negra', precio: 349.99, imagen: 'imagenes/sudadera6.jpg', talla: 'M, L, XL, X' },
    { nombre: 'Sudadera', descripcion: 'Sudadera blanca', precio: 359.99, imagen: 'imagenes/sudadera7.jpg', talla: 'M, L, X' },
    { nombre: 'Sueter', descripcion: 'Sueter negro', precio: 249.99, imagen: 'imagenes/sueter.jpg', talla: 'M, L, X, S' },
    { nombre: 'Sueter', descripcion: 'Sueter blanco', precio: 349.99, imagen: 'imagenes/sueter2.jpg', talla: 'M, L, x, S' },
    { nombre: 'Camisa', descripcion: 'Camisa de mujer', precio: 429.99, imagen: 'imagenes/camisaM1.jpg', talla: 'M, L, XS' },
    { nombre: 'Camisa', descripcion: 'Camisa de mujer', precio: 239.99, imagen: 'imagenes/camisaM2.jpg', talla: 'M, L, S' },
    { nombre: 'Camiseta mujer', descripcion: 'Camiseta de mujer, comoda color verde', precio: 199.99, imagen: 'imagenes/camisetaM1.jpg', talla: 'M, L, X' },
    { nombre: 'Sueter mujer', descripcion: 'Sueter para mujer, comodo y de calidad', precio: 349.99, imagen: 'imagenes/sudaderaM1.jpg', talla: 'M, L, XL, XS, X' },
    { nombre: 'Sueter mujer', descripcion: 'Sueter para mujer, caliente y comodo.', precio: 678.55, imagen: 'imagenes/sudaderaM2.jpg', talla: 'M, L, X' },
    { nombre: 'Pantalon', descripcion: 'Pantalon para mujer (blanco)', precio: 678.55, imagen: 'imagenes/pantalon.jpg', talla: 'M, L, X, S' },
    { nombre: 'Pantalon', descripcion: 'Pantalon para mujer (negro)', precio: 678.55, imagen: 'imagenes/pantalon2.jpg', talla: 'M, L, X' },
    { nombre: 'Pantalon', descripcion: 'Pantalon para mujer (verde)', precio: 678.55, imagen: 'imagenes/pantalon3.jpg', talla: 'M, L, X, S' },
    { nombre: 'Pantalon', descripcion: 'Pantalon para hombre', precio: 678.55, imagen: 'imagenes/pantalon4.jpg', talla: 'M, L, X' },
    { nombre: 'Pantalon', descripcion: 'Pantalon para mujer', precio: 678.55, imagen: 'imagenes/pantalon5.jpg', talla: 'M, L, X' },
    { nombre: 'Pantalon', descripcion: 'Pantalon ', precio: 678.55, imagen: 'imagenes/pantalon7.jpg', talla: 'M, L, X' },
    { nombre: 'Pantalon', descripcion: 'Pantalon azul', precio: 678.55, imagen: 'imagenes/pantalon8.jpg', talla: 'M, L, X' },
    { nombre: 'Vestido', descripcion: 'Vestido ', precio: 678.55, imagen: 'imagenes/vestido.jpg', talla: 'M, L, X, S' },
    { nombre: 'Vestido', descripcion: 'Vestido ', precio: 678.55, imagen: 'imagenes/vestido2.jpg', talla: 'M, L, X, S' },
    { nombre: 'Vestido', descripcion: 'Vestido ', precio: 678.55, imagen: 'imagenes/vestido3.jpg', talla: 'M, L, X, S' },
    { nombre: 'Vestido', descripcion: 'Vestido ', precio: 678.55, imagen: 'imagenes/vestido4.jpg', talla: 'M, L, X' },
    { nombre: 'Vestido', descripcion: 'Vestido ', precio: 678.55, imagen: 'imagenes/vestido5.jpg', talla: 'M, L, X, S' },
];

// Validación: asegurar que 'productos' es un arreglo y contiene productos válidos
if (!Array.isArray(productos)) {
    console.error("ERROR: 'productos' no está definido correctamente.");
} else {
    // Validación: asegurar que cada producto tenga las propiedades necesarias
    productos.forEach((producto, index) => {
        const errores = [];

        // Valida que el nombre no sea una cadena vacia
        if (typeof producto.nombre !== 'string' || producto.nombre.trim() === '') {
            errores.push("nombre inválido");
        }

        // Valida que la descripcion sea una cadena
        if (typeof producto.descripcion !== 'string') {
            errores.push("descripción inválida");
        }

        // Valida que el precio sea un numero positivo
        if (typeof producto.precio !== 'number' || producto.precio < 0) {
            errores.push("precio inválido");
        }

        // Valida que la ruta de la imagen sea una cadena valida y este en la carpeta
        if (typeof producto.imagen !== 'string' || !producto.imagen.startsWith('imagenes/')) {
            errores.push("ruta de imagen inválida");
        }

        // Valida que la talla este espesificada como cadena no vacia
        if (typeof producto.talla !== 'string' || producto.talla.trim() === '') {
            errores.push("talla no especificada");
        }

        // Muestra los errores si es que se presentaron en la consola
        if (errores.length > 0) {
            console.warn(`Producto inválido en índice ${index}:`, errores, producto);
        }
    });
}

// Función para mostrar los productos en el contenedor principal de los productos
function mostrarProductos(productos) {

    try {
        const contenedorProductos = document.getElementById('productos-container');
        if(!contenedorProductos){
            console.error("no se encontro el contenedor productos");
            return; //Detiene la ejecucion 
        }

        // Se verifica que productos sea un array
        if(!Array.isArray(productos)){
            console.error("Prodcutos no es un array")
            return; 
        }
        contenedorProductos.innerHTML = '';

        productos.forEach(producto => {
            try {
                // Se valida los datos del producto antes de procesarlos
                if(!producto || !producto.imagen || !producto.nombre || !producto.precio) {
                    console.warn("Producto incompleto");
                    return;
                }

                if(typeof producto.precio !== "number"){
                    console.warn(`Error en el tipo de dato preio`, producto); 
                    return;
                }
                const divProducto = document.createElement('div');
                divProducto.classList.add('producto');

                divProducto.innerHTML = `
                    <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen" onclick="verImagenGrande(this)" 
                        data-img="${producto.imagen}" 
                        data-description="${producto.descripcion}" 
                        data-price="${producto.precio}" 
                        data-size="${producto.talla}">
                    <p>${producto.descripcion}</p>
                    <p>$${producto.precio}</p>
                `;
                contenedorProductos.appendChild(divProducto);

            } catch (error) {
                console.error("Error en los productos", error);
            }
        });
    } catch (error) {
        console.error("Error al mostrar productos", error);
    }
}

// Llamar a la función para mostrar los productos al cargar la página
mostrarProductos(productos);

//Funcion para mostrar una vista ampliada con la informacion del producto
function verImagenGrande(elemento) {
    try {

        // Se obtiene el contenedor de la vista grande y se verifica que exista
        var vistaGrandeProducto = document.getElementById("vista-grande");
        if(!vistaGrandeProducto) {
            console.error("No se encontro el contenedor vista grande");
            return;
        }
        
        // Obtiene el elemento donde se mostrara la imagen y verifica si existe
        var imagenGrande = document.getElementById("imagen");
        if (!imagenGrande) {
            console.error("No se encontro el contenedor de la imagen grande");
            return;
        }
        
        // Obtiene el elemento donde se mostrara la descripcion del producto y verifica si existe
        var descripcion = document.getElementById("descripcion-producto");
        if (!descripcion) {
            console.error("No se encontro el contenedor para la descripcion del producto");
            return;
        }
        
        var precio = document.getElementById("precio-producto");
        var talla = document.getElementById("talla-modal");
        var tallasSelect = document.getElementById("tallas-producto");
    
        // Se extraen los datos del producto 
        var imgUrl = elemento.getAttribute("data-img");
        var desc = elemento.getAttribute("data-description");
        var precioValue = elemento.getAttribute("data-price");
        var tallasValue = elemento.getAttribute("data-size").split(", ");
        

        // Muestra la imagen grande
        imagenGrande.src = imgUrl;

        // Se inserta la informacion en el contenedor
        descripcion.innerHTML = desc;
        precio.innerHTML = "Precio: $" + precioValue;
        talla.innerHTML = "Tallas disponibles: ";
        tallasSelect.innerHTML = "<option value=''>Seleccionar talla</option>";
    
        //por cada talla del producto se crea una opcion en el <select>
        tallasValue.forEach(function(talla) {
            var option = document.createElement("option");
            option.value = talla;
            option.textContent = talla;
            tallasSelect.appendChild(option);
        });
    
        //muestra el contenedor de la vista ampliada
        vistaGrandeProducto.style.display = "block";
    } catch (error) {
        console.error("Error al ver la vista grande", error);
    }
    
}

//Esta funcion permite cerrar la ventana de la vista grande del producto
function cerrarVistaGrande(event) {
    try {
        const vistaGrandeProducto = document.getElementById("vista-grande");

        // Comprobar si el elemento existe antes de proceder
        if (!vistaGrandeProducto) {
            console.error("No se encontró el contenedor de la vista grande.");
            return; // Salimos si no existe el elemento
        }

        // Si el clic fue en el contenedor principal (y no en un elemento interno)
        if (event.target === vistaGrandeProducto) {
            vistaGrandeProducto.style.display = "none";
        }
    } catch (error) {
        // Capturamos cualquier error que ocurra dentro de la función
        console.error("Error al intentar cerrar la vista grande:", error);
    }
}
// document.getElementById("vista-grande").addEventListener("click", cerrarVistaGrande);
//Funcion que agrega los productos al carrito de compras 
function vistaGrande(event) {
    console.log(event.target); // aquí se usaría el target recibido
}

// Funcion para agregar los productos al carrito
function agregarAlCarrito() {
    try {

        if(!Array.isArray(carrito)){
            console.error("Error: carrito no es un arreglo");
            return;
        }

        //obtiene la talla seleccionada
        const tallaSeleccionada = document.getElementById("tallas-producto").value;
        //verifica si se selecciono la talla
        if (!tallaSeleccionada) {
            alert("Por favor, selecciona una talla antes de agregar al carrito.");
            return;
        }

       
        // Obtiene los datos del producto 
        var imagen = document.getElementById("imagen").src;
        var nombreProducto = document.getElementById("descripcion-producto").textContent;
        var precioProducto = parseFloat(document.getElementById("precio-producto").textContent.replace('Precio: $', '').trim());


        // Verifica si el carrito esta inicializado correctamente
        if (typeof carrito === "undefined"){
            console.error("EL carrito aun no esta inicailizado", error);
            return ;
        }

        // Agrega el producto al carrito
        carrito.push({ nombre: nombreProducto, imagen, precio: precioProducto, talla: tallaSeleccionada });

        alert("Producto añadido al carrito: " + nombreProducto + " - Talla " + tallaSeleccionada);

        // Actualiza los productos en el carrito si es que existe la funcion actulizarcarrito
        if(typeof actualizarCarrito == 'function'){
            actualizarCarrito();
        }else{console.warn("ERROR: no esta definida la funcion actualizar carrito");}
        vistaGrande({target: document.getElementById("vista-grande")});

    }catch(error){
        console.error("Error: No se pudo agregar al carrito", error);
    }
}

//Funcion que actualiza los productos en el carrito con el total de la compra
function actualizarCarrito() {
    try {

        const carritoLista = document.getElementById("carrito-lista");
        const totalElement = document.getElementById("total");

        // Verificar si se encuentran los contenedores que se van a usar
        if (!carritoLista || !totalElement){
            console.error("Error: No se encontro el contenedor carrito o total");
            return;
        }
   
        // Limpia el contenido de actual de los productos en el carrito
        carritoLista.innerHTML = "";

        // Recorre cada producto para mostrarlo
        carrito.forEach((producto, index) => {
            console.log("precio del producto seleccionado");
            console.log(producto.precio);

            // Verifica que el precio sea valido
            if (!producto || typeof producto.precio !== "number"){
                console.warn(`Producto invalido en el index ${index}:`, producto);
                return;
            }    

            const li = document.createElement("li");
            li.textContent = `${producto.nombre} - Talla: ${producto.talla} - $${producto.precio}`;
            
            // Se crea un boton para eliminar un producto del carrito
            const eliminarButton = document.createElement("button");
            eliminarButton.textContent = "Quitar";
            eliminarButton.onclick = () => eliminarProducto(index);

            // Se añade el boton a los elementos de la lista en carrito
            li.appendChild(eliminarButton);
            carritoLista.appendChild(li);
        });

        total = carrito.reduce((sum, producto) => sum + producto.precio, 0);
        totalElement.textContent = total.toFixed(2);

    } catch (error){
        console.error("Error: Error al actualizar el carrito de compras");
    }
}

//Funcion que elimina un producto del carrito de acuerdo a su indice
function eliminarProducto(index) {
    try {
        
        //se verifica que el carrito sea un arreglo antes de operar sobr él
        if(!Array.isArray(carrito)){
            console.error("Error: carrito no es un arreglo");
            return;
        }

        //Elimina un elemento en la posicion espesificada
        carrito.splice(index, 1);

        //actuliza los productos del carrito despues de eliminar alguno
        actualizarCarrito();
    } catch (error){
        console.error("Error: Error, no se pudo eliminar el producto");
    }
    
}

//Quita todos los productos que se encuentra en el carrito
function vaciarCarrito() {
    try {
        // verifica el carrito
        if(!Array.isArray(carrito)){
            console.warn("Error:carrito no es un arreglo, y no se puede vaciar");
            return;
        }

        //vacia el carrito sin crear uno nuevo
        carrito.length = 0;

        //verifica que exista la funcion actulizar carrito
        if(typeof actualizarCarrito === 'function'){
            actualizarCarrito();
        }else{
            console.warn("ERROR: no es eat definida la funcion actualizar carrito");
        }

    } catch (error) {
        console.error("Error: error al vaciar el carrito", error);
    }
    // carrito = [];
    // actualizarCarrito();
}

//Permite visualizar el carrito de compras y cerrarlo
function cerrarCarrito() {
    try {

        const carritoModal = document.getElementById("ventana-carrito");

        //verifca que si se encuentre el conteneder ventana-carrito
        if (!carritoModal) {
            console.error("Error: No se encontró el elemento con id 'ventana-carrito'.");
            return;
        }

        //se optiene el estado actual de la visibilidad
        const estadoActual = carritoModal.style.display?.toLowerCase() || "";

        //muestra u oculta la ventana-carrito segun la visibilidad actual    
        if (estadoActual === "none" || estadoActual === "") {
            carritoModal.style.display = "block";
        } else {
            carritoModal.style.display = "none";
        }
    } catch (error) {
        console.error("Error al intentar cerrar o abrir el carrito:", error);
    }
}



// Función de búsqueda lineal para buscar un producto por nombre
function buscarProducto(query) {
    try {
        //verifica que el parametro sea una cadena
        if (typeof query !== 'string') {
            console.warn("La búsqueda debe ser una cadena de texto.");
            return;
        }

        //limpia y normaliza la busqueda
        query = query.toLowerCase().trim();
    
        if (!isNaN(query)) { //si la entrada es un numero
            console.warn("Por favor, ingrese un nombre o palabra clave para buscar productos.");
        }

        //verifica que la lista de productos este definida
        if (!Array.isArray(productos)) { 
            console.error("Error: 'productos' no está definido o no es un arreglo.");
            return;
        }

        // Filtra los productos que incluyan el texto buscado  
        const resultados = productos.filter(producto =>
            producto?.nombre?.toLowerCase().includes(query)
        );

        if (resultados.length === 0) {
            alert("No se encontraron productos con esa búsqueda.");
        }

        //verifica que exista la funcion mostrarProductos
        if (typeof mostrarProductos === 'function') {
            mostrarProductos(resultados);
        } else {
            console.warn("Advertencia: 'mostrarProductos' no está definida o no es una función.");
        }
    } catch (error) {
        console.error("Error durante la búsqueda de productos:", error);
    }
}


// Manejo de eventos de búsqueda
document.getElementById('boton-busqueda').addEventListener('click', () => {
    const query = document.getElementById('barra-busqueda').value;
    buscarProducto(query);
});

// Opcional: realizar la búsqueda mientras el usuario escribe
document.getElementById('barra-busqueda').addEventListener('input', () => {
    const query = document.getElementById('barra-busqueda').value;
    buscarProducto(query);
});


//confirmar compra de productos
function confirmarCompra() {
    try {
        //En caso de que el carito no contenga productos mostrar un mensaje
        if (carrito.length == 0) {
            alert("El carrito está vacío. Agrega productos para comprar.");
            return;
        }
        
        const ventanaPago = document.getElementById('ventana-pago');

        //verifica si exisite la ventana-pago
        if(!ventanaPago) {
            console.error("ERROR: no se encontro el contenedor ventana-pago");
            return;
        }
        ventanaPago.style.display = 'block';
        // Mostrar la ventana para correo y selección de pago
        // document.getElementById('ventana-pago').style.display = 'block';
    } catch(error) {
        console.error("ERROR: error al confirmar la compra", error);
    }
}


/** */
    // Función para manejar la confirmación de compra
document.getElementById('confirmar-pago').addEventListener('click', () => {
    const correo = document.getElementById('correo').value;
    if (!correo || !validarCorreo(correo)) {
        alert("El correo electrónico ingresado no es válido.");
        return;
    }

    const metodoPago = obtenerMetodoPago();
    if (!metodoPago) {
        alert("Selecciona un método de pago válido.");
        return;
    }

    // Mostrar la confirmación de compra
    const mensaje = carrito.map(producto => `${producto.nombre} - Talla: ${producto.talla} - $${producto.precio}`).join("\n");
    const totalCompra = carrito.reduce((sum, producto) => sum + producto.precio, 0);

    alert(`
        Detalles de la compra:
        ${mensaje}
        
        Total: $${totalCompra.toFixed(2)}
        
        Método de pago: ${metodoPago}
        
        Compra confirmada. ¡Gracias por tu compra!
    `);

    // Guardar el historial de compras en el localStorage
    guardarHistorialDeCompra(correo, carrito, metodoPago);

    // Vaciar el carrito después de la compra
    vaciarCarrito();
    cerrarVentanaPago();
});

// Función para validar el correo
function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

// Función para obtener el método de pago seleccionado
function obtenerMetodoPago() {
    const opciones = document.getElementsByName('metodo');
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            return opciones[i].value;
        }
    }
    return null; // Si no se seleccionó un método
}
/**/



// Función para cerrar el ventana de pago
function cerrarVentanaPago() {
    document.getElementById('ventana-pago').style.display = 'none';
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    total = 0;
    actualizarCarrito();
}

// Función para obtener el método de pago (sin validación)
// function obtenerMetodoPago() {
//     const opciones = document.getElementsByName('metodo');
//     return metodo; // Retornar un valor predeterminado o simplemente dejarlo así
// }

// Función para guardar el historial de compra
function guardarHistorialDeCompra(correo, carrito, metodoPago) {
    const historial = {
        correo: correo,
        productos: carrito,
        metodoPago: metodoPago,
        fecha: new Date().toLocaleString()
    };

    // Guardar el historial en el localStorage
    let historialDeCompras = JSON.parse(localStorage.getItem('historialCompras')) || [];
    historialDeCompras.push(historial);
    localStorage.setItem('historialCompras', JSON.stringify(historialDeCompras));
}


// Función para buscar y mostrar los productos con el nombre sudadera
function mostrarProductosSudaderas(productos) {
    const contenedorProductos = document.getElementById('contendor-boton-busqueda')
    contenedorProductos.innerHTML = '';
    var resultadoProducto;
    resultadoProducto = productos.filter(producto => producto.nombre === 'Sudadera');

    /*
        Recorre los productos filtrados para generar un contenedor 
        para cada producto con su informacion correspondiente
    */
    resultadoProducto.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        divProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen" onclick="verImagenGrande(this)" 
                 data-img="${producto.imagen}" 
                 data-description="${producto.descripcion}" 
                 data-price="${producto.precio}" 
                 data-size="${producto.talla}">
            <p>${producto.nombre}</p>
            <p>$${producto.precio}</p>
        `;
        contenedorProductos.appendChild(divProducto);
    });
};


/*
    Llamar a la función para mostrar los productos en la ventana de la pagina web
    alternando la visibilidad entre los contenedores 
*/ 
function verSudaderas(){

    mostrarProductosSudaderas(productos);

    var ocultarProductos =  document.getElementsByClassName("contenedor-productos")[0];
    var mostrarSudaderas =  document.getElementsByClassName("contenedor-busqueda-botones")[0];

    if(ocultarProductos.style.visibility === "hidden" && mostrarSudaderas.style.visibility === 'visible'){

        ocultarProductos.style.visibility = "visible";
        mostrarSudaderas.style.visibility = "hidden";
        mostrarSudaderas.style.display = 'none';
        ocultarProductos.style.display = 'grid';

    }else{

        ocultarProductos.style.visibility = "hidden";
        mostrarSudaderas.style.visibility = "visible";
        mostrarSudaderas.style.display = 'grid';
        ocultarProductos.style.display = 'none';
    }
}

// Función para buscar y mostrar los productos con el nombre short
function mostrarProductosShorts(productos) {
    const contenedorProductos = document.getElementById('contendor-boton-busqueda')
    contenedorProductos.innerHTML = '';
    var resultadoProducto;
    resultadoProducto = productos.filter(producto => producto.nombre === 'Short');
    resultadoProducto.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        divProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen" onclick="verImagenGrande(this)" 
                 data-img="${producto.imagen}" 
                 data-description="${producto.descripcion}" 
                 data-price="${producto.precio}" 
                 data-size="${producto.talla}">
            <p>${producto.nombre}</p>
            <p>$${producto.precio}</p>
        `;
        contenedorProductos.appendChild(divProducto);
    });
};

/*
    Llamar a la función para mostrar los productos en la ventana de la pagina web
    alternando la visibilidad entre los contenedores 
*/ 
function verShorts(){

    mostrarProductosShorts(productos);

    var ocultarProductos =  document.getElementsByClassName("contenedor-productos")[0];
    var mostrarShorts =  document.getElementsByClassName("contenedor-busqueda-botones")[0];

    if(ocultarProductos.style.visibility === "hidden" && mostrarShorts.style.visibility === 'visible'){

        ocultarProductos.style.visibility = "visible";
        mostrarShorts.style.visibility = "hidden";
        mostrarShorts.style.display = 'none';
        ocultarProductos.style.display = 'grid';

    }else{

        ocultarProductos.style.visibility = "hidden";
        mostrarShorts.style.visibility = "visible";
        mostrarShorts.style.display = 'grid';
        ocultarProductos.style.display = 'none';
    }
}


// Función para buscar y mostrar los productos con el nombre chamarras
function mostrarProductosChamarras(productos) {
    const contenedorProductos = document.getElementById('contendor-boton-busqueda')
    contenedorProductos.innerHTML = '';
    var resultadoProducto;
    resultadoProducto = productos.filter(producto => producto.nombre === 'Chamarra');
    resultadoProducto.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        divProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen" onclick="verImagenGrande(this)" 
                 data-img="${producto.imagen}" 
                 data-description="${producto.descripcion}" 
                 data-price="${producto.precio}" 
                 data-size="${producto.talla}">
            <p>${producto.nombre}</p>
            <p>$${producto.precio}</p>
        `;
        contenedorProductos.appendChild(divProducto);
    });
};

/*
    Llamar a la función para mostrar los productos en la ventana de la pagina web
    alternando la visibilidad entre los contenedores 
*/ 
function verChamarras(){

    mostrarProductosChamarras(productos);

    var ocultarProductos =  document.getElementsByClassName("contenedor-productos")[0];
    var mostrarShorts =  document.getElementsByClassName("contenedor-busqueda-botones")[0];

    if(ocultarProductos.style.visibility === "hidden" && mostrarShorts.style.visibility === 'visible'){

        ocultarProductos.style.visibility = "visible";
        mostrarShorts.style.visibility = "hidden";
        mostrarShorts.style.display = 'none';
        ocultarProductos.style.display = 'grid';

    }else{

        ocultarProductos.style.visibility = "hidden";
        mostrarShorts.style.visibility = "visible";
        mostrarShorts.style.display = 'grid';
        ocultarProductos.style.display = 'none';

    }
}


// Función para buscar y mostrar los productos con el nombre pantalones
function mostrarProductosPantalones(productos) {
    const contenedorProductos = document.getElementById('contendor-boton-busqueda')
    contenedorProductos.innerHTML = '';
    var resultadoProducto;
    resultadoProducto = productos.filter(producto => producto.nombre === 'Pantalon');
    resultadoProducto.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        divProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen" onclick="verImagenGrande(this)" 
                 data-img="${producto.imagen}" 
                 data-description="${producto.descripcion}" 
                 data-price="${producto.precio}" 
                 data-size="${producto.talla}">
            <p>${producto.nombre}</p>
            <p>$${producto.precio}</p>
        `;
        contenedorProductos.appendChild(divProducto);
    });
};

/*
    Llamar a la función para mostrar los productos en la ventana de la pagina web
    alternando la visibilidad entre los contenedores 
*/ 
function verPantalones(){

    mostrarProductosPantalones(productos);

    var ocultarProductos =  document.getElementsByClassName("contenedor-productos")[0];
    var mostrarShorts =  document.getElementsByClassName("contenedor-busqueda-botones")[0];

    if(ocultarProductos.style.visibility === "hidden" && mostrarShorts.style.visibility === 'visible'){

        ocultarProductos.style.visibility = "visible";
        mostrarShorts.style.visibility = "hidden";
        mostrarShorts.style.display = 'none';
        ocultarProductos.style.display = 'grid';

    }else{

        ocultarProductos.style.visibility = "hidden";
        mostrarShorts.style.visibility = "visible";
        mostrarShorts.style.display = 'grid';
        ocultarProductos.style.display = 'none';
    }
}


// Función para buscar y mostrar los productos con el nombre camisas 
function mostrarProductosCamisas(productos) {
    const contenedorProductos = document.getElementById('contendor-boton-busqueda')
    contenedorProductos.innerHTML = '';
    var resultadoProducto;
    resultadoProducto = productos.filter(producto => producto.nombre === 'Camisa');
    resultadoProducto.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        divProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen" onclick="verImagenGrande(this)" 
                 data-img="${producto.imagen}" 
                 data-description="${producto.descripcion}" 
                 data-price="${producto.precio}" 
                 data-size="${producto.talla}">
            <p>${producto.nombre}</p>
            <p>$${producto.precio}</p>
        `;
        contenedorProductos.appendChild(divProducto);
    });
};

/*
    Llamar a la función para mostrar los productos en la ventana de la pagina web
    alternando la visibilidad entre los contenedores 
*/ 
function verCamisas(){

    mostrarProductosCamisas(productos);

    var ocultarProductos =  document.getElementsByClassName("contenedor-productos")[0];
    var mostrarShorts =  document.getElementsByClassName("contenedor-busqueda-botones")[0];

    if(ocultarProductos.style.visibility === "hidden" && mostrarShorts.style.visibility === 'visible'){

        ocultarProductos.style.visibility = "visible";
        mostrarShorts.style.visibility = "hidden";
        mostrarShorts.style.display = 'none';
        ocultarProductos.style.display = 'grid';

    }else{

        ocultarProductos.style.visibility = "hidden";
        mostrarShorts.style.visibility = "visible";
        mostrarShorts.style.display = 'grid';
        ocultarProductos.style.display = 'none';
    }
}


// Función para buscar y mostrar los productos con el nombre vestidos
function mostrarProductosVestidos(productos) {
    const contenedorProductos = document.getElementById('contendor-boton-busqueda')
    contenedorProductos.innerHTML = '';
    var resultadoProducto;
    resultadoProducto = productos.filter(producto => producto.nombre === 'Vestido');
    resultadoProducto.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        divProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen" onclick="verImagenGrande(this)" 
                 data-img="${producto.imagen}" 
                 data-description="${producto.descripcion}" 
                 data-price="${producto.precio}" 
                 data-size="${producto.talla}">
            <p>${producto.nombre}</p>
            <p>$${producto.precio}</p>
        `;
        contenedorProductos.appendChild(divProducto);
    });
};

/*
    Llamar a la función para mostrar los productos en la ventana de la pagina web
    alternando la visibilidad entre los contenedores 
*/ 
function verVestidos(){

    mostrarProductosVestidos(productos);

    var ocultarProductos =  document.getElementsByClassName("contenedor-productos")[0];
    var mostrarShorts =  document.getElementsByClassName("contenedor-busqueda-botones")[0];

    if(ocultarProductos.style.visibility === "hidden" && mostrarShorts.style.visibility === 'visible'){

        ocultarProductos.style.visibility = "visible";
        mostrarShorts.style.visibility = "hidden";
        mostrarShorts.style.display = 'none';
        ocultarProductos.style.display = 'grid';

    }else{
        
        ocultarProductos.style.visibility = "hidden";
        mostrarShorts.style.visibility = "visible";
        mostrarShorts.style.display = 'grid';
        ocultarProductos.style.display = 'none';
    }
}

/* 
    Función que permite volver a la parte incial de la pagina web si es que estamos
    en la parte inferior de la pagina.
*/
function volverArriba() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


