const url =
  "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new";

// get random number from random.org
async function getRandomNumber() {
  const response = await fetch(url);
  const number = await response.text();
  return number;
}
async function sumTwoNumbers(num1, num2) {
    const sum = parseInt(num1) + parseInt(num2);
  return sum;
}
async function getTwoRandomNumbers() {
  const number1 = await getRandomNumber();
  console.log("First Number : " + number1);
  const number2 = await getRandomNumber();
  console.log(" Second Number : " + number2);

  const sum = await sumTwoNumbers(number1, number2);
  console.log("Sum : " + sum);
}

async function main() {
  await getTwoRandomNumbers();
}

main().then(() => console.log("Done"));
