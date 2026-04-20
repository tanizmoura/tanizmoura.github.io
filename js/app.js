import { views } from "./views.js";

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  // Definir as rotas e suas respectivas views
  const routes = {
    "/": views.home,
    "/habilidades": views.habilidades,
    "/sobre-mim": views.sobre,
    "/projetos": views.projetos,
    "/contato": views.contato,
  };

  // Obter o caminho atual e renderizar a view correspondente
  const path = window.location.pathname;
  const render = routes[path] || (() => `<h1>404 - Página Não Encontrada</h1>`);
  const app = document.getElementById("app");
  // 1. Remove a classe de animação (reseta o estado)
  app.classList.remove("active");
  app.classList.add("fade-in");

  app.innerHTML = await render();

  const botoes = document.querySelectorAll(".buttons-project a");
  botoes.forEach((botao) => {
    botao.addEventListener("mouseover", () => {
      gsap.to(botao, {
        duration: 1,
        backgroundColor: "var(--details)",
        color: "var(--primary)",
        border: "1px solid var(--primary)",
        fontWeight: "bold",
      });
    });
    botao.addEventListener("mouseout", () => {
      gsap.to(botao, {
        duration: 0.5,
        backgroundColor: "var(--secundary)",
        color: "var(--btn-txt)",
        border: "none",
        fontWeight: "normal",
      });
    });
  });

  const iconSocial = document.querySelectorAll(".social-medias a img");
  iconSocial.forEach((icon) => {
    icon.addEventListener("mouseover", () => {
      gsap.to(icon, {
        duration: 0.5,
        scale: 1.2,
        filter: "drop-shadow(0px 0px 5px var(--secundary))",
      });
    });
    icon.addEventListener("mouseout", () => {
      gsap.to(icon, {
        duration: 0.5,
        scale: 1,
        filter: "none",
      });
    });
  });

  setTimeout(() => {
    app.classList.add("active");
  }, 50);

  let section = document.querySelector("section");
  let tittle = document.querySelector(".tittle");

  const navLinks = document.querySelectorAll("[data-link]");
  navLinks.forEach((link) => {
    link.classList.remove("active-link");
    if (link.getAttribute("href") === path) {
      link.classList.add("active-link");
    }
  });

  switch (path) {
    case "/":
      section.setAttribute("id", "home");
      break;
    case "/habilidades":
      tittle.textContent = "C:\\TANISE\\portfolio\\habilidades";
      section.setAttribute("id", "habilidades");
      break;
    case "/sobre-mim":
      tittle.textContent = "C:\\TANISE\\portfolio\\sobre-mim";
      section.setAttribute("id", "sobre-mim");
      break;
    case "/projetos":
      tittle.textContent = "C:\\TANISE\\portfolio\\projetos";
      section.setAttribute("id", "projetos");
      break;
    case "/contato":
      tittle.textContent = "C:\\TANISE\\portfolio\\contato";
      section.setAttribute("id", "contato");
      break;

    default:
      break;
  }
};

// 1. Intercepta cliques nos links
document.body.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    navigateTo(e.target.href);
  }
});

// 2. Lida com os botões "Voltar/Avançar" do navegador
window.addEventListener("popstate", router);

// 3. Carrega a rota inicial ao abrir o site
document.addEventListener("DOMContentLoaded", router);

const darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
const body = document.querySelector("body");
const icon = document.querySelector(".btn-toogle img");
const atualTheme = localStorage.getItem("theme");

// Função para alternar o tema
function toggleTheme(theme) {
  if (theme === "dark") {
    body.classList.add("dark");
    body.style.backgroundImage = "url('../assets/img/bg-dark.webp')";
    icon.src = "../assets/img/sun-icon.svg";
  } else {
    body.classList.add("light");
    body.style.backgroundImage = "url('../assets/img/bg.webp')";
    icon.src = "../assets/img/moon-icon.svg";
  }
}

// Função para alternar o tema ao clicar no botão
function switchTheme() {
  let toogleButton = document.querySelector(".btn-toogle");
  toogleButton.addEventListener("click", () => {
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      toggleTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      body.classList.remove("light");
      toggleTheme("dark");
      localStorage.setItem("theme", "dark");
    }
    icon.animate(
      [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
      {
        duration: 500,
        easing: "ease-in-out",
      },
    );
  });
}

// Verificar o tema preferido do usuário e aplicar o tema correspondente
switchTheme();
toggleTheme(darkTheme ? "dark" : "light");
toggleTheme(atualTheme);

// Verificar o tema salvo no localStorage e aplicar o tema correspondente
window.onload = () => {
  if (atualTheme !== null) {
    toggleTheme(atualTheme);
  } else {
    localStorage.setItem("theme", darkTheme ? "dark" : "light");
  }
};
