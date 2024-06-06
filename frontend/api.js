// api.js
const BASE_URL = 'http://localhost:3015';

async function login(username, password) {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
