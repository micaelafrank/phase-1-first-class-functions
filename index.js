/*function receivesAFunction(callback){
    console.log(callback());
    return 2 + 2;
}
  

// const returnsAnAnonymousFunction = function () {
//     console.log("I am anonymous!");
//}


let returnsAnAnonymousFunction = function() {
    return (function() {  
        console.log("I am anonymous!");
    });
}

function returnsANamedFunction(){
    return function myFullName(){
    console.log("I am named!");
}
}

*/





// function receivesAFunction(foo){
//     foo();
// }

// function startDinner(){
//         console.log("It's time to cook dinner!");
// };

// function dishInOven(){
//     console.log(`Now that your dish is in the oven, wait 45 minutes`);
// }

// function returnsANamedFunction(){
//     const sayMyName = function (name){
//         return (`My name is ${name}`);
//     };
//     return sayMyName;
// }

// function returnsAnAnonymousFunction(){
//     return (function(){
//         console.log("I am anonymous!");
//     })
// }





function receivesAFunction(cb){
    return cb();
}

function returnsANamedFunction(){
    return function returnName(){
        console.log("My name is micaela");
    }
}

function returnsAnAnonymousFunction(){
    return () => console.log(5 + 7 + 6 + 7);
}

console.log(returnsANamedFunction());
console.log(returnsAnAnonymousFunction());


















