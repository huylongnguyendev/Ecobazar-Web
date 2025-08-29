import HeaderBot from "./HeaderBot.js"
import HeaderMain from "./HeaderMain.js"
import HeaderTop from "./HeaderTop.js"

const Header = () => {

    const elements = [HeaderTop(), HeaderMain(), HeaderBot()]
    const header = document.createElement("header")
    header.className = "header w-full"
    elements.map(element => {
        header.appendChild(element)
    })
    
    return header
}

export default Header