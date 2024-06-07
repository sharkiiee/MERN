// find the largest element in the array

const arr = [1,3,4,5,6];

let largestNumber = arr[0];
for(let i = 1; i< arr.length; i++){
    if(arr[i] > largestNumber ){
        largestNumber = arr[i];
    }
}

console.log(largestNumber);