
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
            showActualPage(activePage, profileData)

        })
    })
}

//select and set actual page
async function showActualPage(page, profileData) {
    let functionToCall = ''
    main.innerHTML = ''
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

    main.appendChild(functionToCall)
}

//show home page
function showHome(profileData) {
    const links = profileData.links

    const section = document.createElement('section')
    section.id = 'home'
    section.classList.add('container')

    const h1 = document.createElement('h1')
    h1.innerText = `Olá! Me chamo ${profileData.nome}.`

    const h2 = document.createElement('h2')
    h2.innerText = profileData.titulo

    const p = document.createElement('p')
    p.innerText = `${profileData.localidade}, ${profileData.cargo}.`

    const divIcon = divCreator.iconSocial(links)

    section.appendChild(h1)
    section.appendChild(h2)
    section.appendChild(p)

    section.appendChild(divIcon)

    return section
}

//show skill page
function showSkills(profileData) {
    const hardSkills = profileData.skills.hardSkills
    const softSkills = profileData.skills.softSkills
    const languages = profileData.idiomas

    //criando elementos HTML
    const section = document.createElement('section')

    const divSkills = document.createElement('div')
    divSkills.id = 'skills'

    const divContainer = document.createElement('div')
    divContainer.classList.add('container')

    const divOutros = document.createElement('div')
    divOutros.appendChild(divCreator.softSkills(softSkills))
    divOutros.appendChild(divCreator.languages(languages))
    divOutros.classList.add('subSkills')

    //adicionando elementos html
    section.appendChild(divSkills)
    divSkills.appendChild(divContainer)
    divContainer.appendChild(divCreator.title('Habilidades'))
    divContainer.appendChild(divCreator.iconSkills(hardSkills))
    divContainer.appendChild(divOutros)

    return section

}

//show projects page
function showProjects(profileData) {
    const portfolio = profileData.portfolio

    const section = document.createElement('section')
    section.id = 'projects'
    section.classList.add('container')


    const divTitleProject = document.createElement('div')
    divTitleProject.classList.add('section-project-title')
    divTitleProject.appendChild(divCreator.title('Projetos'))

    section.appendChild(divTitleProject)

    divCreator.projects(portfolio, section)

    const divMoreButton = document.createElement('div')
    divMoreButton.classList.add('button-more-projects')

    const aButton = document.createElement('a')
    aButton.href = 'https://github.com/tanizmoura?tab=repositories'
    const button = document.createElement('button')
    button.classList.add('btn-black')
    button.innerText = 'Ver todos os Projetos'
    aButton.appendChild(button)

    divMoreButton.appendChild(aButton)

    section.appendChild(divMoreButton)

    return section
}

//show about page
function showAbout(profileData) {
    const educacao = profileData.educacao

    const section = document.createElement('section')
    section.id = 'about'

    const divContainer = document.createElement('div')
    const divContainerEducation = document.createElement('div')
    divContainer.classList.add('container')
    divContainerEducation.classList.add('container')

    const figure = document.createElement('figure')
    const img = document.createElement('img')
    img.src = profileData.perfilPhoto
    img.alt = 'Imagem da desenvolvedora'

    figure.appendChild(img)
    
    divContainer.appendChild(figure)
    divContainer.appendChild(divCreator.title('Sobre mim'))
    divContainer.appendChild(divCreator.text(`Nascida e criada na cidade de Porto Alegre - RS, tenho 30 anos e sempre tive um certo facínio
                        pela tecnologia. Fiz vários cursos online, porém nunca consegui focar de fato então acabei
                        perdendo a prática do que aprendi. Agora estou recomeçando através de bootcamps, já consigo
                        fazer sites responsíveis usando flexbox, bootstrap e atualmente estou aprendendo javascript.`))
    divContainerEducation.appendChild(divCreator.education(educacao))
    section.appendChild(divContainer)
    section.appendChild(divContainerEducation)


    return section
}

//show contact
function showContact(profileData) {
    const links = profileData.links

    const section = document.createElement('section')
    section.id = 'contact'
    section.classList.add('container')



    const divBtn = document.createElement('div')
    divBtn.classList.add('btn-line')

    const a = document.createElement('a')
    a.href = `mailto:${profileData.email}`
    a.innerText = profileData.email

    divBtn.appendChild(a)
    section.appendChild(divCreator.title('Contate-me'))
    section.appendChild(divCreator.text('Estou disponível para novos serviços e conexões. Contate-me via email ou whatsapp.'))
    section.appendChild(divCreator.iconSocial(links))
    section.appendChild(divBtn)

    return section
}

(async () => {
    const profileData = await fetchProfileData()
    await showActualPage('home', profileData)
    await setActive('mobile', profileData)
    await setActive('lg', profileData)

})()





