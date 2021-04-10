const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filename = process.argv[3];

request(url, function(err, res, body) {
    if(err) {
      console.log(err)
      return;
    } else {
      fs.writeFile(filename, body, (err, data) => { 
        if(err) {
          console.log(err)
          return;
        } else {
          console.log(`Downloaded and saved ${body.length} bytes to ${filename}`)
        }
      });
    }
});

/**  * 1. accept the URL, and a filename from user in the command line  
* node fetcher.js http://www.example.edu ./index.html  
* 2. process.args  * URL = args[1]  * filename = args[2]  
* request(URL, (error, response, body) => {  
* error - if there is an error, drop out...console log error  
* else   * fs.writeFile(filename, body, (error, data) => {  
* check for errors  * if there are no errors, console log SUCCESS filesize})
*/  

