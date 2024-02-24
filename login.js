function login() {
    const emailEl = document.querySelector("#email");
    const passwordEl = document.querySelector("#password");
    localStorage.setItem("Email", emailEl.value);
    localStorage.setitem("Password", passwordEl);
    window.location.href = "play.html";
}