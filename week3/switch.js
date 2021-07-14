// var a = ["A","B","C","D"]


//type 1
switch (new Date().getDay()) {
    case 0 :
        console.log("Sunday")
        break;
    case 1 :
        console.log("Monday")
        break;
    case 2 :
        console.log("Tuesday")
        break;
    case 3 :
        console.log("WednesDay")
        break;
    case 4 :
        console.log("Thursday")
        break;
    case 5 :
        console.log("Friday")
        break;
    case 6 :
        console.log("Saturday")
        break;
    default:
        console.log("Errer")
}

//type 2
var phone = "samsung"

switch (phone) {
    case "oppo":
        console.log("15000")
        break;
    case "iphone":
        console.log("30000")
        break;
    case "samsung":
        console.log("25000")
        break;
    default:
        console.log("NO you Don't Have phone :(")
}