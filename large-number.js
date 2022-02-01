// var num1=50;
// var num2=70;
// var num3=60;
                               //using if else without function
//  if(num1>num2 && num1>num3)
//  {
//     console.log('Number1 is bigger then two other ');
//  }
    
// else if(num2>num1 && num2>num3)
//     {
//         console.log("Number2 is bigger then two other ");
//     }
// else 
// {
//     console.log("Number3 is bigger then two other ");
// }
    
                                //using if else with function
//  function maxNumber(num1 ,num2 ,num3){
//      if(num1>num2 && num1>num3)
//       return num1;
//     else if(num2>num1 && num2>num3)
//     return num2;
//     else{
//         return num3;
//     }
//  }
//  const MaxValue=maxNumber(30 ,50 ,60)
//   console.log('Max number is',MaxValue);
                                         //using another process
  function maxNumber(num1 ,num2 ,num3){
    if(num1>num2 && num1>num3)

    return console.log('num1 is bigger');

   else if(num2>num1 && num2>num3)

   return console.log('num2 is bigger');
  
 else{
    return console.log('num3 is bigger');
   }
}

const MaxValue=maxNumber(30,100,50);
console.log('Max number is' ,MaxValue);