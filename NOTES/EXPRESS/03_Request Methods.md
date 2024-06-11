## Request Methods 

1. GET :- Asking something from server.
2. POST :- Put something on server.
3. PUT :- Update data.
4. DELETE :- Delete data.

#### STATUS CODES
1. 200 - Everything went fine.
2. 404 - Did not have route handler.
3. 500 - Something went wrong.
4. 411 - Inputs were incorrect.
5. 403 - You are not allowed or do not have the access.

###### NOTE :-
**How to ensure user is sending json data as input**
	`app.use(express.json())`

**How can a file catches a wildcard i.e. anything after route**
By using `:`

	app.get("/route/:fileName", function(req,res){\
		const name = req.params.fileName;
		res.json({
		name
		})
	})
	
	


**Programs :-**
1. Create a memory hospital.
	 -> Constraints :-
	 - You need to create 4 routes.
	 1. GET - User can check how many kidneys they have and their health.
	 2. POST - User can add new kidney.
	 3. PUT - User can replace a unhealthy kidney with healthy one.
	 4. DELETE - User can remove all the unhealthy kidneys.
2. Reading the contents of a file
	- Write code to read contents of a file and print it to the console.
	- You can use the fs library to as a black box, the goal is to understand async tasks.
	- Try to do an expensive operation below the file read and see how it affects the output.
	- Make the expensive operation more and more expensive and see how it affects the output.
  









