console.log("welcome to web programming")

var a = 100
console.log(typeof(a))

a = "hello"
console.log(a)
console.log(typeof(a))

const x = 500
console.log(x)

//x = 300
//console.log(x)

//object literal
student = {
    sid: 1,
    fnm: "rohan",
    lastname:"arora",
    result: "pass" 
}
console.log ((student.sid))
console.log ((student))
console.log (typeof(student))
var z;
console.log (z)

var z = 10+20
console.log (z)

//how to declare a function
//method 1 
function sayhello(){
    console.log("hello world!")
}
sayhello()

//method 2

let hello = function (name){
    console.log(`hello, ${name}`)
}

hello("rohan")

var name = "global"
let other_name  ="global in"
function sayhello() {
    name
}

function updateScore(currentScore, value, bonus) {
    return bonus ? currentScore + value * bonus : currentScore + value;
}

updateScore(10, 3)


//function week 2 in class
var add = function(a,b){
    return a+b
}

function arithmatic (fn,a,b){
    return fn(a,b)
}

hasdhbcgasdsdhj