const number1 = 103;
const number2 = 72;
const number3 = 189;

// Ketik sebuah function getMax untuk mendapatkan nilai maksimum
const getMax = (a, b, c) => {
  return Math.max(a, b, c);
};

const maxNumber = getMax(number1, number2, number3);
// Cetak "Nilai maksimum adalah __"
console.log(`Nilai maksimum adalah ${maxNumber}`);
