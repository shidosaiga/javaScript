// local scope
var car = "Tesla"
function myfun() {
     name = "apriak" // <--- globle automatic BUT if var naem = "apriak" = local scope
    console.log(name)   //  <---this is globle scope
    console.log(car)
}
myfun();

// globle scope
console.log(car)
console.log(name)