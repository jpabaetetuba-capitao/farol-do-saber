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

auth.onAuthStateChanged(async (user) => {

    if(user){

        document.getElementById("login")
            .style.display = "none";

        try{

            await db.collection("usuarios")
                .doc(user.uid)
                .set({

                    email: user.email || "",
                    ultimoAcesso: firebase.firestore.FieldValue.serverTimestamp(),
                    ultimaAtividade: Date.now()

                }, { merge: true });

            const doc =
                await db.collection("usuarios")
                .doc(user.uid)
                .get();

            if(doc.exists){

                const dados = doc.data();

const nomeCompleto =
    dados.nome || "";

const primeiroNome =
    nomeCompleto
    ? nomeCompleto.split(" ")[0]
    : "Aluno";

usuarioNomeCompleto = nomeCompleto;
usuarioForum = primeiroNome;

localStorage.setItem(
    "usuarioNomeCompleto",
    nomeCompleto
);

localStorage.setItem(
    "usuarioForum",
    primeiroNome
);

console.log("NOME:", nomeCompleto);

                const campoNome =
                    document.getElementById(
                        "nomeUsuario"
                    );

                if(campoNome){

campoNome.innerHTML =
    "👋 Olá, " +
    primeiroNome +
    "!";

                }

            }

        }
        catch(erro){

            console.log(erro);

        }

        
    }

});