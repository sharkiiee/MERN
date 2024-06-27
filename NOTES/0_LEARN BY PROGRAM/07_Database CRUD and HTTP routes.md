## Routes\

### User
- GET / kidneyData
	Description : shows the user data about kidneys.
	Header input : username , password 
	validation : userValidation
	output : username, healthyKidneys, unhealthyKidneys.

- POST /signup 
	Description : Adding new user in the database
	Header Input : username, password
	validation : userValidation
	Output : "${username} is been added to our database"


### Doctors

## Database

### userSchema
- username : String
- password : String

