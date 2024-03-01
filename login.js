function login() {
    const userNameEl = document.querySelector("#Username");
    const passwordEl = document.querySelector("#password");
    localStorage.setItem("userName", userNameEl.value);
    localStorage.setitem("Password", passwordEl);
}
