#### Databases usually allow access to 4 primitives
1. Create Data 
2. Read Data 
3. Update Data 
4. Delete Data 
Popularly known as CRUD

## CREATE --> Inserting data in the database

1. You define the schema.
2. you define the model.
3. Using .create() function to insert data in the database.

		1.
		const userSchema = new mongoose.Schema({
			username:String,
			password:String
		})
		
		2. const User = mongoose.model('User',userSchema);
		
		3. User.create({
			   username: req.body.username,
			   password: req.body.password
		   })

## Read --> Reading data from your database

1. You define the schema.
2. You define the model.
3. Using find functions .

		3. User.findById("1");
		  User.findOne({
			  username:"harkirat@gmail.com"
		  })
		  User.find({
		  username:"harkirat96@gmail.com"
		  })
		  

## Update --> Updating your database

1. You define the schema.
2. You define the model.
3. Use update function to update data.

		  3. User.updateOne(
			  {"id","1"},
			  {$push: {purchaseCourses : }}
		  )
		
		 User.updateOne({
			 id:"1",
		 },
		 {
			 password:"newPassword"
		 })
		 
		 User.update({
		 premium:true
		 })

## Delete --> Deleting data in your database

1. You define the schema.
2. You define the model.
3. Use delete function to delete data..

		3. User.deleteMany({})  // deletes all your data.
		
		User.deleteOne({
		username:"harkirat@gmail.com"
		})