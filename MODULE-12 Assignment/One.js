// Create a simple discount calculator that takes two values from the variables - the total price and the discount percentage - and prints the discounted value.

function calculateDiscount() {
       const totalCost = parseFloat(document.getElementById("totalCost").value);
       const discountPercentage = parseFloat(document.getElementById("discountPercentage").value) / 100;
       const discountedPrice = totalCost - (totalCost * discountPercentage);
       document.getElementById("result").textContent = `Discounted Price: $${discountedPrice.toFixed(2)}`;
     }
     
let totalValue = 2000;
let discountPercentage = 20;

let discountedPrice = totalValue - (discountPercentage / 100) * totalValue;
console.log("The final price after discount is: Rs." + discountedPrice);