// Step 1: Create Event Listener
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    // Step 2: Prevent form submission
    event.preventDefault();

    // Step 3: get money amount and pin
    const addMoneyAmount = document.getElementById("add-money-amount").value;
    const addMoneyPin = document.getElementById("add-money-pin").value;

    // Step 4: validate pin
    if (addMoneyPin == "1234") {
      // Step 5: get balace
      // Step 6: add money to account
      // Step 7: update balance
      const accountBalance = document.getElementById("account-balance").innerText;
      const newBalance = parseFloat(accountBalance) + parseFloat(addMoneyAmount);
      document.getElementById("account-balance").innerText = newBalance.toFixed(2);

      // Step 8: clear input fields
        document.getElementById("add-money-amount").value = "";
        document.getElementById("add-money-pin").value = "";


      // Step 7: display success message
      //   document.getElementById("success-message").textContent =
      //     "Added $" + addMoneyAmount;
      //   document.getElementById("success-message").style.display = "block";
    }
    else {
        alert("Invalid PIN");
    }
  });
