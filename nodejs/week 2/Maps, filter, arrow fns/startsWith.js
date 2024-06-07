
//Create a function that findout's all the words starting with S;

const fNames = [
    "rohit",
    "mohan",
    "mukul",
    "sandeep",
    "sarthak",
    "shreyanshi",
    "pradeep",
];

const filtered = fNames.filter((i)=>{
    return i.startsWith("s");
})

console.log(filtered);