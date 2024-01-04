document.getElementById('generateButton').addEventListener('click', function() {
  // Generate 5 random numbers (1-69) for white balls
  let whiteBalls = [];
  for (let i = 0; i < 5; i++) {
    let number = Math.floor(Math.random() * 69) + 1;
    whiteBalls.push(number);
  }

  // Generate 1 random number (1-26) for the Powerball
  let powerBall = Math.floor(Math.random() * 26) + 1;

  // Display the generated numbers
  let result = document.getElementById('result');
  result.innerHTML = '<strong>' + whiteBalls.join(', ') + '</strong> Powerball: <strong>' + powerBall + '</strong>';
});
