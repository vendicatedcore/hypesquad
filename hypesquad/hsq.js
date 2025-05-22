const axios = require('axios');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const HYPESQUAD_HOUSES = {
  '1': 'Bravery',
  '2': 'Brilliance', 
  '3': 'Balance'
};

async function main() {
  console.log('🎮 Discord HypeSquad Selector\n');
  
  const token = await new Promise(resolve => {
    readline.question('Enter your Discord token: ', resolve);
  });
  
  console.log('\n🏠 Available HypeSquad Houses:');
  console.log('1. Bravery (1)');
  console.log('2. Brilliance (2)');
  console.log('3. Balance (3)\n');

  const choice = await new Promise(resolve => {
    readline.question('Select house (1-3): ', resolve);
  });
  
  if (!HYPESQUAD_HOUSES[choice]) {
    console.log('❌ Invalid selection. Please choose 1, 2, or 3.');
    readline.close();
    return;
  }
  
  try {
    await axios.post(
      'https://discord.com/api/v9/hypesquad/online',
      { house_id: parseInt(choice) },
      {
        headers: {
          Authorization: token.trim(),
          'Content-Type': 'application/json'
        }
      }
    );
    console.log(`\n✅ Successfully joined HypeSquad ${HYPESQUAD_HOUSES[choice]}!`);
  } catch (error) {
    console.error('\n❌ Failed to change HypeSquad:', error.response?.data?.message || error.message);
  } finally {
    readline.close();
  }
}

main();
