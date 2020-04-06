/*
Digamos que você tenha um array para o qual o elemento i
é o preço de uma determinada ação no dia i.
Se você tivesse permissão para concluir no máximo uma
transação (ou seja, comprar uma e vender uma ação), crie
um algoritmo para encontrar o lucro máximo.
Note que você não pode vender uma ação antes de
comprar.
*/

const profit = (arr) => {
    let max = 0;
    const len = arr.length;

    for(let i=0; i<len; i++){
        for(let j=i+1; j<(len-i); j++){
            let maxProfit = arr[j]-arr[i]
            if(maxProfit > max){
                max = maxProfit
            }
        }
    }
    return max
}

console.log(profit([7,1,5,3,6,4]))
console.log(profit([7,6,4,3,1]))