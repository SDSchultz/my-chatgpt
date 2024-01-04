document.getElementById('generateButton').addEventListener('click', async function() {
  try {
    // Fetch moon phase data
    const moonPhaseResponse = await fetch('https://api.ipgeolocation.io/astronomy?apiKey=YOUR_API_KEY');
    const moonPhaseData = await moonPhaseResponse.json();
    const moonPhaseElement = document.getElementById('moonPhase');
    moonPhaseElement.innerHTML = 'Current Moon Phase: ' + moonPhaseData.moon_phase + ' (' + moonPhaseData.moon_illumination + ' illuminated)';
  } catch (error) {
    console.error('Error fetching moon phase:', error);
    const moonPhaseElement = document.getElementById('moonPhase');
    moonPhaseElement.innerHTML = 'Unable to fetch moon phase information.';
  }

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
  if (astrologicalSignElement) {
    astrologicalSignElement.innerHTML = 'Current Astrological Sign: ' + astrologicalSign;
  }
});
