const ftoc = function(fahrenVal) {
//Deduct 32, then multiply by 5, then divide by 9
    let finalFTOC = ((fahrenVal - 32) * 5) / 9;
    return Math.round(finalFTOC * 10) / 10;

}

const ctof = function(celsiusVal) {
//Divide by 5, then multiply by 9, then add 32
  let finalCTOF = ((celsiusVal / 5) * 9) + 32;
  return Math.round(finalCTOF * 10) /10;
}

module.exports = {
  ftoc,
  ctof
}
