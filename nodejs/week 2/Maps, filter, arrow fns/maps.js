

// write code for inserting all the elements of one array into another array.
// Note: Each element should be multiplied by 2 before insertion in new array.

const arr = [1,2,3,4,5];

const secondArr = arr.map((i)=>{
    return i * 2;
});

console.log(secondArr);

