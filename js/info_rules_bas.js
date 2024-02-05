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

const info = document.getElementById("rules")

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

    rules.push(rulesDoc);
    info.innerHTML = rules[1];
    nbaButton.addEventListener("click", function () {
        info.innerHTML = rules[1];
    });

    fibaButton.addEventListener("click", function () {
        info.innerHTML = rules[0];
    });
}
//ดึงข้อมูล Docs  shoes เก็บไว้ในตัวแปร data
const data = await getBasketball(db);
data.docs.forEach(bas => {
    showData(bas);
});