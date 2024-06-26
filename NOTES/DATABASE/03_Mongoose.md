- Mongoose helps you to connect to ur database.
- Helps you to define a schema. --> Writing mongoDb validation.

**Syntax -**

	const mongoose = require('mongoose');
	mongoose.connect("URL");
	const User = moongose.model('Users',{name: String, email: String, password: String});
	const user = new User({
		name: "harkirat Singh",
		email: 'harkirat@gmail.com',
		password: '123456'
	})
	user.save();

## HTTPFYING putting data into database :-

// Short idea of doing it -

	const mongoose = require('mongoose');
	mongoose.connect("URL");
	const User = moongose.model('Users',{name: String, email: String, password: String});
	app.post("/signup",function(req,res){
	const username = req.body.username;
	const password = req.body.password;
	const name = req.body.name;
	const user = new User({
		name: name,
		email: username,
		password: password
	})
	user.save();
	res.json({
	msg: "User Created successfully"
	})
	})
	user.save();

## Why are we even making mongoDB as schema based db even it is meant for the schemaless.

1. This sounds counter intuitive since mongodb is schemaless? That is true, but mongoose makes you define schema for things like autocompletions/ Validating data before it goes in the DB to make sure you’re doing things right Schemaless Dbs can be very dangerous, using schemas in mongo makes it slightly less Dangerous.
2. MongoDB lets you insert some transitive or nested objects.

example:-

	const User = mongoose.model('User',userSchema);
	const Course = mongoose.model('Course',CourseSchema);
	
	const userSchema = new moongoose.Schema({
		email:String,
		password:String,
		purchaseCourse:[{
			type:mongoose.Schema.Types.ObjectId,
			ref:'Course'}]
	})
	
	const CourseSchema = new mongoose.Schema({
		title:String,
		price:5999
	});


