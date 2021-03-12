/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let reminder = 0;
  let result = "";

  while (i >= 0 || j >= 0) {
    let d1 = i > -1 ? parseInt(num1[i]) : 0;
    let d2 = j > -1 ? parseInt(num2[j]) : 0;

    let temp = d1 + d2 + reminder;
    let sumTemp = temp % 10;
    reminder = Math.floor(temp / 10);

    result += sumTemp;
    i--;
    j--;
  }

  //     When the final addition , the reminder even equal 1
  if (reminder === 1) {
    result += 1;
  }
  return result.split("").reverse().join("");
};

let res = addStrings("9999999999999999999999999999999999999", "1000000000000000999999999999999999999999999");
console.log("Result:", res);
