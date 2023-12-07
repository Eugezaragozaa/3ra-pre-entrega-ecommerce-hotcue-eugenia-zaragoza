//PRODUCTOS//

const productos = [ 


    {
        id: "buso-01",
        titulo: "Buso-01",
        imagen: "./img/busos/buso1.jpeg",
        categoria: {
            nombre: "busos",
            id: "busos"
        },
        precio: 10000
    },
    {
        id: "buso-02",
        titulo: "Buso-02",
        imagen: "./img/busos/buso2.jpeg",
        categoria: {
            nombre: "busos",
            id: "busos"
        },
        precio: 10000
    },
    {
        id: "buso-03",
        titulo: "Buso-03",
        imagen: "./img/busos/buso3.jpeg",
        categoria: {
            nombre: "busos",
            id: "busos"
        },
        precio: 10000
    },
    {
        id: "buso-04",
        titulo: "Buso-04",
        imagen: "./img/busos/buso4.jpeg",
        categoria: {
            nombre: "busos",
            id: "busos"
        },
        precio: 10000
    },
    {
        id: "buso-5",
        titulo: "Buso-05",
        imagen: "./img/busos/buso5.jpeg",
        categoria: {
            nombre: "busos",
            id: "busos"
        },
        precio: 10000
    },
    {
        id: "buso-06",
        titulo: "Buso-06",
        imagen: "./img/busos/buso6.jpeg",
        categoria: {
            nombre: "busos",
            id: "busos"
        },
        precio: 10000
    },
    {
        id: "buso-07",
        titulo: "Buso-07",
        imagen: "./img/busos/buso7.jpeg",
        categoria: {
            nombre: "busos",
            id: "busos"
        },
        precio: 10000
    },
    {
        id: "buso-08",
        titulo: "Buso-08",
        imagen: "./img/busos/buso8.jpeg",
        categoria: {
            nombre: "busos",
            id: "busos"
        },
        precio: 10000
    },

    //REMERAS//
    {
        id: "Remera-01",
        titulo: "Remera-01",
        imagen: "./img/Remeras/Remera1.jpeg",
        categoria: {
            nombre: "Remeras",
            id: "Remeras"
        },
        precio: 5000
    },
    {
        id: "Remera-02",
        titulo: "Remera-02",
        imagen: "./img/Remeras/Remera2.jpeg",
        categoria: {
            nombre: "Remeras",
            id: "Remeras"
        },
        precio: 5000
    },
    {
        id: "Remera-03",
        titulo: "Remera-03",
        imagen: "./img/Remeras/Remera3.jpeg",
        categoria: {
            nombre: "Remeras",
            id: "Remeras"
        },
        precio: 5000
    },
    {
        id: "Remera-04",
        titulo: "Remera-04",
        imagen: "./img/Remeras/Remera4.jpeg",
        categoria: {
            nombre: "Remeras",
            id: "Remeras"
        },
        precio: 5000
    },
    {
        id: "Remera-05",
        titulo: "Remera-05",
        imagen: "./img/Remeras/Remera5.jpeg",
        categoria: {
            nombre: "Remeras",
            id: "Remeras"
        },
        precio: 5000
    },
    {
        id: "Remera-06",
        titulo: "Remera-06",
        imagen: "./img/Remeras/Remera6.jpeg",
        categoria: {
            nombre: "Remeras",
            id: "Remeras"
        },
        precio: 5000
    },
    {
        id: "Remera-07",
        titulo: "Remera-07",
        imagen: "./img/Remeras/Remera7.jpeg",
        categoria: {
            nombre: "Remeras",
            id: "Remeras"
        },
        precio: 5000
    },

//PANTALONES//

    {
        id: "Pantalon-01",
        titulo: "pantalon-01",
        imagen: "./img/Pantalones/pantslon1.jpeg",
        categoria: {
            nombre: "Pantalones",
            id: "Pantalones"
        },
        precio: 10000
    },
    {
        id: "Pantalon-02",
        titulo: "pantalon-02",
        imagen: "./img/Pantalones/pantslon2.jpeg",
        categoria: {
            nombre: "Pantalones",
            id: "Pantalones"
        },
        precio: 10000
    },
    {
        id: "Pantalon-03",
        titulo: "pantalon-03",
        imagen: "./img/Pantalones/pantslon3.jpeg",
        categoria: {
            nombre: "Pantalones",
            id: "Pantalones"
        },
        precio: 10000
    },
    {
        id: "Pantalon-04",
        titulo: "pantalon-04",
        imagen: "./img/Pantalones/pantslon4.jpeg",
        categoria: {
            nombre: "Pantalones",
            id: "Pantalones"
        },
        precio: 10000
    },
    {
        id: "Pantalon-05",
        titulo: "pantalon-05",
        imagen: "./img/Pantalones/pantslon5.jpeg",
        categoria: {
            nombre: "Pantalones",
            id: "Pantalones"
        },
        precio: 10000
    },
    {
        id: "Pantalon-06",
        titulo: "pantalon-06",
        imagen: "./img/Pantalones/pantslon6.jpeg",
        categoria: {
            nombre: "Pantalones",
            id: "Pantalones"
        },
        precio: 10000
    },
    {
        id: "Pantalon-07",
        titulo: "pantalon-07",
        imagen: "./img/Pantalones/pantslon7.jpeg",
        categoria: {
            nombre: "Pantalones",
            id: "Pantalones"
        },
        precio: 10000
    },
    {
        id: "Pantalon-08",
        titulo: "pantalon-08",
        imagen: "./img/pantalones/pantalon8.jpeg",
        categoria: {
            nombre: "Pantalones",
            id: "Pantalones"
        },
        precio: 10000
    },
]




/* let productos = [];

fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })


DOM INICIO */

const contenedorProductos = document.querySelector("#contenedor-productos");
//const botonesCategorias = document.querySelectorAll(".boton-categoria");//
//const tituloPrincipal = document.querySelector("#titulo-principal");//
//let botonesAgregar = document.querySelectorAll(".producto-agregar");//
//const numerito = document.querySelector("#numero");


//botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    //aside.classList.remove("aside-visible");}))//

//


function cargarProductos() {

    //contenedorProductos.innerHTML = "";//

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    //actualizarBotonesAgregar();//
}

cargarProductos();

/*
botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #4b33a8, #785ce9)",
            borderRadius: "2rem",
            textTransform: "uppercase",
            fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', 
            y: '1.5rem' 
            },
        onClick: function(){} // Callback after click
        }).showToast();

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}
*/