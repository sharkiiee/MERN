[[#Middleware's]]
[[#app.use()method]]
[[#How to send data as query parameter -]]


Before doing some operation onto the data 2 pre-checks are basically to be done
- ==Authentication== :- Making sure this person is logged in into the website or basically we hit the backend server and check for id password and other stuffs.
- ==Input Validation== :- They are trying to implement the logic but have they send correct inputs.

For checking these we have something called `middlewares`.

### Middleware's
1. Middleware's helps in doing authentication and input validation.
2. We can pass multiple callback methods while implementing any http request.
3. Programmer create these middleware methods and user passing these methods can go to actual logical implementation.
##### IMPORTANT 
There are three inputs pass to callback function:-
- req
- res
- next :- `next` is function in itself which we call if the things are fine. Like things are fine here go to the next function.

**Example of middleware**

	function middlewareName(req,res,next){
		if(condition){
			res.status(403).json({
				msg:"Incorrect input"
			})
		}
		else{
			next()
		}
	}


#### app.use()method
It means the middleware this is been written inside the `app.use(middleware)` will get call everywhere after your end point, its the first function that is been called when every request executes.

###### How to send data as query parameter :-
After the route/queryParameter.
`localhost:3000?n=3000`

**Programs :-**
1. Count the number of request is been sent.
2. Find the average time your server is taking to handle requests.
