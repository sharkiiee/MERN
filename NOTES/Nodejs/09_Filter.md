The `.filter` method in JavaScript creates a new array with all elements that pass the test implemented by the provided function.

*Example :-* Find out the healthy kidneys of the user.

		const user = {
			name: "aryan",
		    kidneys: [
		        { healthy: false },
		        { healthy: false },
		        { healthy: true }
			    ]
			};
	// Filter out healthy kidneys
	let healthyKidneys = user.kidneys.filter(function(n){
		if(n.healthy){
			return true;
		}
		else{
			return false;
		}
	});
	console.log(healthyKidneys);


**.startsWith() method**
The `.startsWith()` method in JavaScript is used to check if a string starts with a specific sequence of characters.