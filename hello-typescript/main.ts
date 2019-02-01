var minhaVar = 'minha variavel!';

function minhaFunc(x, y){
    return x+y;
}

//ES 6 ou ES 2015
let num = 2;
const Pi = 3.14;

var numeros = [1, 2, 3];
numeros.map(function(valor){
    return valor * 2;
});

//ES6 ou ES 2015
numeros.map(valor=> valor * 2);

class Matematica {
    soma(x,y){
        return x + y;
    }
}

//Não funciona, pois foi tipada a variavel
var n1:string = 'sdfsdf';
//n1 = 4;

var n2:any = 'sdfsdf';
n2 = 4;
