// array literal

var x = [   //popular
    "a",
    "c",
    "d"
]

// array constructor

var a = new Array(
    "a",
    "c",
    "d"
)

console.log(x.length)
console.log(x)
console.log(a.length)
console.log(a)

document.getElementById("text").innerHTML ="POPULAR<br>array literal<br>\n"+ x +" "+ x.length
document.getElementById("text2").innerHTML ="array constructor<br>\n"+a +" "+a.length