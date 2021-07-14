var a = [
    "อาทิตย์",
    "จันทร",
    "อังคาร",
    "พุท",
    "พฤหัสบดี",
    "ศุกร์",
    "เสาร์"
];
var text = ""

a.forEach(b =>{
    console.log(b)
    text += b+"<br>" 
});

document.getElementById("text").innerHTML = text