"use client"
import { PageTitle } from '../TextComponents';
import ProjectModel from "@/app/models/ProjectModel";
import ProjectComponent from "@/app/components/ProjectsPage/ProjectComponent";
import InnerPage from "@/app/components/InnerPage";

const ProjectsPageComponent = () => {


    const projects = [
        new ProjectModel(
            "Personal Portfolio Website",
            [
                "This website was created to showcase my projects and experience. The website is built using React and TypeScript\n" +
                "and is  designed to be responsive and accessible on all devices. The build process is automated using GitHub\n" +
                "Actions and the website is hosted on my home server behind a reverse proxy."
            ],
            [
                "React",
                "TypeScript",
                "GitHub Actions",
                "Nginx",
                "Jenkins"
            ],
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/100",
        ),
        new ProjectModel(
            "ASU Course Seat Notifier",
            [
                "Web application which sends notifications when a specific course opens for enrollment at ASU. Searches the ASU\n" +
                "course info page on a given interval and when more seats are opened up, the application sends a notification\n" +
                "through a JavaScript service worker.",
            ],
            [
                "JavaScript",
                "Node.js",
                "Express",
            ],
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/100",
        ),
        new ProjectModel(
            "Home Assistant Android App - Open Source Contribution",
            [
                "Made contribution to existing open-source project, Home Assistant, allowing for the control of fans from the Android Auto interface"
            ],
            [
                "Kotlin",
                "Android",
            ],
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/100",
        ),
        new ProjectModel(
            "Web and Mobile(iOS) Chat Application",
            [
                "Developed a real-time, messaging platform with support for group messages, replies and reactions with clients on\n" +
                "both iOS and web."
            ],
            [
                "Node.js",
                "Express",
                "Socket.io",
                "React",
                "Swift",
            ],
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/100",
        ),
        new ProjectModel(
            "Cellular Automata Fire Spread Simulation",
            [
                "Developed a cellular automata simulation of fire spread in a noise generated terrain. The simulation allows for the user to\n" +
                "customize the terrain as well as fire starting locations."
            ],
            [
                "JavaScript",
                "p5.js",
            ],
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/100",
        ),

    ]

    return (
        <InnerPage>
            <PageTitle title={"Projects"} />
            {projects.map((project, i) => (
                <ProjectComponent project={project} key={i} />
            ))}
        </InnerPage>
    );
};

export default ProjectsPageComponent;