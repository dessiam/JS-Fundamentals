function add(a, b) {
  return a + b;
}

const args = process.argv.slice(2);

const first = Number(args[0]);
const second = Number(args[1]);

console.log(add(first, second));