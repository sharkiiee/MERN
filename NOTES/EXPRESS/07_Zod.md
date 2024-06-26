1. You can do better input validation because you don't have to put multiple if-else for different types of data.
2. A input validation library.
3. You have to make the schema and according to schema it validates the data.

	**How can you define your schema**
1.  Import the library.
		`const zod = require("zod");`
2. Define the schema.
		`const schema = zod.string();`
3. Check the response.
		`const reponse = schema.safeParse(data);`
		

**Example :-** Do the input validation and make sure the input should be string only and follows the following constraints.
1. Min characters is 2.
2. Max characters is 10.

		const zod = require("zod");
		const stringSchema = zod.string().min(2).max(10).nonempty();
		const validString = "Sarthak";
		const invalidString = "";
		const res = stringSchema.safeParse(validString);
		if(!res.success){
			res.status(411).json({
				msg:'input is invalid'
			})
		}
		else{
			res.json({
			msg:"inputs are valid"
			})
		}


#### Coercion for primitives
Zod now provides a more convenient way to coerce primitive values.

	const schema = z.coerce.string();
	schema.parse("tuna");  //"tuna"
	schema.parse(12);      //"12"
	schema.parse(true);    //"true"
