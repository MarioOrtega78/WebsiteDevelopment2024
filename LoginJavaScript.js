function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'staffmember' && password === 'letmein!123') {
        window.location.href = 'index.html';
        return false;
    } else if (username === 'admin' && password === 'heretohelp!456') {
        window.location.href = 'TechnicianPage.html';
        return false;
    } else {
        alert('Invalid username or password');
        return false;
    }
}
