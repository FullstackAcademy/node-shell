var exports = module.exports = {};
var fs = require('fs');

exports.pwd = function() {
  console.log(process.cwd());
};

exports.ls = function() {
  fs.readdir('.', function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
      process.stdout.write("\n" + file.toString() + " ");
    })
    process.stdout.write("\nprompt > ");
  });
}

exports.echo = function(data) {
  process.stdout.write(data);
}

exports.cat = function(filename) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}

exports.head = function(filename) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;
    let lines = data.split('\n');
    for (let i = 0; i < 5; i++) {
      console.log(lines[i]);
    }
  });
}

exports.tail = function (filename) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;
    let lines = data.split('\n');
    for (let i = lines.length-6; i < lines.length; i++) {
      console.log(lines[i]);
    }
  });
}
