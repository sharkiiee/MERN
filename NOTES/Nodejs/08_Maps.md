- The `map` function is a built-in array method used to iterate over an array and apply a provided function to each element.
- Creates a new array with the results of calling the provided function on every element in the calling array.

*Short point*
1. Map will iterate over all the elements of the array.
2. Create a transformation function performing operation to the element.
3. Return a new array. 

**Example :-** Create a new array containing element multiples of 3 . Given array = [1,2,3,4,5]

*Without map*

		const arr = [1,2,3,4,5];
		const newArr = [];
		for(let i = 0; i<arr.length ; i++){
			newArr.push(arr[i]*3)
		}
		console.log(newArr);

*With map*

		const arr = [1,2,3,4,5];
		function transformation(i){
		return i * 2;
		}
		const ans = input.map(transformation);
		console.log(ans);