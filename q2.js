/*
Um bracket é considerado qualquer um dos seguintes caracteres: (, ), {, }, [ ou ].
Dois brackets são considerados um par combinado se o bracket de abertura (isto
é, (, [ou {) ocorre à esquerda de um bracket de fechamento (ou seja,),] ou} do
mesmo tipo exato. Existem três tipos de pares de brackets : [ ], { } e ( ).
Um par de brackets correspondente não é balanceado se o de abertura e o de
fechamento não corresponderem entre si. Por exemplo, { [ ( ] ) } não é balanceado
porque o conteúdo entre {e} não é balanceado. O primeiro bracket inclui o de
abertura, (, e o segundo inclui um bracket de fechamento desbalanceado,].
Dado sequencias de caracteres, determine se cada sequência de brackets é
balanceada. Se uma string estiver balanceada, retorne SIM. Caso contrário, retorne
NAO.
*/

const seq = (str)=> {
    const arr = [...str]
    const len = arr.length   
    let count = 0
    if(len%2==0)
    {
        for(let i=0; i<len; i++){
            let first = arr[i]
            let last = arr[len-1-i]
            if(first.concat(last) === '{}' || first.concat(last) === '[]' || first.concat(last) === '()'){                
               count+=1
            }
        }        
        if(count===len/2){
            return 'SIM'
        }else{
            return 'NÃO'
        }
    }
}

const teste1 = seq('{[()]}');
const teste2 = seq('{[(])}');
const teste3 = seq('{{[[(())]]}}');

console.log(teste1, teste2, teste3)

