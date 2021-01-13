//Variables
var products = [
    {
        nombre: "harina",
        precio: 35
    },
    {
        nombre: "pan",
        precio: 25
    },
    {
        nombre: "papa",
        precio: 52
    },
    {
        nombre: "palta",
        precio: 55
    },
    {
        nombre: "fideos",
        precio: 85
    },
    {
        nombre: "aceite",
        precio: 350
    },
    {
        nombre: "sopa",
        precio: 86
    },
    {
        nombre: "mermelada",
        precio: 108
    },
    {
        nombre: "porotos",
        precio: 69
    },
    {
        nombre: "lentejas",
        precio: 85
    },
    {
        nombre: "mandarina",
        precio: 43
    },
    {
        nombre: "banana",
        precio: 79
    },
    {
        nombre: "leche de almendras",
        precio: 145
    },
    {
        nombre: "papel higiénico",
        precio: 147
    },
    {
        nombre: "lavandina",
        precio: 55
    },
    {
        nombre: "alcohol en gel",
        precio: 123
    },
    {
        nombre: "shampoo",
        precio: 400
    },
    {
        nombre: "arroz",
        precio: 66
    },
    {
        nombre: "salsa de tomate",
        precio: 35
    }
]

var sum = 0;
var listProducts = [];

//Functions
function buyProduct(e){
   
    if (e.target.value != 'buy' &&  !listProducts.includes(e.target.value) ){
        listProducts.push(e.target.value);

    } else if (e.target.value == 'buy'){
        document.querySelector('#text').innerHTML = "Lista de productos comprados:";
        document.querySelector('#list').innerHTML = listProducts.join(', ');

        for(let i=0; i < listProducts.length; i++){
            for(let j=0; j < products.length; j++){
    
                if (listProducts[i] == products[j].nombre){
                    
                    sum = sum + products[j].precio;
                }
    
            }
        }

        document.querySelector('#total').innerHTML = 'Total a pagar: $' + sum;
    }

    sum = 0;

}
