import Search from "./SearchForm/Search.js"

const HeaderBot = () => {
    const div = document.createElement("div")
    div.className = "header-bot w-full"
    div.appendChild(Search())
    return div
}

export default HeaderBot