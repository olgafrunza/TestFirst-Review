/* eslint-disable no-unused-vars */


//Fullstack version
class Vehicle {
  constructor(info) {
    this.wheelTotal = info[0];
    this.energySource = info[1];
    this.manufacturer = info[2];
    this.isOn = false;
  }

  getSpec(spec) {
    if (Object.keys(this).includes(spec)) {
      return this[spec];
    }
  }
}

class Tesla extends Vehicle {
  constructor(info) {
    super(info[4][0]);

    this.milesPerCharge = info[0];
    this.model = info[1];
    this.chargePercentage = info[2];
    this.minutesToCharge = info[3];
  }

  minutesToFullCharge() {
    return `${100 - this.chargePercentage} minutes until the charge is full!`;
  }
}


// class Vehicle {
//     constructor (arr) {
//         this.wheelTotal = arr[0]
//         this.energySource = arr[1]
//         this.manufacturer = arr[2]
//         this.isOn = false
//     }

// // getSpec(key) {
    
// // }
//  getSpec(spec) {               // ???????
//     if (Object.keys(this).includes(spec)) {
//       return this[spec];
//     }
//   }
// }

// class Testa extends Vehicle {
//     constructor(arr) {
// super(arr[4][0])
//   this.milesPerCharge = arr[0];
//     this.model = arr[1];
//     this.chargePercentage = arr[2];
//     this.minutesToCharge = arr[3];
//     }

// minutesToFullCharge() {
//      return `${100 - this.chargePercentage} minutes until the charge is full!`;
//   }
// }


