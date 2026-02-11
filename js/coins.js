let coins = Number(localStorage.getItem("coins"));

if (!coins) {
  coins = 10000;
  localStorage.setItem("coins", coins);
}

const coinBalanceEl = document.getElementById("coinBalance");
coinBalanceEl.innerText = coins;

function updateCoins(amount) {
  coins = coins + amount;
  localStorage.setItem("coins", coins);
  coinBalanceEl.innerText = coins;
}
