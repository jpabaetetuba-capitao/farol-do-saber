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

function nomeEhGenericoFirebaseFarol(nome){

    const normalizado = String(nome || "")
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

    return (
        !normalizado ||
        normalizado === "aluno" ||
        normalizado === "visitante" ||
        normalizado === "estudante" ||
        normalizado === "usuario" ||
        normalizado === "undefined" ||
        normalizado === "null"
    );

}

function primeiroNomeFirebaseFarol(nome){

    return String(nome || "")
        .trim()
        .split(/\s+/)[0] || "";

}

function escolherNomeFirebaseFarol(dados, user){

    const info = dados || {};
    const email = (user && user.email ? user.email : "").toLowerCase();

    const candidatosNomeCompleto = [
        info.nomeCompleto,
        localStorage.getItem("usuarioNomeCompleto"),
        info.nome,
        user && user.displayName ? user.displayName : ""
    ];

    let nomeCompleto = "";

    for(const candidato of candidatosNomeCompleto){
        const nome = String(candidato || "").trim();
        if(!nomeEhGenericoFirebaseFarol(nome)){
            nomeCompleto = nome;
            break;
        }
    }

    if(
        !nomeCompleto &&
        (email === "jp@gmail.com" || email === "farolsosaber@gmail.com")
    ){
        nomeCompleto = "João Paulo Ferreira da Silva";
    }

    let primeiroNome = primeiroNomeFirebaseFarol(nomeCompleto);

    if(nomeEhGenericoFirebaseFarol(primeiroNome)){
        primeiroNome = primeiroNomeFirebaseFarol(
            localStorage.getItem("usuarioForum") || info.nome || ""
        );
    }

    if(nomeEhGenericoFirebaseFarol(primeiroNome)){
        primeiroNome = email.split("@")[0] || "Aluno";
    }

    if(nomeEhGenericoFirebaseFarol(primeiroNome)){
        primeiroNome = "Aluno";
    }

    return {
        primeiroNome: primeiroNome,
        nomeCompleto: nomeCompleto || primeiroNome
    };

}


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

const nomeUsuarioFarol =
    escolherNomeFirebaseFarol(dados, user);

const nomeCompleto =
    nomeUsuarioFarol.nomeCompleto;

const primeiroNome =
    nomeUsuarioFarol.primeiroNome;

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

await db.collection("usuarios")
    .doc(user.uid)
    .set({
        nome: primeiroNome,
        nomeCompleto: nomeCompleto
    }, { merge: true });

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