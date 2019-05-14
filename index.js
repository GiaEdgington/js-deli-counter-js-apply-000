function takeANumber(katzDelizLine, name){
  var num = katzDelizLine.push(name);
  return "Welcome, " + name + ". You are number " + num + " in line."
}

function nowServing(katzDelizLine){
  if(katzDelizLine === undefined || katzDelizLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + katzDelizLine[0] + "."
  } 
  katzDelizLine.shift()
}

function currentLine(line) {
    if(katzDelizLine === undefined || katzDelizLine.length === 0){
    return "The line is currently empty."
  } else {
    let i = line[0]
    return "The line is currently: " + indexOf
  } 
}