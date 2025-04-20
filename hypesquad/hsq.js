const axios = require('axios');
const token = 'UToken';

const HYPESQUAD = {
  bravery: 1,
  brilliance: 2,
  balance: 3,
};

async function setHypeSquad(house) {
  const houseId = HYPESQUAD[house.toLowerCase()];
  if (!houseId) return console.log('Invalid house. Use bravery, brilliance, or balance.');

  try {
    await axios.post(
      'https://discord.com/api/v9/hypesquad/online',
      { house_id: houseId },
      {
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(`✅ Successfully joined HypeSquad ${house}`);
  } catch (err) {
    console.error('❌ Failed to change HypeSquad:', err.response?.data || err.message);
  }
}

//'bravery', 'brilliance', or 'balance'
setHypeSquad('bravery');
