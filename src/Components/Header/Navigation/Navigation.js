import NavigationItem from "./NavigationItem.js"

const Navigation = () => {
    const navItem = NavigationItem()
    const nav = document.createElement("nav")
    nav.className = "nav w-full text-base font-medium capitalize"

    const handleNav = () => {
        navItem.classList.toggle("show")
    }

    const brand = {
        name: "Ecobazar",
        img: "../../src/img/logo-full.png"
    }

    const logoLink = document.createElement("a")
    logoLink.className = "nav-logo"
    logoLink.href = "#"
    logoLink.innerHTML = `<img class = "w-full" src="${brand.img}" alt="${brand.name}"></img>`

    const iconContainer = document.createElement("div")
    iconContainer.className = "nav-btns text-lg"
    const iconNames = ["search", "shopping-bag-2", "user", "menu-4"]
    const togglePostion = iconNames.indexOf("menu-4")
    iconNames.map(name => {
        const icon = document.createElement("i")
        icon.className = `ri-${name}-line btn btn-icon rounded`
        icon.id = `${name}-btn`
        // if (name === "menu-4") icon.addEventListener("click", handleNav)
        iconContainer.appendChild(icon)
    })

    const navList = [logoLink, navItem, iconContainer]
    navList.map(item => {
        nav.appendChild(item)
    })
    console.log(togglePostion)

    const toggleBtn = iconContainer.children[togglePostion]

    toggleBtn.addEventListener("click", handleNav)

    document.addEventListener("click", (event) => {
        if (!navItem.contains(event.target) && !toggleBtn.contains(event.target))
        navItem.classList.remove("show")
    })

    return nav
}

export default Navigation