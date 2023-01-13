let text = document.querySelectorAll(".lang");
const currentLang = document.querySelectorAll(".USA")[0]

const flags = document.querySelectorAll(".switch")

flags.forEach(el => {
    el.addEventListener('click', e => getTranslate(e.currentTarget.firstElementChild.getAttribute("class")))
})

function SwapLanguage(target){
    let tempClass = target.getAttribute("class")
    target.setAttribute("class", currentLang.getAttribute("class"))
    currentLang.setAttribute("class", tempClass)
}

function getTranslate(lang){

    SwapLanguage(document.querySelectorAll('.' + lang)[0])

    text.forEach(el =>{
        let key = el.getAttribute("key")
        el.innerText = language[lang][key]
    })
}



const language = {
    "USA": {
        "Home": "Home",
        "About": "About",
        "Pages": "Pages",
        "Donate": "Donate now",
        "Giving": "Giving help to those who need it",
        "Charity": "About our charity",
        "Human": "Human impacted",
        "Coll": "Collaborators",
        "Donations": "Donations",
        "Assisted": "Assisted communities",
        "support": "We are here to support vulnerable communities",
        "Results": "OUR RESULTS",
        "impact": "Take a look at the big impact we have done",
        "Litters": "Liters of water",
        "Houses": "Houses built",
        "Toys": "Toys delivered",
        "Schools": "Schools built",
        "video": "Take a look at our video",
        "vulnerable": "We have helped over 200 vulnerable communities worldwide",
        "charity": "About our charity",
        "goal": "The goal and mission behind",
        "HowOur": "How our charity got started",
        "HowHelp": "HOW WE HELP",
        "What are": "What are we doing to assist these communities?",
        "1": "House & shelter",
        "2": "Love & support",
        "3": "Food & groceries",
        "4": "Environmental help",
        "5": "Education",
        "6": "Health & insurance",
        "Menu": "Menu",
        "Blog": "Blog",
        "post": "Blog post",
        "Donat": "Donate",
        "DonateSing": "Donate Single",
        "Contact": "Contact",
        "Utility": "Utility Pages",
        "Start": "Start here",
        "Style": "Styleguide",
        "Password": "Password Protected",
        "404": "404 Not found",
        "Lic": "Licenses",
        "change": "Changelog",
        "Join": "Join us and let’s make a better world, today",
        "moreWays": "More ways to help"
    },
    "RU":{
        "Home":"Дом",
        "About":"О нас",
        "Pages":"Страницы",
        "Donate":"Пожертвуй сейчас",
        "Giving":"Оказание помощи нуждающимся",
        "Charity":"О нашей благотворительности",
        "Human":"Воздействие на человека",
        "Coll":"соучастники",
        "Donations":"Пожертвования",
        "Assisted":"Сообщества помощи",
        "support":"Мы здесь для поддержки уязвимых сообществ",
        "Results":"НАШИ РЕЗУЛЬТАТЫ",
        "impact":"Взгляните на то большое влияние, которое мы оказали",
        "Litters":"Литры воды",
        "Houses":"Построенные дома",
        "Toys":"Доставленные игрушки",
        "Schools":"Построенные школы",
        "video":"Взгляните на наше видео",
        "vulnerable":"Мы помогли более чем 200 уязвимым сообществам по всему миру",
        "goal":"Предстоящие цели и миссии",
        "HowOur":"Как началась наша благотворительность",
        "HowHelp":"КАК МЫ ПОМОГАЕМ",
        "What are":"Чем мы собираемся помочь этим сообществам?",
        "1":"Дом и укрытие",
        "2":"Любовь и поддержка",
        "3":"Продукты питания и бакалейные товары",
        "4":"Экологическая помощь",
        "5":"Образование",
        "6":"Здравоохранение и страхование",
        "Menu":"Меню",
        "Blog":"Блог",
        "post":"Блог посты",
        "Donat":"Пожертвование",
        "DonateSing":"Пожертвование одному",
        "Contact":"Контакт",
        "Utility":"Служебные страницы",
        "Start":"Начните здесь",
        "Style":"Руководство по стилю",
        "Password":"Защищенный паролем",
        "404":"404 Не найдено",
        "Lic":"Лицензии",
        "change":"Журнал изменений",
        "Join":"Присоединяйтесь к нам, и давайте сделаем мир лучше уже сегодня",
        "moreWays":"Больше способов помочь"
    }
}