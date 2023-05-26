//"use strict";


/*VARIABLES:
LET: old
VAR: recommened
CONST: static
*/

var a = 33;
var a = 89;
let b = "This is me";
console.log(a);
console.log(b);

/*DATATYPES
Numbers
Obejct
Boolean
String
Undefined
Null
*/

//FUNCTION

function hello(){
    console.log("Hello");
}

hello()

//OBJECTS
let employee ={
    name:"Hari",
    age:64,
    isHappy:true,
    func:function myFunc(number){
        console.log("Hola, the number is "+number)
        return this.name;
    }
}
console.log(employee.age);

res = employee.func(45); //Hola, the number is 45
console.log(res) //Hari

//EVENTS
document.addEventListener("click", 
    function click()
    {
    console.log("Clicked");
    alert("Hello!");
    let conf = confirm("Are hou sure?:");
    console.log(conf);
    }
)

//ARRAY
let arr = [34,55,'Hola']

//ARROW FUNCTIONS
arr.forEach(element => {
   console.log(element)
});

//Callback functions
setTimeout(() => {
    console.log("yayy")
},3000);
console.log("mai neeche wala script hu");


