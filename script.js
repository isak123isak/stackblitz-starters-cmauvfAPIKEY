// script.js
document.getElementById('generateBtn').addEventListener('click', function() {
  const apiKey = generateApiKey(32);
  document.getElementById('output').textContent = apiKey;
});

function generateApiKey(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

