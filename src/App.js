import Header from "./Components/Header/Header.js"

const App = () => {
    const elements = [Header()]
    const div = document.createElement("div")
    div.className = "container"
    elements.map(element => {
        div.appendChild(element)
    })
    return div
}

export default App