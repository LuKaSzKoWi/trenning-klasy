// Dodaj do klasy Car metodę constructor, która przyjmuje trzy parametry:

// brand – marka samochodu
// model – model samochodu
// price – cena samochodu
// Klasa Car powinna tworzyć obiekt z właściwościami brand, model i price, których wartości zostaną przekazane jako argumenty przy tworzeniu nowej instancji (przy użyciu operatora new).

// Zadeklarowano klasę Car
// Klasa Car zawiera metodę constructor
// W wyniku wywołania new Car("Audi", "Q3", 36000) zostanie utworzony obiekt {brand: "Audi", model: "Q3", price: 36000}
// W wyniku wywołania new Car("BMW", "X5", 58900) zostanie utworzony obiekt {brand: "BMW", model: "X5", price: 58900}
// W wyniku wywołania new Car("Nissan","Murano", 31700) zostanie utworzony obiekt {brand: "Nissan", model: "Murano", price: 31700}


class Car {
  constructor (brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

const audi = new Car("Audi", "Q3", 36000);
const bmw = new Car("BMW", "X5", 58900);
const nissan = new Car("Nissan", "Murano", 31700);


// Przeprowadź refaktoryzację klasy Car tak, aby przyjmowała ona jeden parametr, tj. obiekt z właściwościami brand, model i price.

// Zadeklarowano klasę Car
// Klasa Car zawiera metodę constructor
// W wyniku wywołania new Car({ brand: "Audi", model: "Q3", price: 36000 }) zostanie utworzony obiekt {brand: "Audi", model: "Q3", price: 36000}
// W wyniku wywołania new Car({ brand: "BMW", model: "X5", price: 58900 }) zostanie utworzony obiekt {brand: "BMW", model: "X5", price: 58900}
// W wyniku wywołania new Car({ brand: "Nissan", model: "Murano", price: 31700 }) zostanie utworzony obiekt {brand: "Nissan", model: "Murano", price: 31700}

class Car {
  constructor({brand, model, price}) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

// ZADANIE #3

// Dodaj do klasy Car dwie metody.

// getPrice() zwraca wartość właściwości price w obiekcie, w którym metoda zostanie wywołana.
// changePrice(newPrice) zmieni wartość właściwości price na wartość parametru newPrice w obiekcie, w którym metoda zostanie wywołana.
// Klasa Car zawiera metodę getPrice
// Metoda getPrice zwraca wartość właściwości price w obiekcie klasy, która tę metodę wywoła
// Klasa Car zawiera metodę changePrice
// Metoda changePrice zmienia wartość właściwości price w obiekcie klasy, która tę metodę wywoła

class Car {
  constructor(params) {
    this.brand = params.brand;
    this.model = params.model;
    this.price = params.price;
  }

getPrice() {
  return this.price;
}

changePrice(newPrice) {
  this.price = newPrice;
}
}