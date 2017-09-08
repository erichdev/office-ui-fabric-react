let JSFtp = require("jsftp");
let fs = require('fs');
let argv = require('yargs').argv;

let config = {
  host: argv.host,
  user: argv.user,
  pass: argv.password
};

console.log('HOST', config.host);
console.log('USER', config.user);
console.log('pass', config.pass.substring(0, 4));

let Ftp = new JSFtp(config);

Ftp.keepAlive(2000);

//
Ftp.list('site/wwwroot', function (err, res) {
  console.log('inside list');

  if (err)
    console.error(err);

  console.log('content: ' + res);
});

Ftp.on('data', function (data) {
  console.log('DATA: ', data);
})

Ftp.on('connect', function (data) {
  console.log('CONNECT: ', data);
})
//

//
Ftp.on('progress', function (data) {
  console.log('PROGRESS: ', data);
})

Ftp.on('error', function (data) {
  console.log('ERRRR: ', data);
})
//

const demo = fs.readFileSync('packages/office-ui-fabric-react/dist/demo-app.js');
Ftp.put(demo, 'site/wwwroot/v-erabe/demo-app.js', function (err) {
  if (!err)
    console.log("File transferred successfully!");

  else
    console.error('Error uploading' + err);
});

Ftp = new JSFtp(config);

const html = fs.readFileSync('packages/office-ui-fabric-react/dist/index.html');
Ftp.put(html, 'site/wwwroot/v-erabe/index.html', function (err) {
  if (!err)
    console.log("File transferred successfully!");

  else
    console.error('Error uploading' + err);
});


// Ftp.put('../packages/office-ui-fabric-react/dist/demo-app.js', 'site/wwwroot/v-erabe/demo-app.js', function (err) {
//   if (!err)
//     console.log("File transferred successfully!");

//   else
//     console.error('Error uploading' + err);
// });