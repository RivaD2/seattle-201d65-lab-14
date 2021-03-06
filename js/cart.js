/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}
// get render code and change it to REMOVE

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body
  var cartTable = document.getElementById('cart');
  // TODO: Iterate over the items in the cart // loop through products to display all in Cart

  // TODO: Create a TR
  var cartRow = document.createElement('tr'); 

  // TODO: Create a TD for the delete link, quantity,  and the item
  var cartData = document.createElement('td');
  cartData.textContent = CartItem.product;

  cartData = document.createElement('td');
  cartData.textContent = CartItem.quantity;

  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  cartRow.appendChild(cartData);
  cartTable.appendChild(cartRow);
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  this.saveToLocalStorage();
  // reconstitute the stuff
  // TODO: Re-draw the cart table (Remove ordered items when they are clicked. (happening in app.js, line 17)
}

// This will initialize the page and draw the cart on screen

renderCart();
