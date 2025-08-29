const HeaderTop = () => {
    const headerTop = document.createElement("div")
    headerTop.className = "header-top"
    headerTop.innerHTML = `
        <div class = "header-top--left">
            <p class = "text-xs capitalize">
                <i class = "ri-map-pin-line"></i> Store Location: Lincoln- 344, Illinois, Chicago, USA
            </p>
        </div>
        <div class = "header-top--right">
            <div></div>
            <div class = "auth-login">
                <a class = "btn btn-ghost">Sign in</a>
                <span>/</span>
                <a class = "btn btn-ghost">Sign up</a>
            </div>
        </div>
    `

    return headerTop
}

export default HeaderTop