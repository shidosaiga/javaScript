var car = {                     //objects type Properties
    brand: "ford",
    model: "1",
    color: "black"
}

console.log( car["brand"])
document.getElementById("text").innerHTML ="objects type Properties<br>"+car.brand 

 var person = {                 //objects type Methods
        name: "Apirak",
        lastname: "kaewpachum",
        colorFavorite: "blue",
        fullname: function () {
            return this.name + " " + this.lastname
        }
 }
 console.log( person.fullname())
 document.getElementById("text2").innerHTML ="objects type Properties<br>"+person.fullname()