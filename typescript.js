// Implement the class
var Voiture = /** @class */ (function () {
    function Voiture(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Voiture.prototype.start = function () {
        console.log("Car engine started");
    };
    return Voiture;
}());
// Create an instance of the class
var maVoiture = new Voiture("Toyota", "Corolla", 2020);
// Define the function
function aff(car) {
    console.log("".concat(car.make, " ").concat(car.model, " ").concat(car.year));
    console.log("end");
}
// Call the function
maVoiture.start();
aff(maVoiture);
