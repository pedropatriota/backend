
/*
Dados n inteiros não negativos representando um mapa de
elevação onde a largura de cada barra é 1, calcule quanta
água é capaz de reter após a chuva.
*/

function maxNumber(arr){
    let repeted =[]
    arr.filter((el, i)=>{
        if(arr.indexOf(el) !== i){
            repeted.push(el)
        }
    })
    return Math.max(repeted)
}


const retainedWater = (arr)=> {
    let count = 0;
    let max = maxNumber(arr);
        for(let i =0; i<arr.length; i++){
        let current= arr[i];
        let next = arr[i+1];
        let last = arr[arr.length -1];
        let lastButOne = last -1;
        if(current === lastButOne && current>last){
            continue;
        }
        
        if(current > next){
            if(current >= max){             
            }
            let diff = current - next;
            count+=diff;
            next= current;
        }        
    }
    return count
}


console.log(retainedWater([0,1,0,2,1,0,1,3,2,1,2,1]))