function search(nums, target){
    let start = nums[0], end = nums.length - 1;

    
    
    while(start <= end){
        let mid = Math.floor((nums.length)/2)

        if(mid === target) return mid;
        else if(nums[mid]<target){
            start = mid + 1
        }else{
            end = mid - 1;
        }
    }
    return -1
}
let arr = [1,2,3,4,5,6,7]
console.log(search(arr,5))