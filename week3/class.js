class name {
    constructor(name, year) {
      this.name = name;
      this.year = year;
  
    }

    fullname(greething){
        return greething +" my name is " + this.name + " my age is " + this.year
    }
    static hi(name){
        return "hello " + name
    }
}

var a = new name("apirak","18")

console.log(a.fullname("hello"))
console.log(name.hi("apirak"))

// class inheritance

class car {
    constructor(brand){
        this.carname = brand
    }
    present(){
        return "I have a " + this.carname
    }
}
class Model extends car {
    constructor(brand , model){
        super(brand)
        this.model = model
    }
    show(){
        return this.present() + ", it's a " + this.model
    }
}

var mycar = new Model("Tesla Model 3","Ford")

console.log(mycar.show())

