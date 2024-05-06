function toggleTheme() {
    const body = document.body;
    const themeContainer = document.querySelector('.theme-container');

    if (body.classList.contains("dark-theme")) {
        body.classList.remove("dark-theme");
        themeContainer.classList.remove("dark-theme");
    } else {
        body.classList.add("dark-theme");
        themeContainer.classList.add("dark-theme");
    }
}