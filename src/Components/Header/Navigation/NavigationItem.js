
const NavigationItem = () => {
    
    const removeNav = () => {
        navList.classList.remove("show")
    }

    
    const pages = ["home", "shop", "blog", "about us", "contact us"]

    const closeBtn = document.createElement("i")
    closeBtn.className = "ri-close-line btn btn-icon rounded"
    closeBtn.addEventListener("click", removeNav)

    const navList = document.createElement("ul")
    navList.className = "nav-list"
    navList.appendChild(closeBtn)

    pages.map(page => {
        const li = document.createElement("li")
        li.className = "nav-list--item"
        li.innerHTML = `<a class = "nav-item--link" href="#">${page}</a>`
        li.addEventListener("click", removeNav)
        navList.appendChild(li)
    })

    return navList
}

export default NavigationItem