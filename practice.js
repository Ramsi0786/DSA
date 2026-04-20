function index(arr){
    let max = -1;

    for(let i = 0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max
}

console.log(index([2,4,1,5,6,7]))

