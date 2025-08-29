const Search = () => {
    const form = document.createElement("form")
    form.className = "search-form w-full round-md"
    form.innerHTML = `
        <div class="input-area text-base">
            <i class = "ri-search-line text-lg icon"></i>
            <input type="text" class="input-field w-full text-base round-md" placeholder="Search">
            <i class = "ri-close-line btn btn-close"></i>
            <input type="submit" class="btn btn-primary btn-md round-md">
        </div>
    `
    return form
}

export default Search