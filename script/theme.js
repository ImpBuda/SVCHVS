const sections = document.querySelectorAll(".theme")
let theme = document.querySelectorAll(".Title3")[0]

theme.addEventListener("click", e => SwitchTheme(e.currentTarget))

function getTheme(themeName){
    if(themeName === "dark") {
        sections.forEach(el => {
            el.classList.add("dark-theme")
        })
        theme.setAttribute("value", "dark")
        theme.style.color = "#000"
    }
    else {
        sections.forEach(el => {
            el.classList.remove("dark-theme")
        })
        theme.setAttribute("value", "light")
        theme.style.color = "#fff"
    }
}



function SwitchTheme(target){
    if(target.getAttribute("value") !== "dark") {
        sections.forEach(el => {
            el.classList.add("dark-theme")
        })
        target.setAttribute("value", "dark")
        target.style.color = "#000"
    }
    else {
        sections.forEach(el => {
            el.classList.remove("dark-theme")
        })
        target.setAttribute("value", "light")
        target.style.color = "#fff"
    }
}