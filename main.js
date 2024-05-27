const fragment = document.createDocumentFragment();
const listaCarrito = document.querySelector('#listaCarrito');
let cesta = [];
const productos = [{
    'alimento': 'tomate',
    'cantidad': 0
},
{
    'alimento': 'lechuga',
    'cantidad': 0
},
{
    'alimento': 'pollo',
    'cantidad': 0
},
{
    'alimento': 'queso',
    'cantidad': 0
},
{
    'alimento': 'agua',
    'cantidad': 0
},
{
    'alimento': 'bollo',
    'cantidad': 0
},
{
    'alimento': 'pavo',
    'cantidad': 0
}];

//eventos
document.addEventListener('click', (evento) => {
    const productoSeleccionado = evento.target.id;
    if (evento.target.value == 'añadir') {
        añadirProducto(productoSeleccionado);
    } else if (evento.target.value == 'eliminar') {
        eliminarProducto(productoSeleccionado);
    } else {
       limpiarTodo();
    };
});

const limpiarTodo = () => {
    productos.forEach((elemento)=> elemento.cantidad = 0);
    console.log(productos);
    cesta = productos.filter(({ cantidad }) => cantidad > 0);
    localStorage.clear();
    pintarCarrito(cesta);
};

const añadirProducto = (producto1) => {
    for (let i = 0; i < productos.length; i++)
        if (productos[i].alimento == producto1) {
            productos[i].cantidad += 1;
            cesta = productos.filter(({ cantidad }) => cantidad > 0);
            let cestaString = JSON.stringify(cesta)
            localStorage.setItem("cesta", cestaString);
            pintarCarrito(cesta);
        };

};

const eliminarProducto = (producto1) => {
    for (let i = 0; i < productos.length; i++)
        if (productos[i].alimento == producto1) {
            productos[i].cantidad -= 1;
            cesta = productos.filter(({ cantidad }) => cantidad > 0);
            let cestaString = JSON.stringify(cesta)
            localStorage.setItem("cesta", cestaString);
            pintarCarrito(cesta);
        };

};

const pintarCarrito = () => {
    cesta = JSON.parse(localStorage.getItem("cesta")) || [];
    listaCarrito.innerHTML = '';
    if (cesta.length == 0) {
        let cestaVacia = document.createElement('p');
        cestaVacia.innerHTML = 'La cesta está vacía.';
        listaCarrito.append(cestaVacia);
    } else {
        cesta.forEach(({ alimento, cantidad }) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            label.setAttribute('for', alimento);
            label.textContent = `${cantidad} x ${alimento}`;
            input.id = alimento;
            input.setAttribute('type', 'button');
            input.setAttribute('value', 'eliminar');
            label.append(input);
            fragment.append(label);
        });
        listaCarrito.append(fragment);
    };
};

pintarCarrito(cesta);