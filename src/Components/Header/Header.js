import HeaderBot from "./HeaderBot.js"
import HeaderMain from "./HeaderMain.js"
import HeaderTop from "./HeaderTop.js"

const Header = () => {
    const headerTop = HeaderTop(), headerMain = HeaderMain(), headerBot = HeaderBot()
    const searchBtn = headerMain.querySelector("#search-btn")
    
    const elements = [headerTop, headerMain, headerBot]
    const header = document.createElement("header")
    header.className = "header w-full"
    elements.map(element => {
        header.appendChild(element)
    })

    searchBtn.addEventListener("click", () => {
        headerBot.classList.toggle("show")
    })
    
    return header
}

export default Header