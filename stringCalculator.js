const add = (string) => {
  if (string === "") return 0;
  const numbers = string.split(",").map(number => parseInt(number));
  return numbers.reduce((accumulator, number) => accumulator + number, 0);
}


module.exports = add;