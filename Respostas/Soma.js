/*
3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA?
*/

let SOMA = 0 
let INDICE = 12

for (K = 0; K < INDICE; K++) {
    SOMA = SOMA + K
    console.log (SOMA)
}

/*
Resposta: SOMA == 66
*/
