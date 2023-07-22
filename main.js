//'Pegando' os botões do HTML

const botaoHome = document.querySelector(".nav__home");
const botaoSobre = document.querySelector(".nav__about");
const botaoContato = document.querySelector(".nav__contact");
const botaoProjeto = document.querySelector(".nav__projects");

//'Pegando' os estilos do CSS
const estiloHome = document.querySelector(".text__home");
const estiloSobre = document.querySelector(".text__sobre");
const estiloContato = document.querySelector(".text__contact");
const estiloProjetos = document.querySelector(".text__project");

//Animação para aparecer e sumir o texto do botao 'home'
botaoHome.addEventListener("mouseenter", () => {
  estiloHome.style.display = "inline";
});
botaoHome.addEventListener("mouseleave", () => {
  estiloHome.style.display = "none";
});

//Animação para aparecer e sumir o texto do botao 'sobre'
botaoSobre.addEventListener("mouseenter", () => {
  estiloSobre.style.display = "inline";
});
botaoSobre.addEventListener("mouseleave", () => {
  estiloSobre.style.display = "none";
});

//Animação para aparecer e sumir o texto do botao 'contatos'
botaoContato.addEventListener("mouseenter", () => {
  estiloContato.style.display = "inline";
});
botaoContato.addEventListener("mouseleave", () => {
  estiloContato.style.display = "none";
});

//Animação para aparecer e sumir o texto do botão 'projetos'
botaoProjeto.addEventListener("mouseenter", () => {
  estiloProjetos.style.display = "inline";
});
botaoProjeto.addEventListener("mouseleave", () => {
  estiloProjetos.style.display = "none";
});
