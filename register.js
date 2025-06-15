document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    
    let errorDiv = document.getElementById('register-error');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.id = 'register-error';
        errorDiv.style.color = 'red';
        errorDiv.style.marginTop = '10px';
        document.getElementById('registerForm').appendChild(errorDiv);
    }
    errorDiv.textContent = "";

    if (!username || !password) {
        errorDiv.textContent = "გთხოვ შეავსო ორივე ველი!";
        return;
    }

    const user = {
        username: username,
        password: password
    };

    localStorage.setItem('user', JSON.stringify(user));
    window.location.href = 'login.html';
});
//ემაილის დამატება რეგისტრაციისას