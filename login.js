function login() {
    const emailEl = document.querySelector("#Username");
    const passwordEl = document.querySelector("#password");
    localStorage.setItem("userName", UsernamelEl.value);
    localStorage.setitem("Password", passwordEl);
    window.location.href = "play.html";
}