document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const storeduser = JSON.parse(localStorage.getItem('user'));

    if(storeduser && storeduser.username === username && storeduser.password === password) {
        alert("შესვლა წარმატებით დასრულდა!");
        window.location.href = 'index.html';
    }else {
        alert("მომხმარებელი ან პაროლი არასწორია!");
    }
})