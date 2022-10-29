var valores = [];
var numeros = 0;

while(valores.length < 8){
    numeros = prompt('Digite 8 números:');
    numeros = numeros**3;
    valores.push(numeros);
    console.log(numeros);  
}
