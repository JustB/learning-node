/**
 * This file will read a simple txt file from the filesystem and log its contant to the 
 * console
 *
 * This is the synchronous version, in that the file will be fully read before moving on
 */

var fs = require('fs');
console.log('Start');

var content = fs.readFileSync('./files/sample.txt');
console.log("Contenuto: " + content);
console.log("End!");
