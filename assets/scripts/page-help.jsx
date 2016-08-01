# https://babeljs.io/repl/

let inc = (b) => b + 1

console.log('test es6', inc(5));

console.log(
  [1,2,3,4,5]
    .filter((x) => x % 2)
    .map((x) => x * 2)
    .reduce((x, s) => x + s)
);