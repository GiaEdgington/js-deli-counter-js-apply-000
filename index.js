function takeANumber(katzDelizLine, name){
  var num = katzDelizLine.push(name);
  return "Welcome, " + name + ". You are number " + num + " in line."
}

function nowServing(katzDelizLine){
  if(katzDelizLine === undefined || katzDelizLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    let currentPerson = katzDelizLine[0]
    return "Currently serving " + currentPerson + "."
    katzDelizLine.splice(0,1)
  } 
}