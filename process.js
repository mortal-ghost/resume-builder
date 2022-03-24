function profileProcess(profile) {
    const experience = processExperience(profile.experience);
    const skills = processSkills(profile.skills);
    const projects = processProjects(profile.projects);

    const data = {
        name: profile.name,
        email: profile.email,
        phone: profile.phone,
        linkedin: profile.linkedin,
        job_title: profile.job_title,
        education: profile.education,
        experience: experience,
        skills: skills,
        projects: projects,
        personalSkills: profile.summary
    };

    return data;
}

// check if experience has empty fields
function processExperience(experience) {
    const new_experience = [];
    
    for (let i = 0; i < experience.length; i++) {
        if (checkEmpty(experience[i])) {
            continue;
        } else {
            new_experience.push(experience[i]);
        }
    }

    return new_experience;
}

function processSkills(skills) {
    const new_skills = [];
    
    for (let i=0; i < skills.length; i++) {
        if (skills[i] == "") {
            continue;
        } else {
            new_skills.push(skills[i]);
        }
    }

    return new_skills;
}

function processProjects(projects) {
    const new_projects = [];

    for (let i = 0; i < projects.length; i++) {
        if (checkEmpty(projects[i])) {
            continue;
        } else {
            new_projects.push(projects[i]);
        }
    }

    return new_projects;
}

function checkEmpty(obj) {
    return Object.values(obj).every(val => val == '' || val === null);
}

module.exports = profileProcess;