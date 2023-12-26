/*

## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.



*/

const timer = () => {
  console.clear();
  console.log(new Date().toLocaleTimeString());
  setTimeout(timer, 1000);
};

timer();
