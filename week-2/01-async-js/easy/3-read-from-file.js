/*
## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 

*/
const fs = require("fs");

function expensiveOperation(iterations) {
  for (let i = 0; i < iterations; i++) {}
  console.log("Expensive operation completed");
}

fs.readFile("./read.md", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }
  console.log("File contents:", data);
});
console.log("Starting Expensive operation");
expensiveOperation(1000000000);

console.log(
  "This message is logged after initiating file read and expensive operation"
);
