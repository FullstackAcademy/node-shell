var commands = require("./commands.js");

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  var cmdList = cmd.split(/\s*\|\s*/g)
  // console.log(cmdList)
  var output = null
  var input = cmdList[0].split(' ')[1]
  var splitCmd = cmdList[0].split(' ')[0]
  for (let i = 0; i < cmdList.length; i++) {

    output = commands[splitCmd](input, done);
    // if (cmdList[i].indexOf(' ') === -1) {
    //   console.log(cmdList[i])
    // } else {
    //   console.log(cmdList[0].split(' ')[0])
    // }
    // console.log(cmdList[i])
  }
  // console.log(cmdList[0].split(' ')[1])
  if (cmd === 'pwd') {
    commands.pwd(done);
  } else if (cmd === 'date') {
    console.log(Date.now());
  } else if (cmd === 'ls') {
    commands.ls(done);
  } else if (cmd.slice(0, 5) === 'echo ') {
    commands.echo(cmd.slice(5), done);
  } else if (cmd.slice(0, 4) === 'cat ') {
    commands.cat(cmd.slice(4), done);
  } else if (cmd.slice(0, 5) === 'head ') {
    // var arg = cmdList[0].split(' ')[1]
    // commands.head(arg, cmd.slice(5), done);
    commands.head(stdin, cmd.slice(5), done)
  } else if (cmd.slice(0, 5) === 'tail ') {
    commands.tail(cmd.slice(5), done);
  } else if (cmd.slice(0, 5) === 'curl ') {
    commands.curl(cmd.slice(5), done);
  }


});

var done = function(output) {
  if (cmdList.length > 1) {
    return output
  } else {
    console.log(output)
  }
  process.stdout.write('\nprompt > ');
}
