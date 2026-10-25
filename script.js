/**js - functionality
 * 
 * 1.variables:
 * a.let,const-block scoped
 * b.var-function scoped
 * 
 * 2.Datatypes:
 * a.primitive datatypes - Numbers,string,boolean
 * b.non-primitive datatypes - object,array,functions,type of operator
 * 
 * 3.Operators:
 * a.Arthematic - +,-,*,/,%
 * b.Assignment - =,+=,-=,==,*=,/=
 * c.comparision - ==,===,!=,!==
 * d.Logical - &&,||,!
 * e.Increment(++),Decrement(--)
 * f.Ternary operator(?)
 * ex=age>=18?"Adult:Minor";
 * 
 * 4.Type Conversion
 * a.Implict - js converts automatically
 *  "5"+2=52
 * b.Explicit - js converts manually
 *  "25"
 * Number("25")
 * 
 * 5.Conditional statements
 * a.if stmnt - only if a condition is true
 *   if(cond{
 *       //block fo code
 * })
 * 
 *b.if-else - 
  true-->if block
 false-->else block
 if(cond){
 //block fo code
 }else{
   //block fo code
 }

 c.else-if - if you have 2 or more conditions
 if(cond){
 //block fo code
 }else-if(cond){
   //block fo code
 }
   else{
   //block fo code
 }
   d.Nested if-placing if in another if stmnt
   if(cond){
     if(cond){
     }
     }
e.Switch - switch is used when you need to compare one value against all possible values
switch(value){
   case value1:
    //code
    break;
    case value2:
        //code
        break;
        }
 break- exit the current loop or a switch statement
 continue - skip the current loop or a switch statement and moves to next iteration
 
  6.Loops - to repeat actions without rewriting the code
 a.for loop - when you know how many times it should run
 let num=[10,20,30,40]
    for(i=0;i<num.length;i++){
     console.log(num(i))
     }
 b.while loop - when we dont know,first checks the condition and runs after
  let input="";
  while(!input){
    input=prompt("Enter your name");
    } 
    console.log("Hello",+input)
 c.do-while loop- Runs first check after
 let i=1;
 do{
 console.log(i);
 i++;
 }
 while(i<5){
 console.log(error)
 }
 d.for of - Gives each value from an array 
 let fruits=[apples,banana];
 for(let fruit of fruits){
  console.log(fruit(1))
  }
 e.for in - keys or indexes 
  let fruits=[apples,banana];
 for(let fruit in fruits){
  console.log(fruit)
  }  
     
 7.Function - reusable block of code
  ->Can call it whenever we need it
  syn: function name(){
  // code
  }
  name(); - to call the function
 a.Fun declaration
  function add(a,b){
  return a+b ;
  }
  let result=add(10,20);
  console.log(result);

 b.function Expression
   let abc=function(){ //input
   console.log("hello!"); //code
   }
    abc();  //output

  c.Arrow Function
  const add(10,20)=>{
    return 10+20;
    }
  
  d.parameters-placeholders , arguments - actual value
  e.Return - return sends a value back from the function
 8.Arrays - an ordered collection of data
  ->index starts froom '0'
  ->[]
  a.create any array
  let arr=["apple",'Banana',"cherry","Berry"];
  arr.pop();
  console.log(arr);
  ->let data=["bharathi",19,true];
  console.log(data);
  types of methods
  pop()-Remove from the end ---arr.pop();
  push() - add at the end ---arr.push("Strawberry");
  shift() - Remove from the beginning ---arr.shift();
  unshift() - add at the beginning ---arr.unshift("Mango");
  slice()- take a portion --arr.slice(1,3)
  concat()- combinining two or more arrays
   syn:let result=arr.concat(data);
  join() - arr -> string
   let colors=["Blue",".", "green"];
   let result = colors.join(",")
   console.log(result);
   o/p:Blue,.,green
  find()-to find the first element (or) matched
   let res=arr.find(arr=>a="cherry");
  findIndex()-to find index
   let res=arr.findIndex(arr=>a="cherry")
 c.Array map - returning new array
  let number=[1,2,3]
  let double = number.map(n=>n times 2);
 9.objects collection of key-value pairs
 name:"bharathi";
  let student={
  name:"parvathi",
  age:19,
  city:"nrt"
  }
  to change the property
  let student={
  name:"parvathi",
  age:19,
  city:"nrt"
  } 
  student.number="9876543220"; //adding of a property
  console.log(student)
  b.methods
   let student={
  name:"parvathi",
  age:19,
  city:function(){
    console.log("Nrt");
    }
  } 
    student.city();
  c.Nested objects
   let student={
  students:{
  name:"parvathi",
  name:"triveni"
  }
  age:19,
  city:"nrt"
  }
 student.keys() - only print the keys
 student.values() - only print the values
 student.entries() - prints both keys and values
 
 
 */
