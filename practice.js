// function index(arr, target){
//     let start = 0, end = arr.length - 1;
//     let result = -1;

//     while(start <= end){
//         let mid = Math.floor((start + end)/2)

//         if(arr[mid] === target){
//             result = mid;
//             end = mid - 1;
//         }else if(arr[mid]<target){
//             start = mid + 1;
//         }else end = mid - 1;
//     }

//     return result;
// }


function first(arr, target){
    let start = 0, end = arr.length -1;
    let result = -1;

    while(start <= end){
        if(arr[mid] === target){
            result = mid;
            end = mid - 1;
        }else if(target > arr[mid]){
            start = mid + 1;
        }else end = end -1;
    }

    return result;
}

console.log(index([1,2,2,3,3,3,4,5,6,7],2))

