function takeANumber(katzDelizLine, name){
  var num = katzDelizLine.push(name);
  return "Welcome, " + name + ". You are number " + num + " in line."
}

function nowServing(katzDelizLine){
  if(katzDelizLine === undefined || katzDelizLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + katzDelizLine.shift() + "."
  } 
}

function currentLine(line) {
    if(line === undefined || line.length === 0){
    return "The line is currently empty."
  } else {
    var newLine = []
    var num = line.indexOf(i) + 1;
    line.forEach(function (i) {
      newLine.push(num + i)
      });
    } return "The line is currently: " + newLine
}