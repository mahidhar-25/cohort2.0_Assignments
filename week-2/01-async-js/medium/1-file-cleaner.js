/*
## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```*/

const fs = require("fs");
fs.readFile("./data.md", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  let strArray = data.split(" ");
  let result = "";
  for (let str of strArray) {
    if (str.trim().length > 0) {
      result = result + " " + str;
    }
  }

  fs.writeFile(
    "./data.md",
    result,
    {
      flag: "w", // Use "w" to replace existing content
      encoding: "utf-8",
    },
    (err) => {
      console.log(err);
    }
  );
});
