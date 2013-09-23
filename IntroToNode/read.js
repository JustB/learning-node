/**
 * This file will read a simple txt file from the filesystem and log its contant to the 
 * console
 */

var fs = require('fs');
console.log('Start');

fs.readFile('./files/sample.txt', function(error, data) {
    console.log("Contenuto: " + data);
});
console.log("End!");
