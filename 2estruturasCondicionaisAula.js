/*
= (operador de atribuição) -  é usado para atribuir valores a uma variável em JavaScript.
== (Igual a ou Equal to) - é usado para comparação entre duas variáveis, independentemente do tipo de dados da variável.
=== (Valor e Tipo igual) - é usado para a comparação entre duas variáveis, mas isso irá verificar o tipo estrito, 
o que significa que ele irá verificar o tipo de dados e comparar dois valores.
% = significa resta
*/

const numero = 5;
const isNumeroPar = (numero % 2) === 0;

if (isNumeroPar) {
    console.log('o numero é par');
}   else {
    console.log('O número é impar');
}