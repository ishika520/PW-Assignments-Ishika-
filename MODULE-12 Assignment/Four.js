function calculatePrice() {
  const viewerType = document.getElementById("viewerType").value;
  let price;

  switch (viewerType) {
    case "child":
      price = 100;
      break;
    case "adult":
      price = 150;
      break;
    case "senior":
      price = 120;
      break;
    default:
      price = 0; // Handle invalid input
  }

  document.getElementById("totalPrice").textContent = "Total Price: Rs " + price;
}
