const toggleTheme = document.getElementById('toggleTheme');
const toggleTheme2 = document.getElementById('toggleTheme2');
const rootHtml = document.documentElement;

function changeTheme(){
    const currentTheme = rootHtml.getAttribute('data-theme');

    currentTheme === 'dark'? rootHtml.setAttribute('data-theme', 'light') : rootHtml.setAttribute('data-theme', 'dark');

    toggleTheme.classList.toggle("bi-moon-stars");
    toggleTheme.classList.toggle("bi-sun");

    toggleTheme2.classList.toggle("bi-moon-stars");
    toggleTheme2.classList.toggle("bi-sun");
}

toggleTheme.addEventListener("click", changeTheme);
toggleTheme2.addEventListener("click", changeTheme);