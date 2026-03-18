let genderType="female"

function printGender()
{
let color="brown"
console.log("Outside the if block",color);
if(genderType.startsWith("female"))
    {
   var age=30
   let color="pink"
    console.log("Inside if-block color",color);
	 }
 console.log("Outside if-block age", age);
}
printGender();
console.log("print the value of genderType",genderType);
genderType="male";
console.log("print the updated value of genderType",genderType);