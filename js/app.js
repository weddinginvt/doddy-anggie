

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyA_TYxw0Qv9YMkBOf1i1ROxQ-5dACNMD_k",
    authDomain: "wed-invitation1.firebaseapp.com",
    projectId: "wed-invitation1",
    storageBucket: "wed-invitation1.appspot.com",
    messagingSenderId: "763212573028",
    appId: "1:763212573028:web:b076f787666a620c767271",
    measurementId: "G-99WZ1RPGMP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const btnUcapan = document.getElementById('btnUcapan');
btnUcapan.addEventListener("click", async () => {
    addData();
});

window.addEventListener("DOMContentLoaded", async () => {
    getDataPesan();
    lodingStatus('off');
});

const savePesan = (nama, pesan, timestamp) =>
    db.collection('doddy-anggie').doc().set({ nama, pesan, timestamp });

async function getDataPesan() {
    const userListUI = document.getElementById("list-chat");
    const onGetPesan = (callback) => db.collection('doddy-anggie').orderBy("timestamp", "desc").onSnapshot(callback);

    onGetPesan((querySnapshot) => {
        userListUI.innerHTML = '';
        if (querySnapshot.size > 0) {
            querySnapshot.forEach(doc => {
                userListUI.innerHTML +=
                    `
                <li class="chat-inverted">
            <div class="chat-badge"><i class="fas fa-user"></i></div>
            <div class="chat-panel">
                <div class="chat-heading">
                    <h6 class="chat-title text-body text-start fw-bolder">
                        <p class="d-none"></p>
                        ${doc.data().nama}
                    </h6>
                </div>
                <div class="chat-body">
                    <p class="text-body text-start">
                    ${doc.data().pesan}
                    </p>
                </div>
            </div>
        </li>
        `;
            });
        } else {
            userListUI.innerHTML =
                `
                <div class="text-center text-body">
                    <h1 class="display-2"><i class="far fa-comments"></i></h1>
                    <p>Belum ada ucapan.</p>
                </div>
            `;
        }

    });

}

async function addData() {
    const name = document.getElementById('nameChat');
    const message = document.getElementById('messageChat');
    let timestamp = new Date().getTime();

    lodingStatus('on');

    if (name.value == '') {
        validasi('Isikan dulu nama !', 'warning');
        lodingStatus('off');
    } else if (message.value == '') {
        validasi('Isikan dulu ucapan !', 'warning');
        lodingStatus('off');
    } else {

        await savePesan(name.value, message.value, timestamp);
        getDataPesan();
        lodingStatus('off');
        chatClear();

    }

}

function lodingStatus(status) {
    const btnLoding = document.getElementById('btnLoading');
    const btnUcapan = document.getElementById('btnUcapan');

    if (status == 'on') {
        btnLoding.classList.remove('d-none');
        btnUcapan.classList.add('d-none');
    } else if (status == 'off') {
        btnLoding.classList.add('d-none');
        btnUcapan.classList.remove('d-none');
    } else {
        btnLoding.classList.add('d-none');
        btnUcapan.classList.remove('d-none');
    }

}

function chatClear() {
    let name = document.getElementById('nameChat');
    let message = document.getElementById('messageChat');

    name.value = "";
    message.value = "";
}

function validasi(pesan, type) {
    Swal.fire({
        icon: type,
        title: pesan,
        confirmButtonText: 'Oke',
        confirmButtonColor: '#5F3E24',
    })
}
