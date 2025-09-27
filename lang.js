// lang.js - Controle de idiomas (PT ↔ EN)

function setLanguage(lang) {
    document.documentElement.setAttribute("lang", lang);

    // Seleciona todos os elementos que possuem atributos de tradução
    document.querySelectorAll("[data-lang-pt], [data-lang-en]").forEach((el) => {
        const text = el.getAttribute(`data-lang-${lang}`);
        if (text) {
            if (el.tagName.toLowerCase() === "input" || el.tagName.toLowerCase() === "textarea") {
                el.placeholder = text;
            } else {
                el.innerText = text;
            }
        }
    });

    // Salva a preferência no navegador
    localStorage.setItem("language", lang);
}

function toggleLanguage() {
    const current = document.documentElement.getAttribute("lang") || "pt";
    setLanguage(current === "pt" ? "en" : "pt");
}

// Ao carregar a página, aplica o idioma salvo
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("language") || "pt";
    setLanguage(savedLang);

    // Adiciona evento ao botão de troca (se existir)
    const langBtn = document.getElementById("lang-toggle");
    if (langBtn) {
        langBtn.addEventListener("click", toggleLanguage);
    }
});
