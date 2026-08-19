(function(){
  "use strict";

  let eventoInstalacaoPendente = null;
  let registroServiceWorker = null;

  function criarAvisoPWA(id, html, classeExtra){
    let aviso = document.getElementById(id);

    if(!aviso){
      aviso = document.createElement("div");
      aviso.id = id;
      aviso.className = "aviso-pwa-farol " + (classeExtra || "");
      aviso.setAttribute("role", "status");
      aviso.setAttribute("aria-live", "polite");
      document.body.appendChild(aviso);
    }

    aviso.innerHTML = html;
    aviso.classList.add("visivel");
    return aviso;
  }

  function esconderAvisoPWA(id){
    const aviso = document.getElementById(id);
    if(aviso){
      aviso.classList.remove("visivel");
    }
  }

  function estaInstalado(){
    return window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true;
  }

  window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    eventoInstalacaoPendente = event;

    if(estaInstalado()){
      return;
    }

    const aviso = criarAvisoPWA(
      "avisoInstalarFarol",
      `
        <div>
          <strong>📲 Instalar Farol do Saber</strong>
          <small>Abra pelo ícone, em tela cheia, como aplicativo.</small>
        </div>
        <div class="acoes-aviso-pwa">
          <button type="button" id="btnInstalarFarolPWA">Instalar</button>
          <button type="button" class="secundario" id="btnFecharInstalacaoFarol">Agora não</button>
        </div>
      `,
      "instalacao"
    );

    aviso.querySelector("#btnInstalarFarolPWA")?.addEventListener("click", async () => {
      if(!eventoInstalacaoPendente){
        return;
      }

      eventoInstalacaoPendente.prompt();
      await eventoInstalacaoPendente.userChoice;
      eventoInstalacaoPendente = null;
      esconderAvisoPWA("avisoInstalarFarol");
    });

    aviso.querySelector("#btnFecharInstalacaoFarol")?.addEventListener("click", () => {
      esconderAvisoPWA("avisoInstalarFarol");
    });
  });

  window.addEventListener("appinstalled", () => {
    eventoInstalacaoPendente = null;
    esconderAvisoPWA("avisoInstalarFarol");

    if(typeof window.mostrarToast === "function"){
      window.mostrarToast("Farol do Saber instalado com sucesso.");
    }
  });

  const TELAS_PROTEGIDAS_ATUALIZACAO = new Set([
    "questoes",
    "simulados",
    "duelos",
    "jogosFarol",
    "erros",
    "suporteFarol",
    "vidaABordoTaifeiro"
  ]);

  let atualizacaoPendente = false;
  let atualizacaoAutorizada = false;

  function telaAtivaFarol(){
    return document.querySelector(".tela.ativa")?.id || "inicio";
  }

  function atividadeEmAndamento(){
    return TELAS_PROTEGIDAS_ATUALIZACAO.has(telaAtivaFarol());
  }

  function mostrarAtualizacaoAguardando(){
    criarAvisoPWA(
      "avisoAtualizarFarol",
      `
        <div>
          <strong>✨ Nova versão disponível</strong>
          <small>A atualização será aplicada quando você voltar ao Início. Sua atividade não será interrompida.</small>
        </div>
      `,
      "atualizacao"
    );
  }

  function ativarAtualizacaoQuandoSeguro(registro){
    if(!registro?.waiting){
      return false;
    }

    if(atividadeEmAndamento()){
      atualizacaoPendente = true;
      mostrarAtualizacaoAguardando();
      return false;
    }

    atualizacaoPendente = false;
    atualizacaoAutorizada = true;

    criarAvisoPWA(
      "avisoAtualizarFarol",
      `
        <div>
          <strong>✨ Atualizando o Farol</strong>
          <small>A nova versão está sendo aplicada.</small>
        </div>
      `,
      "atualizacao"
    );

    registro.waiting.postMessage({ type: "SKIP_WAITING" });
    return true;
  }

  function aplicarAtualizacaoAutomaticamente(registro){
    const worker =
      registro.waiting ||
      registro.installing;

    if(registro.waiting){
      ativarAtualizacaoQuandoSeguro(registro);
      return;
    }

    if(worker){
      worker.addEventListener("statechange", () => {
        if(worker.state === "installed" && registro.waiting){
          ativarAtualizacaoQuandoSeguro(registro);
        }
      });
    }
  }

  async function registrarPWA(){
    if(!("serviceWorker" in navigator)){
      return;
    }

    try{
      registroServiceWorker = await navigator.serviceWorker.register(
        "./service-worker.js",
        { scope: "./", updateViaCache: "none" }
      );

      if(registroServiceWorker.waiting){
        aplicarAtualizacaoAutomaticamente(registroServiceWorker);
      }

      registroServiceWorker.addEventListener("updatefound", () => {
        const novoWorker = registroServiceWorker.installing;

        if(!novoWorker){
          return;
        }

        novoWorker.addEventListener("statechange", () => {
          if(
            novoWorker.state === "installed" &&
            navigator.serviceWorker.controller
          ){
            aplicarAtualizacaoAutomaticamente(registroServiceWorker);
          }
        });
      });

      // Verifica atualização ao abrir e quando o app volta ao primeiro plano.
      registroServiceWorker.update();

      document.addEventListener("visibilitychange", () => {
        if(document.visibilityState === "visible"){
          registroServiceWorker.update();
        }
      });

      window.addEventListener("online", async () => {
        try{
          await registroServiceWorker.update();

          if(registroServiceWorker.waiting){
            aplicarAtualizacaoAutomaticamente(registroServiceWorker);
          }
        }catch(erro){
          console.warn("Não foi possível verificar atualização ao reconectar:", erro);
        }
      });
    }catch(erro){
      console.warn("Não foi possível registrar o PWA do Farol:", erro);
    }
  }

  window.addEventListener("farol:tela-alterada", event => {
    const tela = event.detail?.tela || telaAtivaFarol();

    if(
      tela === "inicio" &&
      atualizacaoPendente &&
      registroServiceWorker?.waiting
    ){
      ativarAtualizacaoQuandoSeguro(registroServiceWorker);
    }
  });

  let recarregando = false;

  navigator.serviceWorker?.addEventListener("controllerchange", () => {
    if(recarregando || !atualizacaoAutorizada){
      return;
    }

    recarregando = true;
    window.location.reload();
  });

  function esconderSplashFarol(){
    const splash = document.getElementById("splashFarolPWA");

    if(!splash){
      return;
    }

    const tempoMinimo = 900;
    const inicio = Number(splash.dataset.inicio || Date.now());
    const restante = Math.max(0, tempoMinimo - (Date.now() - inicio));

    setTimeout(() => {
      splash.classList.add("oculta");

      setTimeout(() => {
        splash.remove();
      }, 450);
    }, restante);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const splash = document.getElementById("splashFarolPWA");
    if(splash){
      splash.dataset.inicio = String(Date.now());
    }
  });

  window.addEventListener("load", () => {
    registrarPWA();
    esconderSplashFarol();
  });

  setTimeout(esconderSplashFarol, 3500);
})();
