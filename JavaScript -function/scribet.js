



// /*variable*/
// var f="hello"
// var f="hi"
// console.log(f);

// let _doaa="obeidat"
// _doaa="mo"
// console.log(_doaa);

// const $car="BMW"
// console.log($car)

// /*datatype*/

// var y= 6 + 10  +" num";
// console.log(y)
// var y= "num" + 6 + 10 ;
// console.log( typeof y)

// var num= 6 + 2
// console.log( num)
// console.log(typeof 0)

// let d = 5;
// let o = 5;
// let  a = 6;
// console.log((d == o) , (d == a));2

// var coffee=["american", "turkish", "Arabian" ,"espresso"] 
// console.log(coffee[0]);

// var person={
//             firstName : "doaa",
//             lastName  : "obeidat",
//             age :"22" ,
// };
// console.log(person.age)

// console.log(typeof console.log);



// var coffee=["american", "turkish", "Arabian"]
// console.log( coffee [0] );

// var car = {type:"Fiat", model:"500", color:"white"};
// console.log(car.type,car.model)

// var car = {type:"Fiat", model:"500", color:"white"};
// console.log(car.type + " is " + car.model)

// let x = 100 + 50;
// console.log(x)

// let u = 10;
// let b = 50;
// let p = u + b;
// console.log(p)

// const L= new Date(12/7);
// console.log(L)

// function sayHello(userName){
// console.log(`Hi ${userName}`);
// }
// sayHello("doaa");





/* task.js */

function tellFortune(jobtitle,Location ,partner,numchild) {
    var f = 'You will be a ' + jobtitle+ ' in ' + Location + ' and married to ' +
partner  + ' with ' + numchild + ' kids';
    console.log(f);
}
tellFortune('software engineer', 'jordan', 'Alice', 3);

function calculateDogAge(r){
    return r * 7
}
console.log(`Your doggie is ${calculateDogAge(3)} years old in dog years!`)



function calculateSupply(age, num) {
    var maxage = 100;
    var total = num * 365* (maxage - age);
    var text = 'You will need ' + total + ' cups of tea to last you until the ripe old age of ' + maxage;
return text
    }
    console.log (calculateSupply(30, 3));

function cube(w){
   return w**3
}
console.log(cube(2))

function fullName (s,g){
    return s*g
}
function fullName(firstName, lastName){
    return firstName+" " + lastName
  }
  console.log(fullName("alex", "mercer"))

  function avg(d,a,a,o,o){
    sum=(d+a+a+o+o) /5
    
console.log(sum);
    }
    avg(1,2,3,4,5);
    avg(5,7,9,3,5);

    function getRandomInt() {
        return Math.floor(Math.random() );
      
      }
      console.log(Math.random());


function calculateDogAge(r){
   if (r * 7)

  {
    return true;
  }
    else {
        return false;
    }
}
console.log(`Your doggie is ${calculateDogAge(3)} years old in dog years!`)

let dogyears = 7 ;

if (dogyears < -1 ){

    alert("false");

}



else {

    alert(true)
}

function sayHello(userName){
  console.log(`Hallo ${userName}`);
  }
  sayHello("doaa");
  
  
  
  function double(cat) {
    return 2 * cat;
  }
  
  function double() {
    return 2 * 7;
  }
  
  function double(x) {
    return 2 * 'x';
  }
  
  function double1(x) {
      return 2 * x ;
    }
    
    function double2 (x){
      return 2 * x;
    }
   
    
    function  double3 (x) {
      return 2 * x;
    }
  
  function cube(z){
     return z**3
  }
  console.log(cube(4))
  
  function canIGetADrivingLicense(age){
      if(age>=20){
          console.log(`yes you can`)
      }else{
          console.log(`please come back after 3 years to get one `)
      }
  }
  canIGetADrivingLicense(21)
  canIGetADrivingLicense(17)
  
  function sameLength(string, string){
  if( string.length == 4){
      console.log(` true`)
  }else{
      console.log( `false`)
  }
  }
  sameLength("tree","clue")
  sameLength("tree","car")
  
  function largerNubmer(start,end){
      for(let i=start; i < end; i++)
      console.log(i);
  }
  largerNubmer(5,6);
  
  function smallerNubmer (a , x ,z){
      console.log(Math.min(a,x,z));
  }
  smallerNubmer(2,5,6);
  
  
  function shorterString(test, test2, test3){
      const arr = [test, test2, test3]
  
      const shorter = (left, right) => left.length <= right.length ? left : right
      
      console.log(
        arr.reduce(shorter)
      )
  
  }
  
   shorterString("a", "aa", "aaa");
  
   function longerString(long1, long2 , long3){
      var arr = [
          long1,
          long2,
         long3
        ];
        
        var lgth = 0;
        var longest;
        
        for (var i = 0; i < arr.length; i++) {
          if (arr[i].length > lgth) {
            var lgth = arr[i].length;
            longest = arr[i];
          }
        }
        
        console.log(longest);
   }
  
   longerString("aaaaaaa", "zzzzzzzzzz" , "xxxxxxxxxxxxxxxxxxx")
  
   function isEven (number){
      if(number % 2 == 0) {
          console.log("true");
      }
      
      else {
          console.log("false");
      }
   }
  
   isEven(6);
   isEven(5);
  
   function isOdd (number){
      if(number % 2 !== 0) {
          console.log("true");
      }
      
      else {
          console.log("false");
      }
   }
  
   isOdd(6);
   isOdd(5);
  
  
  function positiveNumber(x){
    console.log( Math.abs(x)) 
  }
  
  positiveNumber(-15);
  positiveNumber(10);
  
  function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
  
    console.log(Math.random());
  
    function randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
    
    const rndInt = randomIntFromInterval(1, 6)
    console.log(rndInt)
  
    function scoreInUniversty (x){
      if(x >= 95 && x <= 100){
          console.log("A")
      } else if (x >= 85 && x <= 94){
          console.log("B")
      } else if (x >= 70 && x <= 84){
          console.log("C")
      } else {
          console.log("the number out of the range")
      }
    }
    scoreInUniversty(99);
  
    
    function scoreInUniversty (x){
      switch (true) {
      case x >= 95 && x <= 100:
        console.log("A")  
      break;
      case x >= 85 && x <= 94:
        console.log("B")
        break;
       case x >= 70 && x <= 84:
        console.log("C")
        break;
      }
    }
    scoreInUniversty(86);