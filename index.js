function takeANumber(katzDelizLine, name){
  var num = katzDelizLine.push(name);
  return "Welcome, " + name + ". You are number " + num + " in line."
}

function nowServing(katzDelizLine){
  if(katzDelizLine.length == 0){
    return "There is nobody waiting to be served!"
  } else {
    let currentPerson = katzDelizLine.name[0]
    return currentPerson
  } 
}