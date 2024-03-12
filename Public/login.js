function login() {
    const userNameEl = document.querySelector("#Username");
    // const passWordEl = document.querySelector("#password");
    localStorage.setItem("userName", userNameEl.value);
    // localStorage.setitem("password", passWordEl.value);
}
