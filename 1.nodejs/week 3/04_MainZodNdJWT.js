const jwt = require('jsonwebtoken');
const jwtPassword = "secret";
const zod = require('zod');

const emailSchema = zod.string().email();
const passwordSchema = zod.number().min(6);

function signJWT(username,password)
{
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);

    if(!usernameResponse.success ||!passwordResponse.success){
        return null;
    }

    const signature = jwt.sign({username},jwtPassword);
    return signature;
}

const res = signJWT("harkirat@gmail.com",123123);
console.log(res);

function verifyJWT(token)
{
    try {
        jwt.verify(token, "secret");
        return true;
    } catch (error) {
        return false;
    }
}

console.log(verifyJWT("eyJhbGciOiJIUzI1NiIsInR56IkpXVCJ9.eyJ1c2VybmFtZSI6ImhhcmtpcmF0QGdtYWlsLmNvbSIsImlhdCI6MTcxOTM4MDMwMX0.DdvidD0JkXRgPNSWppqaR-CmUiqTfVAG9I-ps18RCnk"));

function decodeJWT(token)
{
    // return either true or false after cheching JWT
    const decoded = jwt.decode(token);
    if(decoded){
        return decoded.username;
    }
    else{
        return false;
    }
}

console.log(decodeJWT("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhhcmtpcmF0QGdtYWlsLmNvbSIsImlhdCI6MTcxOTM4MDMwMX0.DdvidD0JkXRgPNSWppqaR-CmUiqTfVAG9I-ps18RCnk"));