const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  try {
    const response = await fetch('https://testepc.onrender.com/comentarios');
    const comments = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(comments),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error fetching comments' }),
    };
  }
};
