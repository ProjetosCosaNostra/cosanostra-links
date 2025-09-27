function setLang(lang) {
  document.querySelectorAll("[data-pt]").forEach(el => {
    el.innerHTML = el.getAttribute(`data-${lang}`);
  });
}
