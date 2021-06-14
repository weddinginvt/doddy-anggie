

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
firebase.analytics();

getData();
lodingStatus('off');

const btnUcapan = document.getElementById('btnUcapan');
btnUcapan.addEventListener("click", function () {
    addData();
});
function getData() {
    const dbRef = firebase.database().ref();
    const usersRef = dbRef.child('users').orderByChild("timestamp");

    const userListUI = document.getElementById("list-chat");
    const loadChat = document.getElementById("loadChat");
    usersRef.on("child_added", snap => {
        loadChat.classList.add('d-none');
        let user = snap.val();

        if (snap.numChildren() > 0) {
            userListUI.innerHTML += `
        <li class="chat-inverted">
            <div class="chat-badge"><i class="fas fa-user"></i></div>
            <div class="chat-panel">
                <div class="chat-heading">
                    <h6 class="chat-title text-body text-start fw-bolder">
                        <p child-key="${snap.key}" class="d-none"></p>
                        ${user.name}
                    </h6>
                </div>
                <div class="chat-body">
                    <p class="text-body text-start">
                    ${user.message}
                    </p>
                </div>
            </div>
        </li>
    `;
        } else {
            userListUI.innerHTML =
                `
        <div class="alert alert-secondary text-body" role="alert">
            Belum ada ucapan
        </div>
        `;
        }

    });
}

function addData() {
    const dbRef = firebase.database().ref();
    const usersRef = dbRef.child('users');
    const name = document.getElementById('nameChat');
    const message = document.getElementById('messageChat');
    let timestamp = new Date().getTime();

    lodingStatus('on');

    if (name.value == '') {
        alert('Isikan dulu nama!');
        lodingStatus('off');
    } else if (message.value == '') {
        alert('Isikan dulu ucapan!');
        lodingStatus('off');
    } else {

        let newUsers = {
            "name": name.value,
            "message": message.value,
            "timestamp": timestamp
        }

        usersRef.push(newUsers, function () {
            lodingStatus('off');
            chatClear();
        });


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
