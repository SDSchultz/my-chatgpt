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

  // Calculate astrological sign based on current date
  const astrologicalSignElement = document.getElementById('astrologicalSign');
  const currentDate = new Date();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  const astrologicalSigns = [
    'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini',
    'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'
  ];

  const astrologicalSignIndex = (day <= 21) ? (month - 1) : month;
  const astrologicalSign = astrologicalSigns[astrologicalSignIndex];
  astrologicalSignElement.innerHTML = 'Current Astrological Sign: ' + astrologicalSign;
});
