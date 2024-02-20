const add = (string) => {
  if (string === "") return 0;
  const delimiter = /[,\n]/; // Delimiters can be comma or new line
  const numbers = string.split(delimiter).map(number => parseInt(number));
  return numbers.reduce((accumulator, number) => accumulator + number, 0);
}


module.exports = add;