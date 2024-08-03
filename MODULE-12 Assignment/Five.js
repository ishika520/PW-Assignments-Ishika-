function calculateDeliveryTime() {
  const packageType = document.getElementById("packageType").value;
  let deliveryTime;

  switch (packageType) {
    case "standard":
      deliveryTime = "3-5 days";
      break;
    case "express":
      deliveryTime = "1-2 days";
      break;
    case "overnight":
      deliveryTime = "Next day";
      break;
    default:
      deliveryTime = "Invalid package type";
  }

  document.getElementById("deliveryTime").textContent = "Estimated Delivery Time: " + deliveryTime;
}
