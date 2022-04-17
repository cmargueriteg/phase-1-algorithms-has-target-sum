function hasTargetSum(array, target) {
 
  for( let i = 0; i < array.length-1; i++){
    for( let j = i + 1; j < array.length; j++){
      if( array[i] + array[j] === target){
        return true 
      } 
          
        
        
      }
      
    }
    return false
  }



/* 
  Write the Big O time complexity of your function here
*/

/* 
  iterate thru array w/ for loop
  add each element 
  compare to target 
  move to next element if not matching
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log("MY TEST BE TRUE")  
console.log("=>", hasTargetSum([1,2,3,4], 5))

console.log("MY TEST BE FALSE")
console.log("=>", hasTargetSum([4], 4))

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));


//console.log("MY TEST BE TRUE")  
//console.log("=>", hasTargetSum([10,6,45,2], 47));

//console.log("MY TEST BE TRUE")  
//console.log("=>", hasTargetSum([11,2,4,51], 15));

//console.log("MY TEST BE TRUE")  
//console.log("=>", hasTargetSum([100,33,66,5], 133));

//console.log("MY TEST BE FALSE")  
//console.log("=>", hasTargetSum([2,2,3,3], 4))

//console.log("MY TEST BE FALSE")  
//console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
