import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyA2VXKLthTtTFO9buGmhpuSRin3NO0cILk",
    authDomain: "login-web-a5e50.firebaseapp.com",
    projectId: "login-web-a5e50",
    storageBucket: "login-web-a5e50.appspot.com",
    messagingSenderId: "871605275131",
    appId: "1:871605275131:web:42d95a99a009cc765e235e",
    measurementId: "G-GE0FC8XQFN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", function () {
    // ดึงค่า email จาก localStorage
    const submittedEmail = localStorage.getItem("submittedEmail");

    // ถ้ามีค่า email ใน localStorage
    if (submittedEmail) {
        // ใส่ค่า email ใน input
        document.getElementById("emailInput").value = submittedEmail;

        // ลบค่า email ออกจาก localStorage (optional)
        localStorage.removeItem("submittedEmail");
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById("registerForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault()
            const email = form.emailInput.value
            const password = form.passwordInput.value
            createUserWithEmailAndPassword(auth, email, password)
                .then((result) => {
                    alert("Register Complete")
                    window.location.href = 'index.html';
                }).catch((error) => {
                    alert(error.message)
                })
        })
    }
});



