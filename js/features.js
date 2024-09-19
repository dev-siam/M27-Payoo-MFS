// show  add-money hide cash-out
document
  .getElementById("show-add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // show the add-money-form
    document.getElementById("add-money-form").classList.remove("hidden");
    // hide the cash-out-form
    document.getElementById("cash-out-form").classList.add("hidden");

    // Add a border to the button
    document.getElementById("show-add-money-btn").style.background = "#68eba5";
    document.getElementById("show-cash-out-btn").style.background = 'white';
    
  });


// show cash-out hide add-money
document
  .getElementById("show-cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // show the cash-out-form
    document.getElementById("cash-out-form").classList.remove("hidden");
    // hide the add-money-form
    document.getElementById("add-money-form").classList.add("hidden");

    // Add a border to the button
    document.getElementById("show-cash-out-btn").style.background = "#68eba5";
    document.getElementById("show-add-money-btn").style.background = 'white';
  });
