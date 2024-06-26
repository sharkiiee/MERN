#### What is database?
Database is place where your data can be stored persistently.
##### Why we need databases
1. Data can’t be dynamic, if you update in memory objects, the updates are lost if the process restarts.\
2. There are multiple servers in the real world.
**Database Architecture:-**
1. The user hits the backend.
2. Backend hits the database.
3. User doesn't have the access to the database/can't talk to the bd.

**Various types of databases-**
1. Graph database
2. Vector database
3. SQL database
4. noSQL database\

#### HOW DOES BACKEND CONNECT TO THE DATABASE

1. Express lets you create an http server.
2. jsonwebtoken libraray lets you create jwt.
3. Mongoose lets you connect to your database.

#### Why don’t we let the user hit the database directly? Database Give me all posts for myself What extra does the http server provide exactly?

1. Databases were are created using protocols that browsers don’t understand 
2. Databases don’t have granual access as a first class citizen. Very hard to do user specific access in them .
3. There are some databases (firebase) that let you get rid of the http server and try their best to provide granola access

#### Databases usually allow access to 4 primitives
1. Create Data 
2. Read Data 
3. Update Data 
4. Delete Data 
Popularly known as CRUD