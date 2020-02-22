const shoppingCart = [];
const stock = [];

const item = function(id, name, price, qty) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.qty = qty;
};

const stockItem = function(id, name, price, imagefile) {
  this.id = id;
  (this.name = name), (this.price = price);
  this.imagefile = imagefile;
};

function init() {
  loadStock();
}

function loadStock() {}

//helper function - function can call another function
function findItemInStock() {}
