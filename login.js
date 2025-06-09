document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
        alert("შესვლა წარმატებით დასრულდა!");
        window.location.href = 'index.html';
    } else {
        alert("მომხმარებელი ან პაროლი არასწორია!");
    }
});
