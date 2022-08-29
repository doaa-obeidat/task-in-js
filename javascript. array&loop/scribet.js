1

 // [ 1,7 , 9 , 45, ]  

//  ["Str", "alex","moh",

//  'the','fox', 'over', "lazy", 'dog' ]

// //  What the index of "Banana","Tomato"
// var fruits=["Tomato","Banana","Watermelon"]
// (Banana[1])
// (Tomato[0])

// var FavoriteFood=["Pizza","Burger","pasta","Shawarma","minsaf"]
//     FavoriteSport=["Football","Basketball","tennis"]
//     FavoriteMovie=["The batman","THhe twin","Memory","Fantastic beasts"]


// function numbaOne(arr){
//     return arr[0];
//   }
//   console.log(numbaOne([1,2,3,4,5]));

//   function lastnum(arr){
//     return arr[4];
//   }
//   console.log(lastnum([1,2,3,4,5]));


// var array = [0,5,7,9];
// array.shift();
// array.unshift(1,3,4);
// array.pop();
// array.pop();
// array.pop();
// array.push(8,9,10);
// console.log(array);

// var array2 = [0,5,7,9];
// array2.shift();
// array2.pop();
// array2.pop();
// array2.push(9);
// array2.push(-7);
// array2.push(3.5);
// console.log(array2);


// function doubleValues (arr){
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++){
//         newArr.push(arr[i] * 2);
//     }
//     console.log(newArr) ;
// }
// console.log(doubleValues([1,2,3]));
// console.log(doubleValues([5,1,2,3,10]));

// function onlyEvenValues(arr){
// const arrr=[];
//         arr.forEach((val)=>{

//             if(val % 2 === 0) arrr.push(val);

//         });
//         return arrr;
//     }
//        console.log(onlyEvenValues([1,2,3]))
//          console.log(onlyEvenValues([5,1,2,3,10]))

// function showFirstAndLast(arr){
//     var  newArr=[];
//     arr.forEach(function(val,index,a){
//     newArr.push(val[0]+val[val.length-1]);
// });
// return newArr;
// }
// console.log(showFirstAndLast(['hi', 'ge', 'se']));

// function  middleOfArray(arr) {
//     if (!arr.length)
// return;

//     const mid = arr.length / 2;
//     if (arr.length % 2 === 1) {
//     return arr[Math.floor(mid)];
//     } else {
//     return [
//         arr[mid - 1],
//         arr[mid],
//     ];
//     }
// }

// var animals = ['cat', 'ele', 'bird'];
// animals = ['zebra', 'elephant'];
// var nums = [1, 2, 3, 8, 9];
// nums = [5, -22, 3.5, 44, 98, 44];

// function indexOfArray(arr, index){
//     return arr[index];
// }
// var nums= [1,2,3,8,9]
// console.log(indexOfArray(nums,3))
// console.log(indexOfArray(nums,4))
// console.log(indexOfArray(nums,0))

// function arrayExceptLast(arr){
//     return arr.slice(0,4)
// }
// var nums= [1,2,3,8,9]
// console.log(arrayExceptLast(nums))


// function addToEnd(arr,value){
//     arr.push(value)
//     return arr;
// }
// var nums= [1,2,3,8,9]

// console.log(addToEnd(nums,55))


// function  sumArray(nums) { 
//     let add = 0;
//     for (let a = 0; a < nums.length; a++) {
//       let Addindex = nums[a];
//       add += Addindex;
//     } 
//     return add;
//   }
//   console.log( sumArray([1,2,3,8,9]));


// function sumArray(arr){
//     let sum=0;
// for (i = 0; i < arr.length; i++){
//              sum += arr[i];
// }
//       return sum;
//     }
// var nums= [1,2,3,8,9]
// console.log(sumArray(nums))

// function minInArray(arr){
// let min= arr[0]
// for (i = 0; i < arr.length; ++i){
//     if(min >= arr[i]){
//         min=arr[i];
// }
// }
// return min;
// }
// var nums= [1,2,3,8,9]
//   console.log(minInArray(nums))

// function minInArray(arr) {
//     var len = arr.length, min = Infinity;
//     while (len--) {
//       if (arr[len] < min) {
//         min = arr[len];
//       }
//     }
//     return min;
//   };
//   var nums= [1,2,3,8,9]
//   console.log(minInArray(nums))

// function removeFromArray(arr,elemnt){
//     for (i = 0; i < arr.length; ++i){
//         if(elemnt == arr[i]){
//             arr.splice(i, 1);
//         }
// }
// return arr;
// }
// var nums= [1,2,3,8,9]
// console.log(removeFromArray(nums,8))


// function removeFromArray(arr, elemnt) {
//     var index = arr.indexOf(elemnt);
//     while (index > -1) {
//         arr.splice(index, 1);
//         index = arr.indexOf(elemnt);
//     }
// }
// var nums= [1,2,3,8,9];
// removeFromArray(nums, 8);
// console.log(nums);

// function oddArray(arr){
//     let odd=[]
//     for (i = 0; i < arr.length; ++i){
//          if(arr[i] % 2 === 1){
//              odd.push(arr[i])
//          }
//     }
//      return odd;
// }
//  var nums= [1,2,3,8,9];
//  console.log( oddArray(nums))
    
// function oddArray(arr) {
//     let odds = [];
//     let i = 0;
//     while (i < arr.length) {
//         if (arr[i] % 2 == 1) {
//            odds.push(arr[i]);
//         }
//         i++;
//     }
//     return odds;
// }
// var nums= [1,2,3,8,9];
// console.log(oddArray(nums));


// function aveArray(arr){
//     let sum=0
//     for (i = 0; i < arr.length; ++i){
//         sum+=arr[i]

//     }
// return sum/ arr.length;
// }
// var nums2= [1,2,3,8,9,77]
// console.log(aveArray(nums2))

// function aveArray(arr){
//     sum=0
//     let i=0
//     while ( i < arr.length){
//         sum+=arr[i]
//         ++i
//     }
//    return sum/ arr.length
// }
// var nums2= [1,2,3,8,9,77]
// console.log(aveArray(nums2))


// function shorterInArray(arr){
//     let short= arr[0]
//     for (i = 0; i < arr.length; ++i){
//         if(short.length>arr[i].length){
//             short= arr[i]
//         }
//     }
//     return short
// }
// var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
// console.log( shorterInArray(strings))

// function shorterInArray(arr){
//     short =arr[0]
//     let i=0
//     while ( i < arr.length){
//         if(short.length>arr[i].length){
//             short= arr[i]
//         }
//         ++i
//     }
//     return short
// }
// var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
// console.log( shorterInArray(strings))

// function repeatChar(string,Char){
//     let repeat=0
//     for (i = 0; i < string.length; ++i){
//         if(string[i]== Char){
//             repeat++
//         }
//     }
//     return repeat
// }
// var strings= "alex mercer madrasa rashed2 emad hala"
// console.log( repeatChar(strings,"a"))
// console.log( repeatChar(strings,"z"))

// function repeatChar(string,Char){
//     repeat=0
//     i=0
//     while(i < string.length){
//         if(string[i]== Char){
//             repeat++
//         }
//         ++i
//     }
//     return repeat
// }
// var strings= "alex mercer madrasa rashed2 emad hala"
// console.log( repeatChar(strings,"a"))
// console.log( repeatChar(strings,"z"))




// function evenIndexOddLength(arr) {
//     let even = []
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 == 0 && arr[i].length % 2 == 1) {
//             even.push(arr[i])
//         }

//     }
//     return even
// }
// var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
// console.log(evenIndexOddLength(strings));

// function evenIndexOddLength(arr){
//     even =[]
//     i=0
//     while(i < arr.length){
//         if (i % 2 == 0 && arr[i].length % 2 == 1) {
//             even.push(arr[i])
//         }
//         ++i
//     }
//     return even
// }
// var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
// console.log(evenIndexOddLength(strings));

// function evenNumberEvenIndex(arr){
//    let even=[]
//    for(let i = 0; i < arr.length; i++){
//     if (i % 2 == 0 && arr[i] % 2 == 0){
//         even.push(arr[i])
//     }
//    }
//    return even 
// }
// var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
// console.log(evenNumberEvenIndex(nums))

// function evenNumberEvenIndex(arr){
//     even=[]
//     i=0
//     while(i < arr.length){
//         if (i % 2 == 0 && arr[i] % 2 == 0){
//             even.push(arr[i])
//         } 
//         ++i 
//     }
//     return even
// }
// var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
// console.log(evenNumberEvenIndex(nums))


// function subtrac(num) {
//      sub = num;
//     i = num - 1;
//     while (i >= 0) {
//         sub  -= i;
//         i--;
//     }

//     return sub ;
// }
// console.log(subtrac(2))
// console.log(subtrac(5))
// console.log(subtrac(9))

// function factorial(n){
//     let i= n;
//     while(i>2){
//         i =i-1;
//         i--;
//     }
//     return i;
// }
// console.log(factorial(2))
// console.log(factorial(4))

// function sum2(y, g) {
//     let sum = 0;
//     while (y <= g) {
//         sum += y++;

//     }
//     return sum;
// }
// console.log(sum2(4, 5))
// console.log(sum2(3, 6))

// function multiOf(x, k, u) {
//     let i = 0;
//     let xu = 1
//     while (i < u) {
//         xu *= x;
//         i++;
//     }
//     return k * xu
// }
// console.log(multiOf(4, 10, 3))
// console.log(multiOf(6, 3, 2))
// console.log(multiOf(6, 2, 3))


// function muti2(l, w) {
//     let multi = 1;
//     while (l <= w) {
//         multi *= l++;

//     }
//     console.log(multi);
// }
// muti2(4, 5);
// muti2(3, 6);

// function countDown(num){
//     let i=num;
//     let txt='';
//     while(i>=0){
//         if(i!==0){
//             txt+=i+', ';
//         }else{
//             txt+='done';
//         }

//         i--;
//     }
//     console.log(txt)
// }
// countDown(5)
// countDown(2)
// countDown(7)


// function doubleValues(arr){
//     let doubl =[];
//     for (let i = 0; i < arr.length; i++) {
//         doubl.push(arr[i]*2);
        
//     }
//     console.log(doubl)
// }
// doubleValues([1,2,3])
// doubleValues([5,1,2,3,10])

// function onlyEvenValues(array){
//     elements = []
//     for (let index = 0; index < array.length; index++) {
//         if (array[index]%2 == 0) {
//             elements.push(array[index]) ;
//         } 

        
//     }
//     console.log(elements)
// }
// onlyEvenValues([1,2,3]) 
// onlyEvenValues([5,1,2,3,10])

// function addKeyAndValue(arr, key, value) {
    
//         for (i = 0; i < arr.length; i++) {
//           k = arr[i];
//           k[key] = value;
//         }
//         return arr;
//         }
//      console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'))
    
