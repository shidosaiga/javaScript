var a = "apirak 15"
var text = ""

for (let i = 1; i <= 15; i++) {
    console.log (i+" "+a);
    text += i+" "+a + "<br>" 
}

document.getElementById("text").innerHTML = text

