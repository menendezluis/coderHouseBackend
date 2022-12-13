const randomNumbers = () => {
  const numbers = [];
  for (let i = 0; i < 10000; i++) {
    numbers.push(Math.floor(Math.random() * 20) + 1);
  }
  return numbers;
};

const numbers = randomNumbers();

const numbersCount = numbers.reduce((acc, number) => {
  if (acc[number]) {
    acc[number]++;
  } else {
    acc[number] = 1;
  }
  return acc;
}, {});

console.log(numbersCount);

// reduce suma los valores de numbersCount
const total = Object.values(numbersCount).reduce((acc, number) => {
  return acc + number;
});

console.log(total);
