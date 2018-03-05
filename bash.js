var commands = require("./commands.js");

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

  if (cmd === 'pwd') {
    commands.pwd();
  } else if (cmd === 'date') {
    console.log(Date.now());
  } else if (cmd === 'ls') {
    commands.ls();
  } else if (cmd.slice(0, 5) === 'echo ') {
    commands.echo(cmd.slice(5));
  } else if (cmd.slice(0, 4) === 'cat ') {
    commands.cat(cmd.slice(4));
  } else if (cmd.slice(0, 5) === 'head ') {
    commands.head(cmd.slice(5));
  } else if (cmd.slice(0, 5) === 'tail ') {
    commands.tail(cmd.slice(5));
  }
  process.stdout.write('\nprompt > ');

});
