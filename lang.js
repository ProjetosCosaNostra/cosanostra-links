// ================================
// 🌐 Sistema de Tradução Multilíngue
// ================================

// Dicionário de traduções
const translations = {
    pt: {
        // Menu
        menu_home: "Início",
        menu_links: "Links",
        menu_terms: "Termos",
        menu_privacy: "Privacidade",

        // Página inicial (index.html)
        home_title: "🧠 Bem-vindo ao Cosa Nostra AI Syndicate",
        home_subtitle: "Criatividade, Automação e Inteligência Artificial no estilo Cosa Nostra.",
        home_about: "Estamos construindo projetos que unem Humor, Estratégia Digital e Tecnologia de ponta.",

        // Página de links (links.html)
        links_title: "🌐 Nossas Redes Oficiais",
        links_subtitle: "Siga o Cosa Nostra AI Syndicate em todas as plataformas:",

        // Termos de serviço (terms.html)
        terms_title: "📜 Termos de Serviço",
        terms_intro: "Ao utilizar nossos serviços, você concorda com os termos abaixo:",
        terms_item1: "1. Respeite nossa marca e propriedade intelectual.",
        terms_item2: "2. Não utilize nossos serviços para fins ilegais.",
        terms_item3: "3. Podemos atualizar estes termos a qualquer momento.",
        terms_contact: "📩 Em caso de dúvidas, entre em contato: projetoscosanostra@gmail.com",

        // Política de Privacidade (privacy.html)
        privacy_title: "🔒 Política de Privacidade",
        privacy_intro: "Sua privacidade é importante para nós. Este documento explica como lidamos com dados:",
        privacy_item1: "1. Não coletamos dados pessoais sem consentimento.",
        privacy_item2: "2. Utilizamos cookies apenas para melhorar a experiência.",
        privacy_item3: "3. Você pode solicitar a exclusão de dados a qualquer momento.",
        privacy_contact: "📩 Dúvidas? projetoscosanostra@gmail.com",

        // Rodapé
        brand_name: "Cosa Nostra AI Syndicate",
        rights: "Todos os direitos reservados."
    },

    en: {
        // Menu
        menu_home: "Home",
        menu_links: "Links",
        menu_terms: "Terms",
        menu_privacy: "Privacy",

        // Homepage (index.html)
        home_title: "🧠 Welcome to Cosa Nostra AI Syndicate",
        home_subtitle: "Creativity, Automation, and Artificial Intelligence – Cosa Nostra style.",
        home_about: "We are building projects that combine Humor, Digital Strategy, and Cutting-Edge Technology.",

        // Links page (links.html)
        links_title: "🌐 Our Official Networks",
        links_subtitle: "Follow Cosa Nostra AI Syndicate across all platforms:",

        // Terms of Service (terms.html)
        terms_title: "📜 Terms of Service",
        terms_intro: "By using our services, you agree to the following terms:",
        terms_item1: "1. Respect our brand and intellectual property.",
        terms_item2: "2. Do not use our services for illegal purposes.",
        terms_item3: "3. We may update these terms at any time.",
        terms_contact: "📩 For questions, contact: projetoscosanostra@gmail.com",

        // Privacy Policy (privacy.html)
        privacy_title: "🔒 Privacy Policy",
        privacy_intro: "Your privacy is important to us. This document explains how we handle data:",
        privacy_item1: "1. We do not collect personal data without consent.",
        privacy_item2: "2. We only use cookies to improve user experience.",
        privacy_item3: "3. You may request data deletion at any time.",
        privacy_contact: "📩 Questions? projetoscosanostra@gmail.com",

        // Footer
        brand_name: "Cosa Nostra AI Syndicate",
        rights: "All rights reserved."
    }
};

// ================================
// Função para alternar idioma
// ================================
function setLanguage(lang) {
    if (!translations[lang]) return;

    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    localStorage.setItem("language", lang);
}

// ================================
// Aplicar idioma salvo ou padrão
// ================================
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("language") || "pt";
    setLanguage(savedLang);
});
