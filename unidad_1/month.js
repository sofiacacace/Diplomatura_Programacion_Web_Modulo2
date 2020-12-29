var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function month(){
    var newArray = [];
    let num = document.querySelector('#num').value;

    for (let i = 0; i < daysOfMonth.length; i++){
        if (daysOfMonth[i] == num){
            newArray.push(months[i]);
        }
    }
    
    //Imprime en html
    document.querySelector('#result').innerHTML = 'Los meses con ' + num + ' días son ' + newArray.join(', ');
}

//Imprime en consola:
/* console.log('Los meses son 30 días son:')
console.log(month(30));

console.log('Los meses son 31 días son:')
console.log(month(31)); */

//nota: para usar esa opción de impresión por consola, el script debe estar dentro del body y al final.
