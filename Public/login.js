(async () => {
    const userName = localStorage.getItem('userName');
    if(userName) {
        document.querySelector('#playerName').textContent = userName;
        setDisplay('loginControls', 'none');
        setDisplay('playControls', 'block');
    } else {
        setDisplay('loginControls', 'block');
        setDisplay('playControls', 'none');
    }
})();

async function createUser() {
    loginOrCreate(`/api/auth/create`);
}