const form = document.getElementById("registerForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.email.value;
    //console.log(email);
    localStorage.setItem("submittedEmail", email);
    // เปลี่ยนทาง URL ไปยัง "register.html"
    window.location.href = '/register.html';
});