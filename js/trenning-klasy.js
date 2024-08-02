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


// ZADANIE #4

// Przeprowadź refaktoryzację klasy Car, ustawiając właściwość brand jako prywatną oraz dodając do
// publicznego interfejsu dwie metody pozwalające na pobranie lub zmianę wartości w tym polu.

// Metoda getBrand() zwraca wartość prywatnej właściwości brand.
// Metoda changeBrand(newBrand) ustawia wartość prywatnej właściwości brand na newBrand.
// Zadeklarowano klasę Car
// Właściwość brand należąca do klasy Car zadeklarowano jako prywatną
// Konstruktor klasy przyjmuje obiekt z właściwościami brand, model i price
// W wyniku wywołania new Car({ brand: "Audi", model: "Q3", price: 36000 }) zostanie utworzony obiekt { model: "Q3", price: 36000 }
// W wyniku wywołania new Car({ brand: "bmw", model: "X5", price: 58900 }) zostanie utworzony obiekt { model: "X5", price: 58900 }
// W wyniku wywołania new Car({ brand: "Nissan", model: "Murano", price: 31700 }) zostanie utworzony obiekt { model: "Murano", price: 31700 }
// Instancja nie zawiera publicznej właściwości brand
// Metoda getBrand() zwraca wartość prywatnej właściwości brand
// Metoda changeBrand("Honda") zmienia wartość prywatnej właściwości brand" na "Honda"

class Car {
  #brand;  // Deklaracja prywatnej właściwości

  constructor({ brand, model, price }) {
    this.#brand = brand;  // Przypisanie wartości do prywatnej właściwości
    this.model = model;
    this.price = price;
  }

  // Metoda zwracająca wartość prywatnej właściwości brand
  getBrand() {
    return this.#brand;
  }

  // Metoda zmieniająca wartość prywatnej właściwości brand
  changeBrand(newBrand) {
    this.#brand = newBrand;
  }
}

// Wyjaśnienie:
// Prywatna właściwość brand: Używamy składni # (np. #brand), aby zadeklarować prywatną właściwość w klasie Car.
// Metoda getBrand(): Zwraca wartość prywatnej właściwości brand.
// Metoda changeBrand(newBrand): Ustawia nową wartość prywatnej właściwości brand.
// Instancje klasy Car: Przykłady tworzenia instancji klasy Car z różnymi wartościami dla brand, model, i price.


// ZADANIE #5 - SETTER I GETTER

// Przeprowadź refaktoryzację klasy Car.Oprócz prywatnego pola #brand zadbaj o to, aby właściwości model i price również były prywatne.
// Należy ujednolicić interfejs publiczny klasy, zastępując zadeklarowane wcześniej metody getterami i setterami brand, model i price,
//   aby umożliwić pracę z prywatnymi właściwościami klasy.

// Zadeklarowano klasę Car
// Klasa Car zawiera właściwość prywatną brand
// Klasa Car zawiera właściwość prywatną model
// Klasa Car zawiera właściwość prywatną price
// Konstruktor klasy przyjmuje obiekt z właściwościami brand, model i price
// W klasie Car zadeklarowano getter getPrice
// W klasie Car zadeklarowano setter brand
// W klasie Car zadeklarowano getter model
// W klasie Car zadeklarowano setter model
// W klasie Car zadeklarowano getter price
// W klasie Car zadeklarowano setter price

class Car {
  #brand;
  #model;
  #price

  constructor(params) {
    this.#brand = params.brand;
    this.#model = params.model;
    this.#price = params.price;
  }

  get brand() {
    return this.#brand;
  }

  changeBrand(newBrand) {
    this.#brand = newBrand;
  }

  set brand(newPrice) {
    this.#brand = newPrice;
  }

  get model() {
    return this.#model;
  }

  updateModel(newModel) {
    this.#model = newModel;
  }

  set model(newPrice) {
    this.#model = newPrice;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
}

// ZADANIE #6 STATIC

// Przeprowadź refaktoryzację klasy Car.Dodaj publiczną właściwość statyczną maxPrice i ustaw jej wartość na liczbę 50000,
//   tj.maksymalna dopuszczalna cena samochodu.

// Dodaj do settera price sprawdzanie przekazywanej wartości parametru newPrice.Jeśli przekazana wartość jest większa niż maxPrice,
//   setter nie zapisuje żadnych zmian, a jeśli jest mniejsza lub równa, nadpisuje cenę samochodu.

// Pod deklaracją klasy dodaliśmy inicjalizacje instancji i wywołania metod, aby pokazać,
//   w jaki sposób będą używane gettery i settery price.

// Zadeklarowano klasę Car
// Obiekt zawiera właściwość statyczną maxPrice
// Wartością statycznej właściwości maxPrice jest liczba 50000
// Instancja nie zawiera właściwości maxPrice
// W klasie Car zadeklarowano getter price
// W klasie Car zadeklarowano setter price
// Wywołanie settera price w instancji klasy z wartością argumentu mniejszą niż wartość maxPrice aktualizuje wartość właściwości #price
// Wywołanie settera price w instancji klasy z wartością argumentu większą niż wartość maxPrice NIE aktualizuje wartości właściwości #price


class Car {
  static maxPrice = 50000;
  #price;

  constructor(params) {
    this.#price = params.price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice <= Car.maxPrice) {
    this.#price = newPrice;
    }
    else {
      console.log(`Price cannot be more than ${Car.maxPrice}`);
    }
  }
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000


// ZADANIE #7 STATIC METHOD

// Dodaj do klasy Car publiczną statyczną metodę checkPrice(price), która przyjmuje cenę auta jako argument.
// Metoda powinna porównać wartość parametru price i prywatnej statycznej właściwości maxPrice.

// Jeśli cena samochodu przekracza wartość maksymalną, metoda powinna zwrócić ciąg znaków "Error! Price exceeds the maximum".
// W przeciwnym razie metoda powinna zwrócić ciąg znaków "Success! Price is within acceptable limits".
// Pod deklaracją klasy dodaliśmy inicjalizację instancji i wywołania metod, aby pokazać, w jaki sposób używana będzie metoda checkPrice(price).

// Zadeklarowano klasę Car
// Klasa Car zawiera statyczną metodę checkPrice(price)
// Wywołanie Car.checkPrice(36000) zwraca ciąg znaków "Success! Price is within acceptable limits"
// Wywołanie Car.checkPrice(18000) zwraca ciąg znaków "Success! Price is within acceptable limits"
// Wywołanie Car.checkPrice(64000) zwraca ciąg znaków "Error! Price exceeds the maximum"
// Wywołanie Car.checkPrice(57000) zwraca ciąg znaków "Error! Price exceeds the maximum"

class Car {
  static #maxPrice = 50000;

  static checkPrice(price) {
    if (price > Car.#maxPrice) {
      return "Error! Price exceeds the maximum";
    }
    else {
      return "Success! Price is within acceptable limits";
    }
  }

  constructor(params) {
    this.price = params.price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"


// ZADANIE #8 EXTANDS

// Do obsługi aplikacji potrzebny jest administrator z uprawnieniami do dodawania adresów e-mail użytkowników do czarnej listy.

// Zadeklaruj klasę Admin, który jest dziedziczony z klasy User
// Dodaj do klasy Admin publiczną statyczną właściwość role (poziom dostępu), której wartością jest obiekt {BASIC: "basic", SUPERUSER: "superuser"}
// Zadeklarowano klasę Admin
// Klasa Admin jest dziedziczona z klasy User
// Klasa Admin zawiera publiczną statyczną właściwość role
// Odwołanie się do Admin.role.BASIC zwraca ciąg "basic"
// Odwołanie się do Admin.role.SUPERUSER zwraca ciąg "superuser"


class User {
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  static role = {
    BASIC: "basic", 
    SUPERUSER: "superuser"
  }
}


// ZADANIE #9 SUPER

// Dodaj do klasy Admin metodę constructor, która przyjmuje jeden parametr, tj.obiekt ustawień z dwiema właściwościami email i access.
// Dodaj do klasy Admin publiczną właściwość access, której wartość będzie przekazywana przy wywoływaniu konstruktora.

// Pod deklaracją klasy dodaliśmy inicjalizację instancji, aby pokazać, w jaki sposób będzie używana klasa Admin.

// Zadeklarowano klasę Admin
// Klasa Admin jest dziedziczona z klasy User
// Klasa Admin zawiera publiczną statyczną właściwość role
// Klasa Admin zawiera metodę constructor z parametrem w postaci obiektu {email, access}
// W konstruktorze klasy Admin w przypadku właściwości email używane jest odwołanie do konstruktora klasy nadrzędnej
// Odwołanie się do Admin.role.BASIC zwraca ciąg "basic"
// Odwołanie się do Admin.role.SUPERUSER zwraca ciąg "superuser"

class User {
  #email;

  constructor(email) {
    this.#email = email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

class Admin extends User {
  static role = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };
  
  constructor({ email, access }) {
    super(email);  
    this.access = access;
  }
}

const mango = new Admin({
  email: "mango@mail.com",
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"


// ZADANIE #10 DZIEDZICZENIE

// Dodaj następujące właściwości i metody do klasy Admin.

// Publiczną właściwość blacklistedEmails, w której będzie czarna lista adresów e-mail użytkowników. Wartością domyślną jest pusta tablica.
// Publiczną metodę blacklist(email) służącą do dodawania adresu e - mail do czarnej listy.
// Metoda powinna dodawać wartość parametru email do tablicy przechowywanej we właściwości blacklistedEmails.
// Publiczną metodę isBlacklisted(email) służącą do sprawdzania, czy adres e - mail znajduje się na czarnej liście.
// Metoda powinna sprawdzać występowanie wartości parametru email w tablicy przechowywanej we właściwości blacklistedEmails i zwracać true lub false.
// Pod deklaracją klasy dodaliśmy inicjalizację instancji i wywołania metod w kolejności, w jakiej kod będzie sprawdzany w testach.
//  Prosimy nic tam nie zmieniać.

// Zadeklarowano klasę Admin
// Klasa Admin jest dziedziczona z klasy User
// Klasa Admin zawiera publiczną właściwość blacklistedEmails
// Klasa Admin zawiera publiczną metodę blacklist
// Klasa Admin zawiera publiczną metodę isBlacklisted
// Po wywołaniu mango.blacklist("poly@mail.com") wartością właściwości blacklistedEmails jest tablica ["poly@mail.com"]
// Wywołanie mango.isBlacklisted("mango@mail.com") zwraca false
// Wywołanie mango.isBlacklisted("poly@mail.com") zwraca true

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  static role = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };
  blacklistedEmails = [];

  constructor(params) {
    super(params.email);
    this.access = params.access;
  }
  blacklist(email) {
    this.blacklistedEmails.push(email);
  }
  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }
}

const mango = new Admin({
  email: "mango@mail.com",
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true


// Wyjaśnienie:
// blacklistedEmails: Publiczna właściwość, która domyślnie jest pustą tablicą. Przechowuje adresy e-mail dodane do czarnej listy.
// blacklist(email): Metoda dodaje podany adres e-mail do tablicy blacklistedEmails.
//   isBlacklisted(email): Metoda sprawdza, czy podany adres e - mail znajduje się w tablicy blacklistedEmails. 
// Zwraca true, jeśli adres znajduje się na liście, w przeciwnym razie zwraca false.