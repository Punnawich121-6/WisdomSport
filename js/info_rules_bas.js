import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';


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
const db = getFirestore(app);

const info1 = document.getElementById("tab-1")
const info2 = document.getElementById("tab-2")
const info3 = document.getElementById("tab-3")

async function getBasketball(db) {
    const basCol = collection(db, "Basketballrules")
    const basSnapshot = await getDocs(basCol, "rules")
    return basSnapshot
}

let rules = [];

function showData(bas) {
    const rulesDoc = bas.data().video;
    const nbaButton = document.getElementById("nbaButton");
    const fibaButton = document.getElementById("fibaButton");
    const three_x_three_Button = document.getElementById("3x3Button");

    rules.push(rulesDoc);
    info1.innerHTML = rules[2];
    nbaButton.addEventListener("click", function () {
        info1.innerHTML = rules[2];
    });

    fibaButton.addEventListener("click", function () {
        info2.innerHTML = rules[1];
    });

    three_x_three_Button.addEventListener("click", function () {
        info3.innerHTML = rules[0];
    });
}
//ดึงข้อมูล Docs  shoes เก็บไว้ในตัวแปร data
const data = await getBasketball(db);
data.docs.forEach(bas => {
    showData(bas);
});