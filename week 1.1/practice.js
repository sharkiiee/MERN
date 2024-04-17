function kiratsReadFile(){
    return new Promise((resolve)=>{
        setTimeout(function(){
            resolve("Hii there");
        },5000);;
    })
}

function main(){
    let value = 3;
    kiratsReadFile().then(function(value){
        console.log(value);
    })
    console.log(value);
}

main();
console.log("After main");
