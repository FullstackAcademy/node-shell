var exports = module.exports = {};
var fs = require('fs');
var request = require('request');

exports.pwd = function(done) {
  var output = '';
  output += process.cwd()
  done(output)
};

exports.ls = function(done) {
  var output = '';
  fs.readdir('.', function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
      output += "\n" + file.toString() + " ";
    })
    done(output)
  });
}

exports.echo = function(data, done) {
  var output = '';
  output += data
  done(output)
}

exports.cat = function(filename, done) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;
    done(data)
  });
}

exports.head = function(stdin, filename, done) {
  var output = '';
  fs.readFile(stdin || filename, 'utf8', (err, data) => {
    if (err) throw err;
    let lines = data.split('\n');
    for (let i = 0; i < 5; i++) {
      output += '\n' + lines[i]
    }
    done(output)
  });
}

exports.tail = function(stdin, filename, done) {
  var output = '';
  fs.readFile(stdin || filename, 'utf8', (err, data) => {
    if (err) throw err;
    let lines = data.split('\n');
    for (let i = lines.length - 6; i < lines.length; i++) {
      output += '\n' + lines[i]
    }
    done(output)
  });
}

exports.curl = function(url, done) {
  request(url, function(err, response, body) {
    // output += 'error:' + err
    // output += 'statusCode:' + response + response.statusCode
    // output += 'body:' + body
    done(body)
  })
}
