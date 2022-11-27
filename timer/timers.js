/* const timeoutObj = setTimeout(() => {
    console.log('timeout beyond time');
  }, 1500);
  
  const immediateObj = setImmediate(() => {
    console.log('immediately executing immediate');
  });
  
  const intervalObj = setInterval(() => {
    console.log('interviewing the interval');
  }, 500);
  
  clearTimeout(timeoutObj);
  clearImmediate(immediateObj);
  clearInterval(intervalObj); */

//   function myFunc(arg) {
//     console.log(`arg was after 6 sec => ${arg}`);
//   }
  
//   setTimeout(myFunc, 6000);

//   myFunc =(param1,param2)=>
//   {
//     console.log(param1 + param2+ 'rocks'+'2');
//   };
//   setTimeout(myFunc, 2000, 'Fizan');


//  function printstuff(){
//     console.log("Fizan");
//  }
//  setInterval(printstuff,2000);
//  const timerID=setTimeout(printstuff,0);
//  clearTimeout(timerID);

//  const timerID = setInterval
// const myTimeout = setTimeout(myGreeting, 3000);

// function myGreeting() {
//   document.getElementById("demo").innerHTML = "Happy Birthday to You !!"
// }

// function myStopFunction() {
//   clearTimeout(myTimeout);
// }
// var variable1;
// function mytimeFunction() {
// variable1 = setTimeout(function(){ alert("Hey World"); }, 5000);
// }
// function myClearFunction() {
// clearTimeout(varaible1);
// }

let c=0;
const myFunc=()=>{
    console.log('fizan');
    c+=1;
    if(c===5){
        console.log('done')
        clearInterval(timerID);
    }
};
const timerID= setInterval(myFunc,1000);
     // your actual code here, alternatively call an other function here
     
    
     

 