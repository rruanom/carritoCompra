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

const pedirCesta = ()=> {
    const cesta = JSON.parse(localStorage.getItem("cesta")) || 'La cesta está vacía.';
    return cesta;
}