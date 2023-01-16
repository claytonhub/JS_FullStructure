/*Faça um programa para calcular o valor gasto de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM de viagem;

Imprima no console o valor que será gasto para realizar esta viagem.

*/

//InputDasInformações
const precoCombustivel = 5.89;
const kmPorLitro = 12.5;
const distanciaEmKM = 1353;

//Cálculo
const listrosConsumidos = distanciaEmKM / kmPorLitro;
const valorGasto = listrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));