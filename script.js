let order = []; // store selected items

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user === "admin" && pass === "1234") {
    document.getElementById("login-section").classList.add("hidden");
    document.getElementById("menu-section").classList.remove("hidden");
  } else {
    alert("Invalid login!");
  }
}

function addToOrder() {
  const items = document.querySelectorAll(".item:checked");
  items.forEach(item => {
    order.push(parseInt(item.value)); // add selected item price
    item.checked = false; // uncheck after adding
  });
  alert("Items added to order!");
}

function calculateBill() {
  let total = order.reduce((sum, price) => sum + price, 0);
  document.getElementById("bill-output").innerText = "Total Amount: ₹" + total;
  document.getElementById("bill-section").classList.remove("hidden");
}