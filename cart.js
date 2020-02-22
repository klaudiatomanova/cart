let cart = [];

let Item = function(name, price, count) {
  this.name = name;
  this.price = price;
  this.count = count;
};

let obj = {};

obj.addItemToCart = function(name, price, count) {
  for (let item in cart) {
    if (cart[item].name === name) {
      cart[item].count++;
      return;
    }
  }
  let item = new Item(name, price, count);
  cart.push(item);
};
obj.setCountForItem = function(name, count) {
  for (let i in cart) {
    if (cart[i].name === name) {
      cart[i].count = count;
      break;
    }
  }
};
obj.removeItemFromCart = function(name) {
  for (let item in cart) {
    if (cart[item].name === name) {
      cart[item].count--;
      if (cart[item].count === 0) {
        cart.splice(item, 1);
      }
      break;
    }
  }
};
