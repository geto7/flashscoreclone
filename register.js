document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert("გთხოვ შეავსო ორივე ველი!");
        return;
    }

    const user = {
        username: username,
        password: password
    };

    localStorage.setItem('user', JSON.stringify(user));
    alert("რეგისტრაცია წარმატებით დასრულდა!");
    window.location.href = 'login.html';
});
