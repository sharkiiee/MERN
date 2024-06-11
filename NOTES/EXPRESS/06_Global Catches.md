 1. It works as the middleware for every request .
 2. It helps you give the user better error message rather than showing all modules and other data in the end point.
 3. Also known as Error-handling middleware.

*We use :-*
- Error-handling Middleware's :- This is special type of middleware function in Express that has 4 arguments instead of 3 ((err,res,req,next)). Express recognizes it as an error-handling because of these 4 arguments.

		app.use(function(err,req,res,next){
			res.json({
				msg: "Sorry something is up with our server"
			})
		})

**Program :-**
1. Make the alert if the exceptions goes more than 100.