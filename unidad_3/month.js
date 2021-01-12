var tablaMesDia = [
    [
        "Enero",
        31
    ], 
    [
        "Febrero",
        28
    ], 
    [
        "Marzo",
        31
    ],
    [
        "Abril",
        30
    ],
    [
        "Mayo",
        31
    ],
    [
        "Junio",
        30
    ],
    [
        "Julio",
        31
    ],
    [
        "Agosto",
        31
    ],
    [
        "Septiembre",
        30
    ],
    [
        "Octubre",
        31
    ],
    [
        "Noviembre",
        30
    ],
    [
        "Diciembre",
        31
    ]
]

var colors = ["black", "blue", "purple", "pink", "red", "orange", "yellow", "green", "brown", "grey", "black"];
var titulo = document.getElementsByTagName("h1");
var tabla = document.querySelector("table");
var botones = document.querySelector("#botonera");
var row = document.getElementsByTagName("tr");
var i=-1;

function dibujar(){
    var text;
    var row = document.createElement("tr");

    titulo[0].style.color = colors[i];
    botones.style.display = "none";

    if (i >= 0){

        for(let j = 0; j < 2; j++){ 

            var column = document.createElement("td");

            row.appendChild(column);
            console.log(i);
            text = document.createTextNode(tablaMesDia[i][j]);
            column.appendChild(text);
            tabla.appendChild(row);
        }
    }

    var recorrido = setTimeout(() => {

        if (i < tablaMesDia.length-1){
            i++;
            dibujar();
        } else {
            botones.style.display = "block";
        }
    }, 1000);
    
    
} 

function modoDiurno(){
    
    document.body.style.backgroundColor = "lightslategrey";

    for(let i = 1; i < row.length; i++){
        row[i].style.color = "black";

        if(i%2 == 0){
            row[i].style.backgroundColor = "palevioletred";
        }
        else{
            row[i].style.backgroundColor = "pink";
        }
    }
}

function modoNocturno(){
   
    document.body.style.backgroundColor = "darkslategrey";

    for(let i = 1; i < row.length; i++){
        row[i].style.color = "white";

        if(i%2 == 0){
            row[i].style.backgroundColor = "grey";
        }
        else{
            row[i].style.backgroundColor = "black";
        }
    }
}