/*
2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;
*/

function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarIMC(IMC) {
    if (IMC < 18.5) {
        return 'Abaixo do peso';
    } else if (IMC => 18.5 && IMC < 25) {
        return 'Peso normal';
    } else if (IMC => 25 && IMC < 30) {
        return 'Acima do  peso';
    } else if (IMC => 18.5 && IMC < 25) {
        return 'Obeso';
    } else {
        return 'Obsidade grave';
    }
}

function main() {
    const peso = 75;
    const altura = 1.75;

    const IMC = calcularIMC(peso, altura);
    console.log(classificarIMC(IMC));
}

main();