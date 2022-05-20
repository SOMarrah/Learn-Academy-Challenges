class Car{
  constructor(modelString, yearNumb, colorString, speedUpNumb, brakeNumb){
    this.wheels = 4
    this.model = modelString
    this.year = yearNumb
    this.color = colorString
    this.speed = 0
    this.speedUp = speedUpNumb
    this.speedDown = brakeNumb
  }
  accelerate(){
    this.speed += this.speedUp
    return `Speeding up! You are going ${this.speed}MPH.`
  }
  brake(){
    this.speed -= this.speedDown
    return `Slowing down... You are going ${this.speed}MPH.`
  }
}
let myCar = new Car("generic car", 2010, "red")
console.log(myCar);


class Tesla extends Car{
  constructor(modelString, yearNumb, colorString, speedUpNumb, brakeNumb){
    super(modelString, yearNumb, colorString, speedUpNumb, brakeNumb)
    this.electric = true
  }
}

let myTesla = new Tesla("Model X", 2020, "Orange", 10, 7)
console.log(myTesla);
console.log(myTesla.accelerate());
console.log(myTesla);
console.log(myTesla.brake());
console.log(myTesla);
