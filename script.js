document.getElementById('generateButton').addEventListener('click', function() {
  // Generate unique numbers in ascending order
  let whiteBalls = [];
  while (whiteBalls.length < 5) {
    let number = Math.floor(Math.random() * 69) + 1;
    if (!whiteBalls.includes(number)) {
      whiteBalls.push(number);
    }
  }
  whiteBalls.sort((a, b) => a - b);

  let powerBall = Math.floor(Math.random() * 26) + 1;

  // Display the generated numbers
  let result = document.getElementById('result');
  result.innerHTML = '<strong>' + whiteBalls.join(', ') + '</strong> Powerball: <strong>' + powerBall + '</strong>';

  // Placeholder for the PowerBall jackpot amount
  const jackpotElement = document.getElementById('jackpot');
  jackpotElement.innerHTML = 'Current Jackpot: $35 Million';
});
