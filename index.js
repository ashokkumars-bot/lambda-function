// function counter(){
//     let count =0;
//     return function () {
//         count++;
//         return count;
//     }
// }

// let counterData = counter();
// console.log("data",counterData());
// console.log("data",counterData());
// console.log("data",counterData());
// console.log("data",counterData());
// console.log("data",counterData());
// if (!Array.prototype.myForEach) {
//   Array.prototype.myForEach = function (callback) {
//     for (let i = 0; i < this.length; i++) {
//       if (this.hasOwnProperty(i)) {
//         callback(this[i], i);
//       }
//     }
//   };
// }

// [1, 2, 3].myForEach((value, index, data) => {
//   console.log(value, index);
// });

if (!Array.prototype.myForEa) {
Array.prototype.myForEa = function(callback){
    for(let i=0;i<this.length;i++){
        // if (this.hasOwnProperty(i)) {
            callback(this[i])

        // }
    }
}
}


[1,2,3].myForEa(data => {
    console.log(data,"myForEa")
})


// console.log(b)
// const b=10;
sayHello()
function sayHello(){
    console.log("dayta")
}




function hello(callback){
    console.log("hello");
    callback();
    // return "hello";
}

console.log(hello(function(){
    console.log("inside")
}))

new Promise((resolve,reject) => {
    console.log("promise")
    resolve("data resolved")
}).then(data => {
    console.log(data)
})  