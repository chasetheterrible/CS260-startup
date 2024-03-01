function login() {
    const userNamelEl = document.querySelector("#Username");
    const passwordEl = document.querySelector("#password");
    localStorage.setItem("userName", nameEl.value);
    localStorage.setitem("Password", passwordEl);
    window.location.href = "play.html";
}

export {login};