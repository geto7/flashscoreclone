document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const user ={
        username: username,
        password: password
    };

    localStorage.setItem('user', JSON.stringify(user));
    alert(" რეგისტრაცია წარმატებით დასრულდა!");
    window.location.href = 'login.html';
})