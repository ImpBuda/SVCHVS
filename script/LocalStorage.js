function setLocalStorage() {
    localStorage.setItem('lang', currentLang.getAttribute("class"));
    localStorage.setItem('theme', theme.getAttribute("value"))
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    if(localStorage.getItem('lang') && localStorage.getItem('theme')) {
        const lang = localStorage.getItem('lang');
        const theme = localStorage.getItem('theme')
        getTranslate(lang);
        getTheme(theme)
    }
}
window.addEventListener('load', getLocalStorage)