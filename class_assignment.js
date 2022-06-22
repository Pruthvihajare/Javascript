class vehicle {
    color;
    speed;
    metal;
    engineType;
constructor( color, speed,metal,engineType){
this.color=color;
    this.speed=speed;
    this.metal=metal;
    this.engineType=engineType;
}
//Method or action behaviour
logVehicle(){
    console.log(`Vehicle details are:${this.color} ${this.speed}  ${this.metal} ${this.engineType}`)
}
}
let vehicleHonda=new vehicle("black","150","steel","petrol engine")
vehicleHonda.logVehicle();
let vehicleTata=new vehicle("red","120","steel","diesel engine")
vehicleTata.logVehicle()
let vehicleAudi=new vehicle("orange","200","steel","petrol engine")
vehicleAudi.logVehicle()
let vehicleSwift=new vehicle("white","180","steel","diesel engine")
vehicleSwift.logVehicle()

