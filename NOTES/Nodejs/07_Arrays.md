[[#Array -]]
[[#Methods of Array]]
### Array:-
 
- In JS array we can add more elements
- In JS array we can insert element with different datatype
- zero based indexing
- JS array-copy-operation create shallow copies. means change in value leads in the change in actual value.

###### Methods of Array

		.push
		.pop
		.includes
		.indexOf
		.join
*important*
		`.slice`
		`.splice`
		`.concat`
		`.spread`

1. Push method :- `.push()` is used to push new element into the array.
2. Pop method :-  `.pop()` is used to remove last element from the array.
3. Include Method :- `.include()` Checks the statement or value and returns the Boolean result.
4. Index method :- `.indexOf()` gives index no. of array.
5. Join Method :- `.join()` bind the array and convert it into string.
6.  Slice Method :- 
      - `.slice(start,end)`
      -  Helps in removing element from the certain index.
      -  Does not include ending index
      -  It will not effect the actual array.

7. Splice Method :- 
	- `.splice(start, end)` 
	-  Helps in removing element from certain index.
	-  Include ending index
	-  It leads change in actual array too.
	
8. Concat Method :- `.concat()` merges two arrays and returns new array.
9. Spread Method :- 
	- Spread different arrays into one and returns it.
	- syntax like using triple dot before arrayName
	- syntax :- [...ArrayName, ...2ndArrayName, ...3rdArrayName]
	