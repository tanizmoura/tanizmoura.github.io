async function createProfile() {
    const profile = {
        name: document.getElementById('name'),
        title: document.getElementById('title'),
        location: document.getElementById('location'),
        job: document.getElementById('job'),
        about: document.getElementById('about-me'),
        links: document.getElementById('links'),
        photo: document.getElementById('profile-photo'),
        skills: {
            hardSkills: document.getElementById('hard-skills'),
            sofSkills: document.getElementById('soft-skills')
        },
        languages: document.getElementById('languages'),
        education: document.getElementById('education'),
        portfolio: document.getElementById('portfolio')
    }

    return profile
}