function convert() {
       const inrAmount = parseFloat(document.getElementById("inrAmount").value);
       const exchangeRate = 82; // 1 USD = 82 INR
       const usdAmount = inrAmount / exchangeRate;
       document.getElementById("usdAmount").textContent = usdAmount.toFixed(2) + " USD";
     }
     