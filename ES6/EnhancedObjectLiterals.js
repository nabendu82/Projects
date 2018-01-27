//ES5 code
function createBookShop(inventory) {
  return {
    inventory: inventory,
    inventoryValue: function() {
      return this.inventory.reduce((total, book) => total + book.price, 0);      
    },
    priceForTitle: function(title) {
      return this.inventory.find(book => book.title === title).price;      
    }
  };
}

const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'Javascript for dummies', price: 15 },
  { title: 'ES6 magic', price: 5 }
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('ES6 magic'));

//ES6 code
function createBookShopNew(inventoryNew) {
  return {
    inventoryNew,
    inventoryValue() {
      return this.inventoryNew.reduce((total, book) => total + book.price, 0);      
    },
    priceForTitle(title) {
      return this.inventoryNew.find(book => book.title === title).price;      
    }
  };
}

const inventoryNew = [
  { title: 'Harry Potter', price: 10 },
  { title: 'Javascript for dummies', price: 15 },
  { title: 'ES6 magic', price: 5 }
];

const bookShopNew = createBookShopNew(inventoryNew);

console.log(bookShopNew.inventoryValue());
console.log(bookShopNew.priceForTitle('Javascript for dummies'));
