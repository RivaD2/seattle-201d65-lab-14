# seattle-201d65-lab-14/ Create an Order Form and a Shopping Cart

**Overview:A paired programming exercise where our job was to bring functionality to an order form page and a shopping cart page** 

*We had to fill in the necessary code in JavaScript and CSS files, but were unable to modify the provided HTML files in any way**

**Our `index.html` is an order form for customers: it will have an order form for BusMall that contains the following features:**

* A dropdown menu of all BusMall products (`<select>` and `<option>` will be needed)
* An input of `type="number"` to indicate the quantity to purchase.
* An “Add to Cart” button to submit the order. When the order is submitted, all of the input fields should be cleared.
* An animated confirmation message using CSS and JS, displayed when the order is submitted, plus a link to the shopping cart page.
* Appropriate instructions and styling on the page.

--------
**Our `cart.html` page will display the BusMall orders on a typical shopping cart checkout page.**

* It should display all items currently in the order with a picture of the item.
* Each order should have a button “Delete this item” that will remove that order from the DOM (and array of ordered items) when it is clicked.
* Text inputs for name, street, city, state, ZIP code, and phone number.
* An input of type="number" to enter a 16-digit credit card number.
* A “Process Order” button to submit the order. When the order is submitted, all of the input fields should be cleared.
* An animated confirmation message using CSS and JS.
* Use local storage to share data between the two HTML pages.
