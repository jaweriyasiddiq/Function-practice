//SIMPLE FUNCTION
function greeting() {
    console.log("hello participant"); //function defination
}
greeting(); // calling statement
//WITH PARAMETER
//WITH NUMBER
function addition(a, b) {
    console.log("a+b=", a + b);
}
addition(3, 5);
//WITH STRING
function myInfo(name, nationality) {
    console.log("My name is", name, "I am", nationality);
}
myInfo("jaweriya", "pakistani");
//WITH RETURN STATEMENT
//WITH NUMBER
function multiplication(x, y) {
    return x * y;
}
//ACCESSING
//1st way
var result = multiplication(2, 6); //WE USE THIS FOR BEST PRACTICE
console.log(result);
//2nd way
console.log(multiplication(4, 7));
//WITH STRING
function message(name, bestwishes) {
    return name + "," + bestwishes;
}
var result1 = message("mutaiba", "All the best for your quiz");
console.log(result1);
//TYPES OF PARAMETERS 
//1-OPTION PARAMETER 
function studenInfo(name, age, hobby) {
    console.log(name, age, hobby);
}
studenInfo("jaweriya", 18);
//2-DEFAULT PARAMETER
function subtraction(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    console.log(num2 - num1);
}
subtraction(2);
