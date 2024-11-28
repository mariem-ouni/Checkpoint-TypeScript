// Define the interface
interface Vehicule {
  make: string;
  model: string;
  year: number;
}

// Implement the class
class Voiture implements Vehicule {
  constructor(public make: string, public model: string, public year: number) {}

  start(): void {
    console.log("Car engine started");
  }
}

// Create an instance of the class
const maVoiture = new Voiture("Toyota", "Corolla", 2020);

// Define the function
function aff(car: Voiture): void {
  console.log(`${car.make} ${car.model} ${car.year}`);
  console.log("end");
}

// Call the function
maVoiture.start()
aff(maVoiture);
