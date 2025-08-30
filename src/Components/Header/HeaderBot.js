import Search from "./SearchForm/Search.js"

const HeaderBot = () => {
    const searchForm = Search()
    const div = document.createElement("div")
    div.className = "header-bot w-full"
    div.appendChild(searchForm)

    return div
}

export default HeaderBot