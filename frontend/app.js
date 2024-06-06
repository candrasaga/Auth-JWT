// app.js
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const resultDiv = document.getElementById('result');
  
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      const response = await login(username, password);
  
      if (response && response.token) {
        // Simpan token di localStorage atau sessionStorage
        localStorage.setItem('token', response.token);
        
        // Arahkan pengguna ke halaman utama
        window.location.href = 'main.html';
      } else {
        resultDiv.textContent = 'Login failed. Please try again.';
      }
    });
  });
  