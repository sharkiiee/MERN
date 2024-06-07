// // 1. Write a program to create an Object. 

//     // Object Creation 

//     const names = {
//         fName:"Sarthak",
//         lName: "Agrawal"
//     }    
    
//     console.log(names.fName);
    
    
    
//     ----------------------------------------------------------------------------------------------
    
//     // 2. Write a program that prints all the male people first name given in a complex object 
    
//         // Array of objects
    
//     const people = [{
//         fName : "Sarthak",
//         gender: "male"
//     },{
//         fName : "Depanshu",
//         gender: "male"
//     },{
//         fName : "krithika",
//         gender: "female"
//     },{
//         fName : "jyoti",
//         gender: "female"
//     },{
//         fName : "mohit",
//         gender: "male"
//     },{
//         fName : "Rajeev",
//         gender: "male"
//     },
//     ]
//         for(i=0 ; i < people.length; i++){
//             if(people[i].gender == "male"){
//                 console.log(people[i].fName);
//             }
//         }
    
    
//     // 3. Write a program that have metadata regarding address and user can access that .
    
//     const people = [{
//         fName: "Sarthak",
//         address: {
//             houseNumber: "20",
//             street: "1"
//         }
//     },{
//         fName: "Rohan",
//         address: {
//             houseNumber: "21",
//             street: "2"
//         }
//     },{
//         fName: "Puneet",
//         address: {
//             houseNumber: "22",
//             street: "3"
//         }
//     },{
//         fName: "Piyush",
//         address: {
//             houseNumber: "23",
//             street: "4"
//         }
//     }
//     ]
    
//     for(i=0; i<people.length; i++){
//         if(people[i].fName == "Sarthak"){
//             console.log(people[i].address.street)
//         }
//     }