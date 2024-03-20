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


async function loginUser() {
    loginOrCreate(`/api/auth/login`);
}


async function createUser() {
    loginOrCreate(`/api/auth/create`);
}

async function loginOrCreate(endpoint) {
    const Username = document.querySelector('#userName')?.value;
    const password = document.querySelector('userPassword')?.value;
    const response = await fetch(endpoint, {
        method: 'post',
        body: JSON.stringify({ email: Username, password: password}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
    });
}