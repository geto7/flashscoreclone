document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    // წაშალე წინა შეცდომის შეტყობინება თუ არსებობს
    let errorDiv = document.getElementById('login-error');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.id = 'login-error';
        errorDiv.style.color = 'red';
        errorDiv.style.marginTop = '10px';
        document.getElementById('loginForm').appendChild(errorDiv);
    }
    errorDiv.textContent = "";

    if (storedUser && storedUser.username === username && storedUser.password === password) {
        window.location.href = 'index.html';
    } else {
        errorDiv.textContent = "მომხმარებელი ან პაროლი არასწორია!";
    }
});
//ალერტი შევცვალო ერრორით.