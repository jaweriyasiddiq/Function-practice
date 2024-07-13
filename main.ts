///////////////////////////////FUNCTION////////////////////////////////////
//SIMPLE FUNCTION
function greeting() {
  console.log("hello participant"); //function defination
}
greeting(); // calling statement
//WITH PARAMETER
//WITH NUMBER
function addition(a: number, b: number) {
  console.log("a+b=", a + b);
}
addition(3, 5);
//WITH STRING
function myInfo(name: string, nationality: string) {
  console.log("My name is", name, "I am", nationality);
}
myInfo("jaweriya", "pakistani");
//WITH RETURN STATEMENT
//WITH NUMBER
function multiplication(x: number, y: number) {
  return x * y;
}
//ACCESSING
//1st way
let result = multiplication(2, 6); //WE USE THIS FOR BEST PRACTICE
console.log(result);
//2nd way
console.log(multiplication(4, 7));
//WITH STRING
function message(name: string, bestwishes: string) {
  return name + "," + bestwishes;
}
let result1 = message("mutaiba", "All the best for your quiz");
console.log(result1);
//TYPES OF PARAMETERS
//1-OPTION PARAMETER
function studenInfo(name: string, age: number, hobby?: string) {
  console.log(name, age, hobby);
}
studenInfo("jaweriya", 18);
//2-DEFAULT PARAMETER
function subtraction(num1: number, num2: number = 10) {
  console.log(num2 - num1);
}
subtraction(2);
//REST PARAMETERS
function marks(...rest: any[]) {
  console.log(rest);
}
marks("maths",100, "pst",50, "isl",50, "phy",85, "chem",85, "practical",15);

