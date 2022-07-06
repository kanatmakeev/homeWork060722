class Car {
    brand;
    model;
    carYear;
    distance;
    countOfFuel;
  
    constructor(brand, model, carYear, distance, countOfFuel) {
      this.brand = brand;
      this.model = model;
      this.carYear = carYear;
      this.distance = distance;
      this.countOfFuel = countOfFuel;
    }
  
    getCar() {
      console.log(`моя машина: ${this.brand}, модель: ${this.model}, год машины: ${this.carYear}, 
        пройденное расстояние: ${this.distance} km, кол.топлива: ${this.countOfFuel} litr `
      );
      console.log(this.countOfFuel / this.distance * 100);
    }
  }
  
  const myCar = new Car("Audi", "A7", "2015", "1000", "70");
  console.log(myCar.getCar());