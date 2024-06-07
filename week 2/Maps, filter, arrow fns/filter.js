

// Write a function that helps you to filter out all the even numbers from the array.

const arr = [1,2,3,4,5,6];

const ans = arr.filter((i)=>{
    if(i % 2 == 0){
        return true;
    }
    else{
        return false;
    }
})

console.log(ans);
