// parameter "input" gets all data
function Main(input) {
  console.log(input.split('.').at(-1))
}
// Don't edit this line!
Main(require("fs").readFileSync("/dev/stdin", "utf8"));