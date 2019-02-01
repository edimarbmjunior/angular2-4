var minhaVar = 'minha variavel!';
function minhaFunc(x, y) {
    return x + y;
}
//ES 6 ou ES 2015
var num = 2;
var Pi = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
//ES6 ou ES 2015
numeros.map(function (valor) { return valor * 2; });
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
//Não funciona, pois foi tipada a variavel
var n1 = 'sdfsdf';
//n1 = 4;
var n2 = 'sdfsdf';
n2 = 4;
