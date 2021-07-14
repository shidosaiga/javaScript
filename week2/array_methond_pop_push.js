var fruits = ["banana","orange","apple","mango"]

document.getElementById("text").innerHTML = fruits.join(" - ")
fruits.pop() //delete value 
console.log(fruits)
document.getElementById("text2").innerHTML ="การลบด้วย pop <br>"+ fruits.join(" - ")

fruits.push("kiwi")//add  value 
console.log(fruits)
document.getElementById("text3").innerHTML ="การเพิ่มด้วย push <br>"+ fruits.join(" - ")

//delete  value หน้า
fruits.shift()
console.log(fruits)
document.getElementById("text4").innerHTML ="การลบข้างหน้าด้วย shift <br>"+ fruits.join(" - ")

//add  value หน้า
fruits.unshift("berry","lemon")
console.log(fruits)
document.getElementById("text5").innerHTML ="การเพิ่มข้างหน้าด้วย unshift <br>"+ fruits.join(" - ")

// add and delete value  ตำแหน่งไหนก้อได้
  // add value   
fruits.splice(2,0,"avocado","blackberry");
console.log(fruits)
document.getElementById("text6").innerHTML ="การเพิ่มค่าตำแหน่งไหนก้อได้ด้วย splice <br> "+ fruits.join(" - ")

    // delete value 
fruits.splice(0,1);
console.log(fruits)
document.getElementById("text7").innerHTML ="การลบค่าตำแหน่งไหนก้อได้ด้วย splice <br> "+ fruits.join(" - ")