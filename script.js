document.getElementById('generateButton').addEventListener('click', function() {
  // Generate numbers based on the existing method
  let whiteBalls = [];
  for (let i = 0; i < 5; i++) {
    let number = Math.floor(Math.random() * 69) + 1;
    whiteBalls.push(number);
  }
  let powerBall = Math.floor(Math.random() * 26) + 1;

  // Display the generated numbers
  let result = document.getElementById('result');
  result.innerHTML = '<strong>' + whiteBalls.join(', ') + '</strong> Powerball: <strong>' + powerBall + '</strong>';

  // Placeholder for the PowerBall jackpot amount
  const jackpotElement = document.getElementById('jackpot');
  jackpotElement.innerHTML = 'Current Jackpot: $35 Million';
});
