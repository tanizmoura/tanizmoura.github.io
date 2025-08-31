const divCreator = {
    iconSkills: (skillList) => {
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
    },
    iconSocial: (links) => {
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
    },
    softSkills: (softSkillsList) => {
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
    },
    languages: (languagesList) => {
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
    },
    education: (educationList) => {
        const divEducacao = document.createElement('div')
        divEducacao.classList.add('education')

        divEducacao.appendChild(divCreator.title('Educação'))

        educationList.forEach((item) => {
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
        })

        return divEducacao
    },
    projects: (projectList, section) => {

        projectList.forEach((projeto) => {
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

        divButtons.appendChild(aPrevia)
        divButtons.appendChild(aRepositorio)

        figure.appendChild(img)

        divCard.appendChild(figure)
        divCard.appendChild(h3)
        divCard.appendChild(p)
        divCard.appendChild(divCreator.iconSkills(projeto.tecnologias))
        divCard.appendChild(divButtons)

        section.appendChild(divCard)
    })
    },
    title: (txt) => {
        const divTitle = document.createElement('div')
        divTitle.classList.add('title')

        const h2 = document.createElement('h2')
        h2.innerText = txt

        divTitle.appendChild(h2)

        return divTitle
    },
    text: (txt) => {
        const divText = document.createElement('div')
        divText.classList.add('text')

        const p = document.createElement('p')
        p.innerText = txt

        divText.appendChild(p)

        return divText
    }
}
