document.getElementById("btn").addEventListener("click", function() {
    const diceImages = document.querySelectorAll(".dice img");
    let total = 0;
    
    diceImages.forEach(dice => {
      const randomNumber = Math.floor(Math.random() * 6) + 1; 
      dice.src = `dice-${randomNumber}.svg`; 
      total += randomNumber;
    });
  
    document.getElementById("total").textContent = total; 
    const message = total > 8 ? "Win" : "Lose"; 
    const moreThan10 = document.getElementById("more-than-10");
    const lessThan10 = document.getElementById("less-than-10");
  
    if (total > 8) {
      moreThan10.textContent = message;
      lessThan10.textContent = "";
      document.querySelector(".message h3").textContent = "you win try again";
    } else {
      lessThan10.textContent = message;
      moreThan10.textContent = "";
      document.querySelector(".message h3").textContent = "You didn't win: Try Again!";
    }
    const d = new Date();
    document.getElementById("date").innerHTML = d;
});

  