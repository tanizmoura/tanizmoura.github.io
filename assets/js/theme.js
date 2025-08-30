const toggleTheme = document.getElementById('toggleTheme');
const rootHtml = document.documentElement;

if(localStorage.getItem('theme')){
    rootHtml.setAttribute('data-theme', localStorage.getItem('theme'));
    
    if(localStorage.getItem('theme') === 'dark'){
        toggleTheme.classList.add("bi-sun");
        toggleTheme.classList.remove("bi-moon-stars");
    }else{
        toggleTheme.classList.add("bi-moon-stars");
        toggleTheme.classList.remove("bi-sun");
    }
}

function changeTheme(){
    const currentTheme = localStorage.getItem('theme');

    currentTheme === 'dark'? localStorage.setItem('theme', 'light') & rootHtml.setAttribute('data-theme', 'light'): localStorage.setItem('theme', 'dark') & rootHtml.setAttribute('data-theme', 'dark');

    toggleTheme.classList.toggle("bi-moon-stars");
    toggleTheme.classList.toggle("bi-sun");

    console.log(localStorage.getItem('theme'));

}


toggleTheme.addEventListener("click", changeTheme);



