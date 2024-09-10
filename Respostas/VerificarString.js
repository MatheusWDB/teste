/*
2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
*/ 

let string = "Artigo Ármario Árvore Amanda"
let quantidadeLetra = 0
let letraMinuscula = 0
let letraMaiuscula = 0

for (const letra of string.normalize('NFD').replace(/\p{Diacritic}/gu, '')) {
    if (letra === "a" || letra === "A") {
        quantidadeLetra++

        if (letra == letra.toUpperCase()) {
            letraMaiuscula++
        } else if (letra == letra.toLowerCase()) {
            letraMinuscula++
        }
    }
}

if (quantidadeLetra == 0) {
    console.log(`Em "${string}" não há nenhuma letra "a".`)
} else {
    console.log(`Em "${string}" há ${quantidadeLetra} letras "a", ${letraMaiuscula} maiúsculas e ${letraMinuscula} minúsuclas.`)
}
