// Demo users
const demoUsers = {
  'student@vlu.edu.vn': { password: '123456', redirect: 'learner-new.html' },
  'tutor@vlu.edu.vn':   { password: '123456', redirect: 'tutor-new.html' },
  'center@vlu.edu.vn':  { password: '123456', redirect: 'center-new.html' },
  'admin@vlu.edu.vn':   { password: '123456', redirect: 'admin-new.html' }
};

function quickLogin(email, password) {
  document.getElementById('email').value = email;
  document.getElementById('password').value = password;
  document.getElementById('loginForm').dispatchEvent(new Event('submit', {cancelable: true, bubbles: true}));
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  if (demoUsers[email] && demoUsers[email].password === password) {
    console.log('Login successful for:', email, 'redirecting to:', demoUsers[email].redirect);
    // Clear any existing session data
    sessionStorage.clear();
    // Redirect to appropriate page
    window.location.href = demoUsers[email].redirect;
  } else {
    alert('Invalid email or password!');
  }
}); 