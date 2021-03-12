var isOneBitCharacter = function (bits) {
  let flag = true;
  let bitSize = bits.length;
  if (bitSize % 2 === 0) {
    let str = bits[bitSize - 2] + "" + bits[bitSize - 1];
    console.log(str);
    if (str === "11" || str === "10") return false;
  }

  return flag;
};

let arr = [0, 1, 0];
let res = isOneBitCharacter(arr);
console.log(res);
