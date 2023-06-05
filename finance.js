// JavaScript code
const transactionForm = document.getElementById("transactionForm");
const transactionTable = document.getElementById("transactionTable");

transactionForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const amountInput = document.getElementById("amount");

  const name = nameInput.value;
  const amount = parseFloat(amountInput.value);

  if (name && amount) {
    addTransaction(name, amount);
    nameInput.value = "";
    amountInput.value = "";
  }
});

function addTransaction(name, amount) {
  const newRow = transactionTable.insertRow(-1);

  const nameCell = newRow.insertCell(0);
  nameCell.textContent = name;

  const amountCell = newRow.insertCell(1);
  amountCell.textContent = "₹" + amount.toFixed(2);
}
