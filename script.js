document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.wrapper');
  const showSignup = document.querySelector('.signUpBtn-link');
  const showLogin = document.querySelector('.signInBtn-link');

  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');

  // disable autocomplete and clear sensitive fields to prevent showing saved/default credentials
  if (loginForm) {
    loginForm.setAttribute('autocomplete', 'off');
    loginForm.reset();
    const lp = document.getElementById('loginPassword');
    document.addEventListener('DOMContentLoaded', () => {
      const wrapper = document.querySelector('.wrapper');
      const showSignup = document.querySelector('.signUpBtn-link');
      const showLogin = document.querySelector('.signInBtn-link');

      const loginForm = document.getElementById('loginForm');
      const signupForm = document.getElementById('signupForm');

      // helper to show inline messages (expects element with id="formMessage")
      function showMessage(el, text, type = 'info') {
        if (!el) {
          // fallback to console
          console[type === 'error' ? 'error' : 'log'](text);
          return;
        }
        el.textContent = text;
        el.className = `form-message ${type}`; // style via CSS (.form-message.error/.success)
        el.setAttribute('role', 'alert');
      }

      // disable autocomplete on forms and clear sensitive fields
      if (loginForm) {
        loginForm.setAttribute('autocomplete', 'off');
        loginForm.reset();
        const lp = document.getElementById('loginPassword');
        if (lp) lp.value = '';
        const lu = document.getElementById('loginUsername');
        if (lu) lu.value = '';
      }
      if (signupForm) {
        signupForm.setAttribute('autocomplete', 'off');
        signupForm.reset();
        const su = document.getElementById('signupUsername');
        if (su) su.value = '';
        const sp = document.getElementById('signupPassword');
        if (sp) sp.value = '';
      }

      // toggle forms
      if (showSignup) {
        showSignup.addEventListener('click', (e) => {
          e.preventDefault();
          wrapper?.classList.add('active');
        });
      }

      if (showLogin) {
        showLogin.addEventListener('click', (e) => {
          e.preventDefault();
          wrapper?.classList.remove('active');
        });
      }

      // login functionality (replace client-side check with server API in production)
      if (loginForm) {
        const messageEl = document.getElementById('loginMessage');
        loginForm.addEventListener('submit', async (e) => {
          e.preventDefault();
          const userEl = document.getElementById('loginUsername');
          const passEl = document.getElementById('loginPassword');
          const user = userEl ? userEl.value.trim() : '';
          const pass = passEl ? passEl.value.trim() : '';

          if (!user || !pass) {
            showMessage(messageEl, 'Please enter username and password.', 'error');
            return;
          }

          // NOTE: Do NOT use client-side hardcoded credentials for real projects.
          // Example fallback (development only):
          if (user === 'Admin' && pass === '2645') {
            showMessage(messageEl, 'Login successful. Redirecting...', 'success');
            // small delay to show message, then go to dashboard
            setTimeout(() => { window.location.href = 'dashboard.html'; }, 600);
            return;
          }

        
          showMessage(messageEl, 'Invalid username or password.', 'error');
        });
      }

      // signup functionality
      if (signupForm) {
        const messageEl = document.getElementById('signupMessage');
        signupForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const username = document.getElementById('signupUsername')?.value.trim() || '';
          if (!username) {
            showMessage(messageEl, 'Please enter a username.', 'error');
            return;
          }

          // In production, send to server to create account; do not store plain passwords.
          showMessage(messageEl, `Signup successful, ${username}! You can now log in.`, 'success');
          signupForm.reset();
          wrapper?.classList.remove('active');
        });
      }
    });
    const lu = document.getElementById('loginUsername');
    if (lu) lu.value = '';
  }
  if (signupForm) {
    signupForm.setAttribute('autocomplete', 'off');
    signupForm.reset();
    const su = document.getElementById('signupUsername');
    if (su) su.value = '';
    const sp = document.getElementById('signupPassword');
    if (sp) sp.value = '';
  }

  // toggle forms
  if (showSignup) {
    showSignup.addEventListener('click', (e) => {
      e.preventDefault();
      if (wrapper) wrapper.classList.add('active');
    });
  }

  if (showLogin) {
    showLogin.addEventListener('click', (e) => {
      e.preventDefault();
      if (wrapper) wrapper.classList.remove('active');
    });
  }

  // login functionality
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const user = document.getElementById('loginUsername').value.trim();
      const pass = document.getElementById('loginPassword').value.trim();

      if (user === "Admin" && pass === "2645") {
        alert("✅ Login Successful!");
        window.location.href = "dashboard.html";
      } else {
        alert("❌ Invalid Username or Password");
      }
    });
  }

  // signup functionality
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('signupUsername').value.trim();

      alert(`🎉 Signup successful, ${username}! You can now log in.`);
      signupForm.reset();
      if (wrapper) wrapper.classList.remove('active');
    });
  }
});



