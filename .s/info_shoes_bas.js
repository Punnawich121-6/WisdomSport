import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection,getDocs } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';


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
const db = getFirestore(app)

const info1 = document.getElementById("info1")
const info2 = document.getElementById("info2")
const info3 = document.getElementById("info3")
const info4 = document.getElementById("info4")
const info5 = document.getElementById("info5")

const name1 = document.getElementById("name1")
const name2 = document.getElementById("name2")
const name3 = document.getElementById("name3")
const name4 = document.getElementById("name4")
const name5 = document.getElementById("name5")

const review1 = document.getElementById("review1")
const review2 = document.getElementById("review2")
const review3 = document.getElementById("review3")
const review4 = document.getElementById("review4")
const review5 = document.getElementById("review5")

const pic1 = document.getElementById("pic1")
const pic2 = document.getElementById("pic2")
const pic3 = document.getElementById("pic3")
const pic4 = document.getElementById("pic4")
const pic5 = document.getElementById("pic5")

async function getBasketball(db){
    const  basCol = collection(db,"Basketballshoes")
    const  basSnapshot = await getDocs(basCol,"Shoes")
    return basSnapshot
}


let names = [];
let infos = [];
let videos =[];
let pics =[];
let infoId = [info1,info2,info3,info4,info5];
let nameId = [name1,name2,name3,name4,name5];
let reviewId = [review1,review2,review3,review4,review5];
let picId = [pic1,pic2,pic3,pic4,pic5];


function showData(bas){
    const shoes_name = bas.data().name;
    const shoes_info =  bas.data().info;
    const shoes_review = bas.data().review;
    const shoes_pic = bas.data().URL;

    names.push(shoes_name);
    infos.push(shoes_info);
    videos.push(shoes_review);
    pics.push(shoes_pic);

    for (let i = 0; i < infoId.length; i++) {
        infoId[i].innerHTML=infos[i];
    }
    for (let i = 0; i < nameId.length; i++) {
        nameId[i].innerHTML=names[i];
    }
    for (let i = 0; i < videos.length; i++) {
        reviewId[i].innerHTML=videos[i];
    }

    for (let i = 0; i < picId.length; i++) {
        picId[i].src=pics[i];
    }

    }
//ดึงข้อมูล Docs  shoes เก็บไว้ในตัวแปร data
const data = await getBasketball(db)
data.forEach(bas=>{
    showData(bas)
})