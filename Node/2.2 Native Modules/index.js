const fs = require("fs");

fs.writeFile("message.txt", "Hello from NodeJS!", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
});

fs.readFile("message.txt", "utf-8", (err, data) => {
    if (err) throw err;
    var dataVieja = data;
    fs.writeFile("message.txt", dataVieja+"\nHello from Polo!",(err) => {
        if (err) throw err;
        console.log("The file has been updated!");
    });
});