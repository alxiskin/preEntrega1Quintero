const arrayDeProductos = [
    {
        id: 1,
        nombre: 'remera',
        precio: 10000,
        categoria: 'indumentaria',
        stock: 2
    },
    {
        id: 2,
        nombre: 'camisa',
        precio: 15000,
        categoria: 'indumentaria',
        stock: 2,
    },
    {
        id: 3,
        nombre: 'pantalon',
        precio: 20000,
        categoria: 'indumentaria',
        stock: 3,
        
    },
]

const seleccionUsuario = parseInt(prompt('Bienvenido/a, qué producto desea comprar. Ingrese el código de producto: 1) remera, 2) camisa, 3) pantalon'));



 
const encontrado = arrayDeProductos.find(p => p.id === seleccionUsuario)
 

console.table(encontrado);

let unidades = parseInt (prompt("Cuantas unidades desea incluir"));



let costo = parseInt(encontrado.precio * unidades);

alert ("Ud. deberá abonar $ " + costo);



