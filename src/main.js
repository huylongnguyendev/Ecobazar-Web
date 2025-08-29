import createApp from "../lib/lib.js"
import App from "./App.js"
let style = "./index.css"

new createApp(document.querySelector("#root"),style).render(App())