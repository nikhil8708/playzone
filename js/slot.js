const symbols = ["🍒", "🍋", "🍉", "⭐", "🔔"];

function spin() {
  if (coins < 100) {
    document.getElementById("result").innerText = "❌ Not enough coins";
    return;
  }

  updateCoins(-100);

  const r1 = symbols[Math.floor(Math.random() * symbols.length)];
  const r2 = symbols[Math.floor(Math.random() * symbols.length)];
  const r3 = symbols[Math.floor(Math.random() * symbols.length)];

  document.getElementById("r1").innerText = r1;
  document.getElementById("r2").innerText = r2;
  document.getElementById("r3").innerText = r3;

 if (r1 === r2 && r2 === r3) {
  updateCoins(500);
  document.getElementById("result").innerText =
    "🎉 You Win +500 Coins!";
} else {
  document.getElementById("result").innerText =
    "😐 Try Again";
}

}
