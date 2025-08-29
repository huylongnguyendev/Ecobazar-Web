class createApp {
    constructor(root, style) {
        this.root = root
        this.style = style
    }

    render(element) {
        this.root.appendChild(element)

            const styleRender = document.createElement("link")
            styleRender.rel = "stylesheet"
            styleRender.href = `../src/${this.style}`
            document.head.appendChild(styleRender)
        
    }
}

export default createApp