
class ProjectModel {
    title: string;
    description: string[];
    tech : string[];
    githubLink: string | null;
    hostedLink: string | null;

    constructor(title: string, description: string[], tech : string[], githubLink: string | null, hostedLink: string | null) {
        this.title = title;
        this.description = description;
        this.tech = tech;
        this.githubLink = githubLink;
        this.hostedLink = hostedLink;
    }
}

export default ProjectModel;