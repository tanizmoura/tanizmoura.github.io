async function loadData() {
  const response = await fetch("../data/profile.json");
  return await response.json();
}

export const views = {
  home: async () => {
    const profileData = await loadData();
    const socialMedia = profileData.links
      .map(
        (link) => `
      <li>
        <a href="${link.src}">
          <img src="${link.img}" alt="link ${link.nome}" />
        </a>
      </li>
      `,
      )
      .join("");
    return `<div class="profile">
              <img
                src="${profileData.perfilPhoto}"
                alt="imagem da desenvolvedora"
              />
            </div>
            <div class="info-box">
              <div class="txt-box">
                <p>Olá, me chamo</p>
                <h1>${profileData.nome}</h1>
                <h2>Sou ${profileData.titulo}</h2>
                <p>
                  ${profileData.frase}
                </p>
              </div>

              <div class="social-medias">
                <ul>
                  ${socialMedia}       
                  
                </ul>
              </div>
            </div>`;
  },
  habilidades: async () => {
    const profileData = await loadData();

    const hardSkills = profileData.skills.hardSkills
      .map((skill) => `<span>${skill}</span>`)
      .join("");

    const softSkills = profileData.skills.softSkills
      .map((skill) => `<li>${skill}</li>`)
      .join("");

    const idiomas = profileData.idiomas
      .map((idioma) => `<li>${idioma.nome} (${idioma.nivel})</li>`)
      .join("");
    return `<div class="left-side">
              ${hardSkills}
            </div>
            <div class="right-side">
              <div class="soft-skills">
                <h2>Soft Skills</h2>
                <ul>
                  ${softSkills}
                </ul>
              </div>

              <div class="languages">
                <h2>Idiomas</h2>
                <ul>
                  ${idiomas}
                </ul>
              </div>
            </div>`;
  },
  sobre: async () => {
    const profileData = await loadData();

    const formacao = profileData.formacao
      .map(
        (formacao) => `
      <p>
        <strong>${formacao.nome} ${formacao.instituicao}</strong> | ${formacao.periodo.inicio}
          – ${formacao.periodo.fim}</p>
      `,
      )
      .join("");

    const certificados = profileData.certificados
      .map(
        (certificado) =>
          `<p><strong>${certificado.titulo}:</strong> ${certificado.descricao}</p>`,
      )
      .join("");
    const curriculo = `<div class="curriculo-link"><a href="${profileData.curriculo.src}" target="_blank">
                        <img src="${profileData.curriculo.img}" alt="currículo" />
                        <p>/currículo</p>
                      </a></div>`;
    return `<div class="left-side">
              <p>
                ${profileData.sobre}
              </p>
              ${curriculo}
            </div>
            <div class="right-side">
              <div class="formation">
                <h2>Formação</h2>
                ${formacao}
              </div>

              <div class="certifications">
                <h2>Certificações</h2>
                ${certificados}
              </div>
            </div>`;
  },
  projetos: async () => {
    const profileData = await loadData();
    const projetos = profileData.portfolio
      .map(
        (projeto) => `<li>
                <div class="project-box">
                  <img
                    src="${projeto.img}"
                    alt="projeto ${projeto.titulo}"
                  />
                  <h3>${projeto.titulo}</h3>
                  <p>
                    ${projeto.descricao}
                  </p>

                  <div class="tecnologias">
                  ${projeto.tecnologias.map((tecnologia) => `<span>${tecnologia}</span>`).join("")}
                  </div>

                  <div class="buttons-project">
                    <a href="${projeto.previa}" target="_blank">Prévia</a>
                    <a href="${projeto.repositorio}" target="_blank">Repositório</a>
                  </div>
                </div>
              </li>
              `,
      )
      .join("");
    return `<ul>
              ${projetos}              
            </ul>
            <div class="more-projects buttons-project">
                <a href="https://github.com/tanizmoura?tab=repositories">Ver mais projetos</a>
            </div>
            `;
  },
  contato: async () => {
    const profileData = await loadData();
    const socialMedia = profileData.links
      .map(
        (link) => `
      <li>
        <a href="${link.src}">
          <img src="${link.img}" alt="link ${link.nome}" />
        </a>
      </li>
      `,
      )
      .join("");
    return `<h2>Vamos conversar</h2>
            <p>Disponível para novos projetos e oportunidades</p>
            <div class="social-medias">
                <ul>
                  ${socialMedia}       
                  
                </ul>
              </div>
            <div class="email">
              <a href="mailto:${profileData.email}">${profileData.email}</a>
            </div>`;
  },
};
