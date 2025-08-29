import Navigation from "./Navigation/Navigation.js"

const HeaderMain = () => {
    const headerMain = document.createElement("div")
    headerMain.className = "header-main w-full"
    headerMain.appendChild(Navigation())
    return headerMain
}

export default HeaderMain