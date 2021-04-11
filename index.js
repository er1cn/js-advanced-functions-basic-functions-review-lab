// Your code here
function saturdayFun(Activity="roller-skate") {
    return `This Saturday, I want to ${Activity}!`
}

const mondayWork = function(Activity="go to the office") {
    return `This Monday, I will ${Activity}.`
    
}

/*
function outer(greeting, msg="It's a fine day to learn") {
  return function(name, lang="Python") {
    return `${greeting}, ${name}! ${msg} ${lang};`
  }
}

outer("Hello")("student", "JavaScript")
//=> "Hello, student! It's a fine day to learn JavaScript"
*/

const wrapAdjective = function (style="*") {
return function(adjective="special") {
    return `You are ${style}${adjective}${style}!`
}
}

const Calculator = { 
add: function(a,b) {
        return a+b; 
},

subtract: function (a,b) {
    return a-b;

},

multiply: function (a,b) {
        return a*b;
    
},
divide: function(a,b){
        return a/b;
}
}

let actionApplyer = function (start,ray) {
    let a = start;
    for (let i=0; i < ray.length; i++ ) {
        a = ray[i](a)
    }
    return a
};