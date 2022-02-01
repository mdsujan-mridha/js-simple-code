const arr=[-12,-14,-16,-18,-20];
let Num=arr[0];  
for( var i=0;i<arr.length;i++){
    var element=arr[i];
    if(element>Num)
     {
         Num=element;
     }
}
console.log(Num);
   