// Select all buttons
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Thank you! Product added to your cart.");
  });
});

