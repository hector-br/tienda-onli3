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

//funcion de nivel log
function log(level, message, data = null) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${level}] ${timestamp} - ${message}`;
    if (data) {
        console.log(logMessage, data);
    } else {
        console.log(logMessage);
    }
}


// Validación: asegurar que 'productos' es un arreglo y contiene productos válidos
if (!Array.isArray(productos)) {
    log("ERROR", ": productos", " no está definido correctamente.");
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

      log("DEBUG", "Fin de validación de productos.");
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
try {
    log("DEBUG", "Cargando productos");
    mostrarProductos(productos);
} catch (error) {
    log("DEBUG", "Error al cargar los productos");
    console.error("ERROR: error al cargar los prodcutos en la pagina", error);
    log("ERROR: error al cargar los prodcutos en la pagina", error);
}

//Funcion para mostrar una vista ampliada con la informacion del producto
function verImagenGrande(elemento) {
    try {
        log("DEBUG","Cargar vista grande");
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
        log("DEBUG","Error al ver la vista grande, error");
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
        log("Error al cerrar la vista grande");
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
        log("INFO","Agregando productos al carrito");
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
        log("ERROR: error a al agregar productos al carrito", error);
        console.error("Error: No se pudo agregar al carrito", error);
    }
}

//Funcion que actualiza los productos en el carrito con el total de la compra
function actualizarCarrito() {
    try {
        log("DEBUG","Actualizando productos del carrito");
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
        log("ERROR","No se pudo actualzar el carrito");
        console.error("Error: Error al actualizar el carrito de compras");
    }
}

//Funcion que elimina un producto del carrito de acuerdo a su indice
function eliminarProducto(index) {
    try {
        log("INFO","Quitado productos del carrito");
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
        log("DEBUG", "Vaciando el carrito");
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
        log("DEBUG", "Fin de proceso vaciar carrito");
    } catch (error) {
        console.error("Error: error al vaciar el carrito", error);
    }
    // carrito = [];
    // actualizarCarrito();
}

//Permite visualizar el carrito de compras y cerrarlo
function cerrarCarrito() {
    try {
        log("DEBUG");
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
        log("ERROR", "No se pudo cerrar el carrito", error);
        console.error("Error al intentar cerrar o abrir el carrito:", error);
    }
}



// Función de búsqueda lineal para buscar un producto por nombre
function buscarProducto(query) {
    try {
        log("DEBUG");
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
        log("ERROR", "Problemas al buscar el producto");
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
        log("DEBUG");
        log("INFO", "Confirmando la compra");
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
        log("ERROR", "No se pudo realizar la compra");
        console.error("ERROR: error al confirmar la compra", error);
    }
}


/** */
// Función para manejar la confirmación de compra
document.getElementById('confirmar-pago').addEventListener('click', () => {
    try {
        log("DEBUG");
        log("INFO", "Confirmando compra");
        const correo = document.getElementById('correo').value;
    
        // Validación robusta del correo electrónico
        if (!correo || !validarCorreo(correo)) {
            alert("El correo electrónico ingresado no es válido.");
            return;
        }
    
        // Evitar XSS: Asegurarse de que no se inserten caracteres maliciosos
        const metodoPago = obtenerMetodoPago();
        if (!metodoPago) {
            alert("Selecciona un método de pago válido.");
            return;
        }
    
        // Evitar inyección de código en el mensaje
        const mensaje = carrito.map(producto => {
            // Saneamiento de entradas para evitar inyección de HTML o JavaScript
            return `${sanitizeString(producto.nombre)} - Talla: ${sanitizeString(producto.talla)} - $${producto.precio}`;
        }).join("\n");
    
        const totalCompra = carrito.reduce((sum, producto) => sum + producto.precio, 0);
    
        // Mostrar la confirmación de compra de manera segura
        alert(`
            Detalles de la compra:
            ${mensaje}
            
            Total: $${totalCompra.toFixed(2)}
                
            Método de pago: ${metodoPago}
                
            Compra confirmada. ¡Gracias por tu compra!
        `);
    
        // Guardar el historial de compras de manera segura
        if (typeof guardarHistorialDeCompra === 'function') {
            // Asegurarse de no almacenar información sensible en localStorage
            const historial = {
                correo: sanitizeString(correo),
                carrito: carrito.map(producto => ({
                    nombre: sanitizeString(producto.nombre),
                    talla: sanitizeString(producto.talla),
                    precio: producto.precio
                })),
                metodoPago: sanitizeString(metodoPago),
                fecha: new Date().toISOString() // Guardar fecha de compra de manera segura
            };
    
            guardarHistorialDeCompra(historial);
        } else {
            console.warn("Advertencia: La función 'guardarHistorialDeCompra' no está definida.");
        }
    
        // Vaciar el carrito después de la compra, asegurando que no se guarde información sensible
        if (typeof vaciarCarrito === 'function') {
            vaciarCarrito();
        } else {
            console.warn("Advertencia: La función 'vaciarCarrito' no está definida.");
        }
    
        // Cerrar la ventana de pago si existe la función
        if (typeof cerrarVentanaPago === 'function') {
            cerrarVentanaPago();
        } else {
            console.warn("Advertencia: La función 'cerrarVentanaPago' no está definida.");
        }
    
    } catch (error) {
        log("ERROR", "No se pudo confirmar la compra", error);
        console.error("ERROR: no se pudo confirmar el pago", error);
    }
});
    
// Función de saneamiento para evitar inyecciones de HTML o JavaScript
function sanitizeString(str) {
    if (typeof str !== 'string') return str;
    const element = document.createElement('div');
    element.textContent = str; // Convertir texto en contenido seguro
    return element.innerHTML; // Retornar el texto saneado
}
    

// Función para validar el correo
function validarCorreo(correo) {
    // Verificar que la entrada sea una cadena de texto
    if (typeof correo !== 'string') {
        console.warn("Advertencia: El valor proporcionado para 'correo' no es una cadena.");
        return false;
    }

    // Valida el formato del correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Evaluar si el correo cumple con el formato esperado
    return regex.test(correo);
}

// Función para obtener el método de pago seleccionado
function obtenerMetodoPago() {
    // Obtener todos los elementos con el name 'metodo'
    const opciones = document.getElementsByName('metodo');

    // Validar que se encontraron elementos
    if (!opciones || opciones.length === 0) {
        console.warn("Advertencia: No se encontraron opciones de método de pago.");
    }

    // Buscar cuál opción está seleccionada (checked)
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            return opciones[i].value; // Retornar el valor del método seleccionado
        }
    }

    // Si ninguna opción fue seleccionada
    console.warn("Advertencia: No se seleccionó ningún método de pago.");

}
/**/


// Función para cerrar el ventana de pago
function cerrarVentanaPago() {
    try {
        log("DEBUG");
        // Intentar obtener el elemento de la ventana de pago
        const ventanaPago = document.getElementById('ventana-pago');

        // Verificar si el elemento existe
        if (!ventanaPago) {
            console.error("Error: No se encontró el elemento con ID 'ventana-pago'.");
            return;
        }

        // Ocultar el elemento cambiando su estilo
        ventanaPago.style.display = 'none';

    } catch (error) {
        // Capturar errores inesperados y mostrarlos en la consola
        console.error("ERROR: error al cerrar la ventana de pago:", error);
    }
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
    try {
        // Validaciones básicas de los parámetros
        if (typeof correo !== 'string' || correo.trim() === "") {
            // console.error("Error: El correo proporcionado no es válido.");
            return;
        }

        if (!Array.isArray(carrito) || carrito.length === 0) {
            console.error("Error: El carrito está vacío o no es un arreglo válido.");
            return;
        }

        if (typeof metodoPago !== 'string' || metodoPago.trim() === "") {
            console.error("Error: El método de pago no es válido.");
            return;
        }

        // Crear el objeto de historial
        const historial = {
            correo: correo,
            productos: carrito,
            metodoPago: metodoPago,
            fecha: new Date().toLocaleString()
        };

        // Recuperar historial anterior (si existe), asegurándose de que sea un arreglo
        let historialDeCompras = [];
        const historialGuardado = localStorage.getItem('historialCompras');

        if (historialGuardado) {
            try {
                const parseado = JSON.parse(historialGuardado);
                if (Array.isArray(parseado)) {
                    historialDeCompras = parseado;
                } else {
                    console.warn("Advertencia: El historial en localStorage no es un arreglo. Se sobrescribirá.");
                }
            } catch (parseError) {
                console.warn("Advertencia: No se pudo parsear el historial anterior. Se sobrescribirá.");
            }
        }

        // Agregar nuevo historial
        // historialDeCompras.push(historial);

        // Guardar en localStorage
        localStorage.setItem('historialCompras', JSON.stringify(historialDeCompras));

    } catch (error) {
        console.error("ERROR: erro al guardar el historial de compra:", error);
    }
}

// Función para buscar y mostrar los productos con el nombre sudadera

// Función común para mostrar productos por nombre
function mostrarProductosPorNombre(productos, nombre) {

    log("DEBUG");
    // Verificar que los productos sean un array válido
    if (!Array.isArray(productos)) {
        console.error("El parámetro 'productos' debe ser un arreglo.");
        return;
    }

    const contenedorProductos = document.getElementById('contendor-boton-busqueda');
    
    // Verificar que el contenedor boton-busqueda existe
    if (!contenedorProductos) {
        console.error("No se encontró el contenedor de productos.");
        return;
    }

    // Limpiar el contenedor antes de mostrar nuevos productos
    contenedorProductos.innerHTML = '';

    // Filtrar productos por nombre
    const resultado = productos.filter(producto => producto.nombre && producto.nombre.toLowerCase() === nombre.toLowerCase());

    // Si no se encuentran productos, mostrar advertencia
    if (resultado.length === 0) {
        console.warn(`No se encontraron productos con el nombre: ${nombre}`);
        return;
    }

    // Iterar sobre los productos encontrados
    resultado.forEach(producto => {
        // Verificar que el producto tenga los atributos necesarios
        if (!producto.imagen || !producto.nombre || !producto.precio || !producto.talla) {
            console.warn("ADVERTENCIA: Producto incompleto:", producto);
            return;  // No procesamos productos incompletos
        }

        try {
            // Crear el div del producto
            const div = document.createElement('div');
            div.classList.add('producto');
            div.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen" onclick="verImagenGrande(this)"
                    data-img="${producto.imagen}" 
                    data-description="${producto.descripcion || 'Sin descripción'}" 
                    data-price="${producto.precio}" 
                    data-size="${producto.talla}">
                <p>${producto.nombre}</p>
                <p>$${producto.precio}</p>
            `;
            contenedorProductos.appendChild(div);

        } catch (error) {
            console.error("ERROR: error al intentar crear un producto:", error);
        }
        log("DEBUG");
    });
}

// Función para alternar visibilidad de los contenedores
function alternarContenedores() {
    try {
        log("DEBUG");
        const ocultar = document.getElementsByClassName("contenedor-productos")[0];
        const mostrar = document.getElementsByClassName("contenedor-busqueda-botones")[0];
        
        //validar si existe 
        if (!ocultar || !mostrar) {
            console.error("Contenedores no encontrados");
            return;
        }
    
        const ocultarVisible = ocultar.style.visibility === "visible";
    
        ocultar.style.visibility = ocultarVisible ? "hidden" : "visible";
        ocultar.style.display = ocultarVisible ? "none" : "grid";
    
        mostrar.style.visibility = ocultarVisible ? "visible" : "hidden";
        mostrar.style.display = ocultarVisible ? "grid" : "none";
    } catch(error) {
        console.error("ERROR: error al alternar la visibilidad", error);
    }
    log("DEBUG");
}

// Función que se llama al hacer clic en los botones de producto
function verProducto(nombre) {
    try {
        log("DEBUG");
        log("INFO", "Mostrando prodcutos");
        mostrarProductosPorNombre(productos, nombre); // Mostrar productos por nombre
        alternarContenedores(); // Alternar entre los contenedores
    } catch (error) {
        console.error(`ERROR: error al ver los productos ${nombre}:`, error);
    }
}

// Funciones para mostrar productos
function verSudaderas() {
    try {
        log("INFO", "mostrando sudaderas");
        verProducto('Sudadera');
    } catch (error) {
        console.error("ERROR: error al ver las sudaderas", error);
    }
}

function verShorts() {
    try {
        log("INFO", "Mostrando shorts");
        verProducto('Short');
    } catch (error) {
        console.error("ERROR: error al ver los shorts", error);
    }
}

function verChamarras() {
    try {
        log("INFO", "Mostrando chamarras");
        verProducto('Chamarra');
    } catch(error) {
        console.error("ERROR: error al ver las chamarras", error);
    }
}

function verPantalones() {
    try {
        log("INFO" ,"MOstrando pantalones")
        verProducto('Pantalon');
    } catch(error) {
        console.error("ERROR: error al ver los pantalones", error);
    }
}

function verCamisas() {
    try {
        log("INFO", "Mostrando camisas");
        verProducto('Camisa');
    } catch(error) {
        console.error("ERROR: error al ver las camisas", error);
    }
}

function verVestidos() {
    try {
        log("INFO", "Mostrando vestidos")
        verProducto('Vestido');
    } catch(error) {
        console.error("ERROR: error al ver los vestidos", error);
    }
}

/* 
    Función que permite volver a la parte incial de la pagina web si es que estamos
    en la parte inferior de la pagina.
*/
function volverArriba() {
    try {
        log("DEBUG");
        log("INFO" ,"Volviendo a la parte superior de la aplicacion web");
        // Hace scroll hacia la parte superior 
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
        log("WARNING");
        console.error("ERROR: error al intentar volver al inicio de la página:", error);
    }
}




