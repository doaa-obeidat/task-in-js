// function doubleValues(arr){
//     let newArr = [];
//     arr.forEach((val)=>{
//         newArr.push(val * 2);
//     })
//     return newArr;
// }
// console.log( doubleValues([4,2,10]));


// function onlyEvenValues(arr){
//     let newArr = [];
//     arr.forEach((value)=>{
//         if(value % 2 === 0){
//         newArr.push(value)
//         }
//     })
//     return newArr;
// }
// console.log(onlyEvenValues([1,2,3,6,8]));


// function showFirstAndLast(arr){
//     let newArr = [];
//     arr.forEach((value)=>{
//         newArr.push(value[0] + value[value.length-1])
//     })
//     return newArr;
// }
// console.log(showFirstAndLast(["colt","matt", "tim", "udemy"]))

// function addKeyAndValue(arr,key,value){
//     arr.forEach((val)=>{
//         val[key] = value
        
//     })
//     return arr;
// }
// console.log( ...addKeyAndValue([{name: "Elie"}, {name: "Tim"}, {name: "Matt"}, {name: "Colt"}], "title", "instructor"));


// function vowelCount(string){
//     const arr = Array.from(string)
//     let obj = {};
//     const vowels = "aeiou";

//    arr.forEach((letter)=>{
//     let lowercased = letter.toLowerCase();
//     if(vowels.indexOf(lowercased) !== -1){
//         if (obj[lowercased]) {
//             obj[lowercased]++;
//           } else {
//             obj[lowercased] = 1;
//           }
//     }
//    })
//    return obj;
// }
// console.log(vowelCount("Elie"));
// console.log(vowelCount("hmmm"));