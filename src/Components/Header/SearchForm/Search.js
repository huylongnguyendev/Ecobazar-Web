const Search = () => {

    const form = document.createElement("form")
    form.className = "search-form w-full round-md"
    form.innerHTML = `
        <div class="input-area text-base">
            <i class = "ri-search-line text-lg icon"></i>
            <input type="text" class="input-field w-full text-base round-md" placeholder="Search" id="input">
            <i class = "ri-close-line btn btn-close" id="delete-input"></i>
            <input type="submit" class="btn btn-primary btn-md round-md" value="Search">
        </div>
    `

    const inputField = form.querySelector("#input")
    const deleteInput = form.querySelector("#delete-input")

    const handleShowBtn = (value) => {
        if (value === "")
            deleteInput.classList.remove("show")
        else
            deleteInput.classList.add("show")

    }

    inputField.addEventListener("keydown", () => {
        handleShowBtn(inputField.value)
    })
    
    deleteInput.addEventListener("click", () => {
        inputField.value = ""
        handleShowBtn(inputField.value)
    })

    return form
}

export default Search