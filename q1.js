/*
Dado um array de números inteiros, retorne os índices dos
dois números de forma que eles se somem a um alvo
específico.
Você pode assumir que cada entrada teria exatamente uma
solução, e você não pode usar o mesmo elemento duas
vezes.
*/

const alvo = (arr, alvo)=> {
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j<arr.length; j++){
            if(i!==j){
                let val=arr[i]+arr[j]
                if(val==alvo){
                    return [i, j]
                }
            }
        }
    }
}

arr = [2, 7, 11, 15]
console.log(alvo(arr, 9))