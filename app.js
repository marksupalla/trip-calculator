var prompt = require('sync-prompt').prompt;
var vehicle = prompt("Do you drive a truck or car? ");
var miles = prompt("How far (in miles) are you driving? ");
var gas = prompt("How much is gas? $");
var tank = prompt("How many gallons is your tank? ");
var mpg = prompt("How many miles per gallon does your vehicle get? ");
var speed = prompt("What is your averege speed? ");

miles= parseInt(miles);
gas = parseInt(gas);
tank = parseInt(tank);
mpg = parseInt(mpg);
/*
var truckmpg = 
var carmpg =
*/
var truck = (miles/mpg)*gas;
var car = (miles/mpg)*gas;
var fill = (miles/mpg)/tank;

switch (vehicle){
  case "truck":
    console.log ("Total miles in trip: " + miles, "It will cost you $" + truck.toFixed(2), "Number of stops for gas: " + fill.toFixed(0));
    break;
  case "car":
    console.log ("Total miles in trip: " + miles, "It will cost you $" + car.toFixed(2), "Number of stops for gas: " + fill.toFixed(0));
    break;
}


