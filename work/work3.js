var a = {                     //objects type Properties
    name: "apirak",
    lastname: "kaewpachum",
    age: 18
}
var text = ""
for (let i = 1; i <= 10; i++) {
    console.log(a.name)
    text +=i +" "+ a.name +" "+a.lastname+" " + a.age + "<br>" 
    
}
document.getElementById("text").innerHTML = text