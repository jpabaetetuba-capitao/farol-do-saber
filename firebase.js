const firebaseConfig = {

  apiKey: "AIzaSyBvgEA-hHHNiC3npzL8JnnYTogyn6zg3Fs",

  authDomain: "farol-do-saber.firebaseapp.com",

  projectId: "farol-do-saber",

  storageBucket: "farol-do-saber.firebasestorage.app",

  messagingSenderId: "24326073020",

  appId: "1:24326073020:web:90507b1ca34b6c91e53eb9"

};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = firebase.firestore();

auth.onAuthStateChanged((user) => {

    if(user){

        document.getElementById("login")
            .style.display = "none";

        mostrarTela("inicio");

    }

});
