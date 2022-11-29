function recursiveCount(num = 0) {
  if (num >= 10) {
    return null;
  } else {
    console.log(num);
    recursiveCount(num + 1);
  }
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
// 
/**function recursiveCount(num = 0) {
 *  if num is greater than or equal to 10 then return
 *  else {
 *    print num
 *    recursiveCount(num + 1)
 * }
 * 
 * 
 * In this example, if the number provided is greater than or equal to 10, then we return, doing nothing.
 * Otherwise, we print the number and call recursiveCount again, but this time incrementing our number by 1.
 */