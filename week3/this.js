var person = {                 //objects type Methods
    name: "Apirak",
    lastname: "kaewpachum",
    colorFavorite: "blue",
    fullname: function () {
        return this.name + " " + this.lastname
    }
}
console.log( person.fullname())
document.getElementById("text2").innerHTML ="Use this.<br>"+person.fullname()

// console.log(this)