/*
20. In the following shopping cart add, remove, edit items
    => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    - add 'Meat' in the beginning of your shopping cart if it has not been already added
    - add Sugar at the end of your shopping cart if it has not been already added
    - remove 'Honey'
    - modify Tea to 'Green Tea'
*/

//==========SOLUTION==========

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// -----adding 'Meat' at the beginning-----
let newCart = shoppingCart.unshift('Meat');

// -----adding 'Sugar' at the end-----
let newAgain = shoppingCart.push('Sugar');

// -----Removing 'Honey'-----
let honeyRemoved = shoppingCart.splice(4, 1)

// -----Changing 'Tea' to 'Green Tea'-----
let greenTea = shoppingCart.splice(3, 1, 'Green Tea')

// -----The edited array can be visualised here-----
console.log(shoppingCart);