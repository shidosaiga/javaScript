function c_to_f(cel) { // cel = celsius
    var  cTemp = cel
    var cTof =  cTemp * 9 / 5 + 32
    var message1 = cTemp + "\xB0c is " + cTof + "\xB0F"
    console.log(message1)
    document.getElementById("text").innerHTML = message1 
}
c_to_f(30)

function f_to_c(fahren) { // fahren = fahrenheit
    var  ftemp = fahren
    var FtoCel = (ftemp - 32) * 5 / 9
    var message2 = ftemp + "\xB0F is " + FtoCel + "\xB0c "
    console.log(message2)
    document.getElementById("text2").innerHTML = message2 
}
f_to_c(86)
