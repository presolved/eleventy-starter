const axios = require('axios');

module.exports = async () => {
  const result = await axios.get('https://api.chucknorris.io/jokes/random');
  return result.data.file;
};
