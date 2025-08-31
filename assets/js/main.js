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
function showActualPage(page, profileData) {
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

//create div iconskills
function createDivIconSkills(skillList) {
    const divIcon = document.createElement('div')
    divIcon.classList.add('icons-skills')

    skillList.forEach((skill) => {
        const figure = document.createElement('figure')
        const img = document.createElement('img')

        img.src = skill.src
        img.alt = skill.nome

        figure.appendChild(img)

        divIcon.appendChild(figure)
    })

    return divIcon
}

//create div iconsocial
function createDivIconSocial(links) {

    const divIcon = document.createElement('div')
    divIcon.classList.add('icons-social')

    links.forEach((link) => {
        const a = document.createElement('a')
        const i = document.createElement('i')

        a.href = link.src
        i.classList.add('bi')
        i.classList.add(`bi-${link.nome}`)
        a.appendChild(i)

        divIcon.appendChild(a)
    })

    return divIcon
}

//create div softskills
function createDivSoftSkills(softSkillsList) {
    const divSoftSkill = document.createElement('div')

    const ul = document.createElement('ul')
    softSkillsList.forEach((skill) => {
        const li = document.createElement('li')
        li.innerText = skill
        ul.appendChild(li)
    })

    const h3 = document.createElement('h3')
    h3.innerText = 'SoftSkills'

    divSoftSkill.appendChild(h3)
    divSoftSkill.appendChild(ul)

    return divSoftSkill
}

//create div languages
function createDivLanguages(languagesList) {
    const divLanguages = document.createElement('div')

    const ul = document.createElement('ul')
    languagesList.forEach((language) => {
        const li = document.createElement('li')
        li.innerText = `${language.nome} (${language.nivel})`
        ul.appendChild(li)
    })

    const h3 = document.createElement('h3')
    h3.innerText = 'Idiomas'

    divLanguages.appendChild(h3)
    divLanguages.appendChild(ul)

    return divLanguages
}

//create div title
function createDivTitle(txt) {
    const divTitle = document.createElement('div')
    divTitle.classList.add('title')

    const h2 = document.createElement('h2')
    h2.innerText = txt

    divTitle.appendChild(h2)

    return divTitle
}

//create divText
function createDivText(txt) {
    const divText = document.createElement('div')
    divText.classList.add('text')

    const p = document.createElement('p')
    p.innerText = txt

    divText.appendChild(p)

    return divText
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

    const divIcon = createDivIconSocial(links)

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
    divOutros.appendChild(createDivSoftSkills(softSkills))
    divOutros.appendChild(createDivLanguages(languages))
    divOutros.classList.add('subSkills')

    //adicionando elementos html
    section.appendChild(divSkills)
    divSkills.appendChild(divContainer)
    divContainer.appendChild(createDivTitle('Habilidades'))
    divContainer.appendChild(createDivIconSkills(hardSkills))
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
    divTitleProject.appendChild(createDivTitle('Projetos'))

    section.appendChild(divTitleProject)

    portfolio.forEach((projeto) => {
        const divCard = document.createElement('div')
        divCard.classList.add('card-project')

        const figure = document.createElement('figure')
        figure.classList.add('img-project')

        const img = document.createElement('img')
        img.src = projeto.src
        img.alt = projeto.nome

        const h3 = document.createElement('h3')
        h3.innerText = projeto.nome

        const p = document.createElement('p')
        p.innerText = projeto.descricao



        const divButtons = document.createElement('div')
        divButtons.classList.add('buttons-project')

        const aPrevia = document.createElement('a')
        aPrevia.href = projeto.previa

        const previaButton = document.createElement('button')
        previaButton.classList.add('btn')
        previaButton.innerText = 'Prévia'

        aPrevia.appendChild(previaButton)

        const aRepositorio = document.createElement('a')
        aRepositorio.href = projeto.repositorio

        const repositorioButton = document.createElement('button')
        repositorioButton.classList.add('btn-line')
        repositorioButton.innerText = 'Repositório'

        aRepositorio.appendChild(repositorioButton)


        /**<a href="https://tanizmoura.github.io/Projeto-Nikel/index.html">
                        <button type="button" class="btn">Prévia</button>
                    </a> */

        divButtons.appendChild(aPrevia)
        divButtons.appendChild(aRepositorio)

        figure.appendChild(img)

        divCard.appendChild(figure)
        divCard.appendChild(h3)
        divCard.appendChild(p)
        divCard.appendChild(createDivIconSkills(projeto.tecnologias))
        divCard.appendChild(divButtons)

        section.appendChild(divCard)
    })

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

    /*return
            <div class="button-more-projects">
                <a href="https://github.com/tanizmoura?tab=repositories">
                    <button class="btn-black" type="button">Ver todos os Projetos</button>
                </a>
            </div>
            </section>`*/
    return section
}

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

    const divEducacao = document.createElement('div')
    divEducacao.classList.add('education')

    divEducacao.appendChild(createDivTitle('Educação'))

    educacao.forEach((item) => {
        const educationBox = document.createElement('div')
        educationBox.classList.add('education-box')

        const h3 = document.createElement('h3')
        h3.innerText = item.nome

        const spanSubTitle = document.createElement('span')
        spanSubTitle.innerHTML = `${item.instituicao}<br>`

        const spanPeriod = document.createElement('span')
        spanPeriod.innerHTML = `${item.periodo.inicio} - ${item.periodo.fim}`

        educationBox.appendChild(h3)
        educationBox.appendChild(spanSubTitle)
        educationBox.appendChild(spanPeriod)

        if (item.certificados) {

            const h4 = document.createElement('h4')
            h4.innerText = 'Certificados'
            educationBox.appendChild(h4)
            item.certificados.forEach((certificado) => {
                const ul = document.createElement('ul')
                const li = document.createElement('li')
                const a = document.createElement('a')
                a.href = certificado.link
                a.innerText = certificado.nome

                li.appendChild(a)
                ul.appendChild(li)

                educationBox.appendChild(ul)
            })
        }



        divEducacao.appendChild(educationBox)
        console.log(item)
    })

    
    divContainer.appendChild(figure)
    divContainer.appendChild(createDivTitle('Sobre mim'))
    divContainer.appendChild(createDivText(`Nascida e criada na cidade de Porto Alegre - RS, tenho 30 anos e sempre tive um certo facínio
                        pela tecnologia. Fiz vários cursos online, porém nunca consegui focar de fato então acabei
                        perdendo a prática do que aprendi. Agora estou recomeçando através de bootcamps, já consigo
                        fazer sites responsíveis usando flexbox, bootstrap e atualmente estou aprendendo javascript.`))
    divContainerEducation.appendChild(divEducacao)
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
    section.appendChild(createDivTitle('Contate-me'))
    section.appendChild(createDivText('Estou disponível para novos serviços e conexões. Contate-me via email ou whatsapp.'))
    section.appendChild(createDivIconSocial(links))
    section.appendChild(divBtn)

    return section
}

(async () => {
    const profileData = await fetchProfileData()
    showActualPage('home', profileData)
    await setActive('mobile', profileData)
    await setActive('lg', profileData)

})()





