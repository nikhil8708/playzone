const symbols = ["🍒", "🍋", "🍉", "⭐", "🔔"];

function spin() {
  if (coins < 100) {
    document.getElementById("result").innerText = "❌ Not enough coins";
    return;
  }

  updateCoins(-100);

  const reel1 = document.getElementById("r1");
  const reel2 = document.getElementById("r2");
  const reel3 = document.getElementById("r3");

  // Add spin animation class
  reel1.classList.add("spin");
  reel2.classList.add("spin");
  reel3.classList.add("spin");

  // Delay result to make animation visible
  setTimeout(() => {

    const r1 = symbols[Math.floor(Math.random() * symbols.length)];
    const r2 = symbols[Math.floor(Math.random() * symbols.length)];
    const r3 = symbols[Math.floor(Math.random() * symbols.length)];

    reel1.innerText = r1;
    reel2.innerText = r2;
    reel3.innerText = r3;

    // Remove spin class after animation
    //reel1.classList.remove("spin");
    //reel2.classList.remove("spin");
    //reel3.classList.remove("spin");

    if (r1 === r2 && r2 === r3) {
      updateCoins(500);
      const resultEl = document.getElementById("result");
      resultEl.innerText = "🎉 YOU WIN +500!";
      resultEl.classList.add("win");

      setTimeout(() => {
        resultEl.classList.remove("win");
      }, 1000);

    } else {
      document.getElementById("result").innerText = "😐 Try Again";
    }

  }, 600); // 300ms delay
}