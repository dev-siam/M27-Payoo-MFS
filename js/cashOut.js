// Step 1: Create Event Listener
document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    // Step 2: Prevent form submission
    event.preventDefault();

    // Step 3: get cash out amount and pin
    const cashOutAmount = document.getElementById("cash-out-amount").value;
    const cashOutPin = document.getElementById("cash-out-pin").value;

    // Step 4: validate pin
    if (cashOutPin == "1234") {
      // Step 5: get balace
      // Step 6: cash out money from account
      // Step 7: update balance
      const userBalance = document.getElementById("user-balance").innerText;
      const newBalance = parseFloat(userBalance) - parseFloat(cashOutAmount);
      document.getElementById("user-balance").innerText = newBalance.toFixed(2);

      // Step 8: clear input fields
      document.getElementById("cash-out-amount").value = "";
      document.getElementById("cash-out-pin").value = "";
    } else {
      alert("Invalid PIN");
    }
  });
