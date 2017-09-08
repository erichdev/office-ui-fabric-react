let JSFtp = require("jsftp");
let fs = require('fs');
let argv = require('yargs').argv;

let config = {
  host: argv.host,
  user: argv.user,
  pass: process.argv[3]
};

console.log('HOST', config.host);
console.log('USER', config.user);
console.log('pass', config.pass);

let Ftp = new JSFtp(config);

Ftp.keepAlive(2000);


const demo = fs.readFileSync('packages/office-ui-fabric-react/tslint.json');
Ftp.put(demo, 'site/wwwroot/v-erabe/tslint.json', function (err) {
  if (!err)
    console.log("File transferred successfully!");

  else
    console.error('ERROR UPLOADING: ' + err);
});
