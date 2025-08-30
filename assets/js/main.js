const main = document.getElementById('main-content');

//set active page
async function setActive(type, profileData) {

    const nav = document.getElementById(`nav-${type}`);
    const navItems = nav.children;
    let activeItem = nav.querySelector(`.active-${type}`);

    Array.from(navItems).forEach((item) => {
        item.addEventListener('click', () => {
            activeItem.classList.remove(`active-${type}`)
            item.classList.add(`active-${type}`)
            activeItem = item
            activePage = item.children.item(0).href.split('#')[1]
            console.log(activePage)
            main.innerHTML = showActualPage(activePage, profileData)
        })        
    })    
}

function showActualPage(page, profileData) {
    let functionToCall = ''
    switch (page) {
        case 'home':
            functionToCall = showHome(profileData)
            break;

        case 'skills':
            functionToCall = showSkills(profileData)
            break;

        case 'projects':
            functionToCall = showProjects(profileData)
            break;

        case 'about':
            functionToCall = showAbout(profileData)
            break;

        case 'contact':
            functionToCall = showContact(profileData)
            break;
    
        default:
            break;
    }

    return functionToCall
}

function showHome(profileData) {
    return `<section id="home" class="container"> <!--HOME-->

            <h1>Olá! Me chamo ${profileData.nome}.</h1>
            <h2>${profileData.titulo}</h2>
            <p>${profileData.localidade}, ${profileData.cargo}.</p>


            <div class="icons-social"> <!--Icones redes sociais -->
                <a href="https://github.com/tanizmoura"><i class="bi bi-github"></i></a>
                <a href="https://www.linkedin.com/in/tanise-moura/"><i class="bi bi-linkedin"></i></a>
                <a href="https://wa.me/+5551985200476"><i class="bi bi-whatsapp"></i></a>
            </div>
        </section> `
}

function showSkills(profileData) {
    return `<section> <!--SKILLS-->
            <div id="skills">
                <div class="container">
                    <div class="title"> <!--Título-->
                        <h2>Habilidades</h2>
                    </div>

                    <div class="icons-skills"> <!--Icones Skills-->
                        <figure>
                            <img src="assets/img/HTML5.png" alt="Icone HTML5">
                        </figure>

                        <figure>
                            <img src="assets/img/css_icon.png" alt="Icone CSS3">
                        </figure>

                        <figure>
                            <img src="assets/img/java-scripticon.png" alt="Icone JavaScript">
                        </figure>
                    </div>
                </div>
            </div>
        </section>`
}

function showProjects(profileData) {
    return `<section id="projects" class="container"> <!--PROJECTS-->
            <div class="section-project-title">
                <div class="title"> <!--Título-->
                    <h2>Projetos</h2>
                </div>
            </div>

            <div class="card-project"> <!--Card Projeto-->
                <figure class="img-project"> <!--Imagem do Projeto-->
                    <img src="assets/img/projects/project01.png" alt="Imagem do projeto">
                </figure>

                <h3>Projeto Nikel</h3><!--Título do Projeto-->

                <p>Projeto criado durante o curso Codaí 2.0 - Frontend da <a href="https://growdev.com.br/">Growdev</a>.
                </p><!--Descrição do projeto-->

                <div class="icons-skills"> <!--Icones Skills-->
                    <figure>
                        <img src="assets/img/HTML5.png" alt="Icone HTML5">
                    </figure>

                    <figure>
                        <img src="assets/img/css_icon.png" alt="Icone CSS3">
                    </figure>

                    <figure>
                        <img src="assets/img/java-scripticon.png" alt="Icone JavaScript">
                    </figure>
                </div>

                <div class="buttons-project"> <!--Botões projeto-->
                    <a href="https://tanizmoura.github.io/Projeto-Nikel/index.html">
                        <button type="button" class="btn">Prévia</button>
                    </a>
                    <a href="https://github.com/tanizmoura/Projeto-Nikel">
                        <button type="button" class="btn-line">Repositório</button>
                    </a>
                </div>
            </div>
            <div class="button-more-projects">
                <a href="https://github.com/tanizmoura?tab=repositories">
                    <button class="btn-black" type="button">Ver todos os Projetos</button>
                </a>
            </div>
            </section>`
}

function showAbout(profileData) {
    return `<section id="about">
            <div class="container">
                <figure>
                    <img src="assets/img/sobremim_img.jpeg" alt="Imagem da desenvolvedora">
                </figure>

                <div class="title">
                    <h2>Sobre mim</h2>
                </div>

                <div class="text">
                    <p>Nascida e criada na cidade de Porto Alegre - RS, tenho 30 anos e sempre tive um certo facínio
                        pela tecnologia. Fiz vários cursos online, porém nunca consegui focar de fato então acabei
                        perdendo a prática do que aprendi. Agora estou recomeçando através de bootcamps, já consigo
                        fazer sites responsíveis usando flexbox, bootstrap e atualmente estou aprendendo javascript.</p>
                </div>

            </div>
        </section>`
}

function showContact(profileData) {
    return `<section id="contact" class="container">
            <div class="title">
                <h2>Contate-me</h2>
            </div>

            <div class="text">
                <p>Estou disponível para novos serviços e conexões. Contate-me via email ou whatsapp.</p>
            </div>

            <div class="icons-social"> <!--Icones redes sociais -->
                <a href="https://github.com/tanizmoura"><i class="bi bi-github"></i></a>
                <a href="https://www.linkedin.com/in/tanise-moura/"><i class="bi bi-linkedin"></i></a>
                <a href="https://wa.me/+5551985200476"><i class="bi bi-whatsapp"></i></a>
            </div>

            <div class="btn-line">
                <a href="mailto:tanizmoura@gmail.com">tanizmoura@gmail.com</a>
            </div>
        </section>`
}

(async () => {
    const profileData = await fetchProfileData()
    const profile = await createProfile()
    console.log(profileData)
    console.log(profile)
    main.innerHTML = showActualPage('home', profileData)
    await setActive('mobile', profileData)
    await setActive('lg', profileData)
    
})()





