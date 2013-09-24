var fs = require('fs');

console.log('Start!');
var config_str = fs.readFileSync('./config.json');
console.log('Contents: ' + config_str);

//var config = JSON.parse(config_str);
//console.log('Config: ' + config);
console.log('firstname: ' + config_str.name);


