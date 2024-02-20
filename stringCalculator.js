const add = (string) => {
  if (string === "") return 0;
  else if (string.includes(",")) {
    const numbers = string.split(",");
    return parseInt(numbers[0]) + parseInt(numbers[1]);
  }
  else return parseInt(string);
}


module.exports = add;