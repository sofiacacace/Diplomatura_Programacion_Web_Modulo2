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
    },
    {
        nombre: "manzana",
        precio: 75
    }
]

var sum = 0;
var listProducts = [];

//Functions
let loadProducts = () => {

    products.forEach((producto, i) => { 

        //General container of products
        let productsContainer = document.querySelector('#products-container');

        //Create boxes for each product
        let productBox = document.createElement('div'); 
        productBox.id = `product${i}`; //assign an Id
        productBox.className = 'product-box enabled'; ///assign classes

        let imageContainer = document.createElement('div');
        imageContainer.className = 'img-box';
        let productImage = document.createElement('img'); //add img element
        productImage.className = 'product-img'; ///assign classes
        productImage.src = `img/product${i+1}.jpg`; //add img

        let checkBox = document.createElement('input');
        checkBox.className = 'checkbox';
        checkBox.type = 'checkbox';
        checkBox.value = `${producto.nombre}`;
        checkBox.addEventListener('click', buy); //onClick event

        let detailsContainer = document.createElement('div');
        detailsContainer.className = 'details';
        let productName = document.createElement('p');
        let productPrice = document.createElement('p');
        productPrice.className = 'price-text';
        let productNameText = document.createTextNode(`${producto.nombre.toUpperCase()}`);
        let productPriceText = document.createTextNode(`${'$' + producto.precio}`);

        imageContainer.appendChild(productImage);
        productBox.appendChild(imageContainer);
        productName.appendChild(productNameText);
        productPrice.appendChild(productPriceText);
        detailsContainer.appendChild(productName);
        detailsContainer.appendChild(productPrice);
        detailsContainer.appendChild(checkBox);
        productBox.appendChild(detailsContainer);
        productsContainer.appendChild(productBox);
        
    })

    let buttonBuy = document.querySelector('button');
    let textButton = document.createTextNode('Comprar');
    buttonBuy.type = 'submit';
    buttonBuy.value = 'buy';
    buttonBuy.className = 'button';
    buttonBuy.addEventListener('click', buy);

    buttonBuy.appendChild(textButton);
    
}

let buy = (e) => {
   
    if ( !listProducts.includes(e.target.value) && e.target.value != 'buy' ){
        listProducts.push(e.target.value);
        console.log(listProducts);

    } else if (listProducts.includes(e.target.value) && e.target.value != 'buy'){
        listProducts = listProducts.filter(item => item != e.target.value);
        console.log(listProducts);
    } else {
        listProducts.forEach((producto) => { 
            console.log('entre en list products');
            products.forEach((p) => { 
                console.log('entre en productos');
                if (producto == p.nombre){
                    console.log('entre en el if');
                    sum = sum + parseInt(`${p.precio}`);
                    console.log(sum);

                    let table = document.querySelector('tbody');

                    let row = document.createElement('tr');
                    let column1 = document.createElement('td');
                    let column1Text = document.createTextNode(`${p.nombre}`);
                    column1.appendChild(column1Text);
                    row.appendChild(column1);

                    let column2 = document.createElement('td');
                    let column2Text = document.createTextNode(`${p.precio}`);
                    column2.appendChild(column2Text);
                    row.appendChild(column2);

                    table.appendChild(row);

                }
            });
        });

        let finalPrice = document.querySelector('.total-price');
        let price = document.createElement('p');
        let priceText = document.createTextNode('$' + sum);
        price.appendChild(priceText);
        finalPrice.appendChild(price);
            
    };
}

let run = () => {
    loadProducts();
}