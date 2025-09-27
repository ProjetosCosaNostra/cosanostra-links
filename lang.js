const translations = {
  pt: {
    title: "Cosa Nostra AI Syndicate",
    subtitle: "Criatividade, Automação e Estratégia no estilo Cosa Nostra.",
    "btn-access": "🌐 Acessar Nossas Redes"
  },
  en: {
    title: "Cosa Nostra AI Syndicate",
    subtitle: "Creativity, Automation and Strategy in the Cosa Nostra style.",
    "btn-access": "🌐 Access Our Networks"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    el.textContent = translations[lang][key];
  });
}
